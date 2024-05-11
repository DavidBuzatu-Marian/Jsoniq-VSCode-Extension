import { cwd } from "process";
import { beforeEach, afterEach, describe, expect, test } from "@jest/globals";

import type {
  CompletionList,
  FullDocumentDiagnosticReport,
} from "vscode-languageserver";

import { LanguageServerWrapper } from "./languageServerWrapper";

let languageServer: LanguageServerWrapper;

const defaultFile = `file://${cwd()}/resources/example.jq`;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const init = async () => {
  await languageServer.request("initialize", {
    rootUri: `file:///home/user/project`,
    capabilities: {},
  });
};

const documentVersion = new Map<string, number>();

const didOpen = (text: string, uri: string = defaultFile) => {
  const version = documentVersion.get(uri) ?? 1;

  languageServer.notify("textDocument/didOpen", {
    textDocument: { uri, version, text },
  });

  documentVersion.set(uri, version + 1);
};

const didChange = (text: string, uri: string = defaultFile) => {
  const version = documentVersion.get(uri) ?? 1;

  languageServer.notify("textDocument/didChange", {
    textDocument: { uri, version },
    contentChanges: [{ text: text }],
  });

  documentVersion.set(uri, version + 1);
};

const completionRequest = async (
  position: { line: number; character: number },
  uri: string = defaultFile
) => {
  return (await languageServer.request("textDocument/completion", {
    textDocument: { uri },
    position,
  })) as unknown as CompletionList;
};

describe("jsoniq-language-server", () => {
  beforeEach(() => {
    languageServer = new LanguageServerWrapper(
      "npx",
      ["tsx", `${cwd()}/src/server.ts`],
      !!process.env.VERBOSE
    );

    languageServer.start();
  });

  afterEach(() => {
    languageServer.stop();
  });

  test("can initialize and give completions", async () => {
    await init();
    didOpen("va");
    const completionResponse1 = await completionRequest({
      line: 1,
      character: 1,
    });

    const expectedItems = [
      { label: "jsoniq" },
      { label: "module" },
      { label: "declare" },
      { label: "import" },
      { label: "some" },
      { label: "every" },
      { label: "not" },
      { label: "null" },
      { label: "true" },
      { label: "false" },
      { label: "ordered" },
      { label: "unordered" },
      { label: "function" },
      { label: "validate" },
      { label: "annotate" },
      { label: "insert" },
      { label: "delete" },
      { label: "rename" },
      { label: "replace" },
      { label: "copy" },
      { label: "append" },
      { label: "break" },
      { label: "continue" },
      { label: "exit" },
      { label: "for" },
      { label: "let" },
      { label: "if" },
      { label: "switch" },
      { label: "try" },
      { label: "typeswitch" },
      { label: "variable" },
      { label: "while" },
    ];

    expect(completionResponse1.isIncomplete).toBe(false);
    expect(completionResponse1.items).toStrictEqual(expectedItems);

    didChange("var");

    const completionResponse2 = await completionRequest({
      line: 1,
      character: 2,
    });

    expect(completionResponse2.isIncomplete).toBe(false);
    expect(completionResponse2.items).toStrictEqual(expectedItems);
  });

  test("can shutdown and exit", async () => {
    await init();

    const response = await languageServer.request("shutdown", {});
    expect(response).toBeNull();
    await wait(20);
    expect(languageServer.process?.exitCode).toBeNull();

    languageServer.notify("exit", {});
    await wait(20);
    expect(languageServer.process?.exitCode).toBe(0);
  });

  test("can initialize and give diagnostics", async () => {
    await init();
    didOpen(`for $store in $stores
    for $state in $states
    where $state.code eq $store.state
    group by $code := $state.code
    order by $code
    return $res := $res, { "code" : $code, "stores" : count($store) };`);

    const expectedDiagnostics = `mismatched input ',' expecting {';', '=', '(', '*', 'eq', 'ne', 'lt', 'le', 'gt', 'ge', '!=', '<', '<=', '>', '>=', '||', '+', '-', 'div', 'idiv', 'mod', '!', '[', '.', 'or', 'and', 'to', 'instance', 'is', 'treat', 'cast', 'castable'}`;

    const diagnostics = (await languageServer.request(
      "textDocument/diagnostic",
      { textDocument: { uri: defaultFile } }
    )) as FullDocumentDiagnosticReport;

    expect(diagnostics).toStrictEqual({
      kind: "full",
      items: [
        {
          severity: 1,
          message: expectedDiagnostics,
          range: {
            start: { line: 5, character: 23 },
            end: { line: 5, character: 24 },
          },
          source: "JSONiq language server",
        },
      ],
    });
  });

  test("can initialize and give semantic tokens", async () => {
    await init();
    didOpen(
      `return $res := $res, { "code" : $code, "stores" : count($store) };`
    );
    const expectedData = {
      data: [
        0, 0, 6, 2, 1, 0, 7, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 4, 2,
        10, 0, 0, 3, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 5, 1, 6, 128,
        0, 2, 6, 8, 1, 0, 7, 1, 10, 0, 0, 2, 1, 3, 128, 0, 1, 4, 3, 128, 0, 0,
        4, 5, 4, 0, 6, 8, 8, 1, 0, 9, 1, 10, 0, 0, 2, 5, 6, 258, 0, 5, 1, 15, 4,
        0, 1, 1, 3, 128, 0, 1, 5, 3, 128, 0, 0, 5, 5, 4, 0, 5, 1, 15, 1, 0, 2,
        1, 6, 128,
      ],
    };

    const semanticTokens = await languageServer.request(
      "textDocument/semanticTokens/full",
      { textDocument: { uri: defaultFile } }
    );

    expect(semanticTokens).toStrictEqual(expectedData);
  });

  test("semantic tokens with last token new variable", async () => {
    await init();
    didOpen(
      `return $res := $res, { "code" : $code, "stores" : count($store) };
      $`
    );
    const expectedData = {
      data: [
        0, 0, 6, 2, 1, 0, 7, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 4, 2,
        10, 0, 0, 3, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 5, 1, 6, 128,
        0, 2, 6, 8, 1, 0, 7, 1, 10, 0, 0, 2, 1, 3, 128, 0, 1, 4, 3, 128, 0, 0,
        4, 5, 4, 0, 6, 8, 8, 1, 0, 9, 1, 10, 0, 0, 2, 5, 6, 258, 0, 5, 1, 15, 4,
        0, 1, 1, 3, 128, 0, 1, 5, 3, 128, 0, 0, 5, 5, 4, 0, 5, 1, 15, 1, 0, 2,
        1, 6, 128, 1, 6, 1, 3, 128,
      ],
    };
    const semanticTokens = await languageServer.request(
      "textDocument/semanticTokens/full",
      { textDocument: { uri: defaultFile } }
    );
    expect(semanticTokens).toStrictEqual(expectedData);
  });

  test("semantic tokens with last token attribute", async () => {
    await init();
    didOpen(
      `return $res := $res, { "code" : $code, "stores" : count($store) };
      .`
    );
    const expectedData = {
      data: [
        0, 0, 6, 2, 1, 0, 7, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 4, 2,
        10, 0, 0, 3, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 5, 1, 6, 128,
        0, 2, 6, 8, 1, 0, 7, 1, 10, 0, 0, 2, 1, 3, 128, 0, 1, 4, 3, 128, 0, 0,
        4, 5, 4, 0, 6, 8, 8, 1, 0, 9, 1, 10, 0, 0, 2, 5, 6, 258, 0, 5, 1, 15, 4,
        0, 1, 1, 3, 128, 0, 1, 5, 3, 128, 0, 0, 5, 5, 4, 0, 5, 1, 15, 1, 0, 2,
        1, 6, 128, 1, 6, 1, 15, 1,
      ],
    };
    const semanticTokens = await languageServer.request(
      "textDocument/semanticTokens/full",
      { textDocument: { uri: defaultFile } }
    );
    expect(semanticTokens).toStrictEqual(expectedData);
  });

  test("semantic tokens with last token annotation", async () => {
    await init();
    didOpen(
      `return $res := $res, { "code" : $code, "stores" : count($store) };
      %`
    );
    const expectedData = {
      data: [
        0, 0, 6, 2, 1, 0, 7, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 4, 2,
        10, 0, 0, 3, 1, 3, 128, 0, 1, 3, 3, 128, 0, 0, 3, 5, 4, 0, 5, 1, 6, 128,
        0, 2, 6, 8, 1, 0, 7, 1, 10, 0, 0, 2, 1, 3, 128, 0, 1, 4, 3, 128, 0, 0,
        4, 5, 4, 0, 6, 8, 8, 1, 0, 9, 1, 10, 0, 0, 2, 5, 6, 258, 0, 5, 1, 15, 4,
        0, 1, 1, 3, 128, 0, 1, 5, 3, 128, 0, 0, 5, 5, 4, 0, 5, 1, 15, 1, 0, 2,
        1, 6, 128, 1, 6, 1, 11, 2,
      ],
    };
    const semanticTokens = await languageServer.request(
      "textDocument/semanticTokens/full",
      { textDocument: { uri: defaultFile } }
    );
    expect(semanticTokens).toStrictEqual(expectedData);
  });
});
