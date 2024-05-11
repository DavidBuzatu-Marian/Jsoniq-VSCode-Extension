import { Token } from "antlr4ts";
import {
  SemanticToken,
  TokenType,
  tokenModifiers,
  tokenTypes,
} from "./tokenLegend.js";
import log from "../../log.js";

const keywordSet = new Set([
  "module",
  "version",
  "external",
  "context",
  "type",
  "for",
  "typeswitch",
  "switch",
  "if",
  "then",
  "else",
  "try",
  "catch",
  "where",
  "group",
  "by",
  "order",
  "as",
  "at",
  "in",
  "declare",
  "import",
  "replace",
  "value",
  "of",
  "rename",
  "insert",
  "delete",
  "copy",
  "append",
  "with",
  "modify",
  "into",
  "break",
  "loop",
  "continue",
  "exit",
  "returning",
  "while",
  "annotate",
  "validate",
  "castable",
  "cast",
  "treat",
  "is",
  "statically",
  "instance",
  "of",
  "to",
  "collation",
  "satisfies",
  "stable",
  "empty",
  "allowing",
  "return",
  "least",
  "greatest",
  "some",
  "every",
  "ascending",
  "descending",
  "ordering",
  "order",
  "ordered",
  "case",
  "default",
  "unordered",
  "eq",
  "ne",
  "lt",
  "le",
  "gt",
  "ge",
  "and",
  "or",
  "not",
  "$$",
]);

const staticModifierSet = new Set([
  "external",
  "context",
  "type",
  "true",
  "false",
  "null",
  "count",
  "position",
]);

const localStorageSet = new Set(["function", "let", "variable"]);

const operatorSet = new Set([":=", "=", "+", "-", "*", "/", ":", "."]);

const builtInFunctionsSet = new Set([
  "count",
  "position",
  "json-file",
  "concat",
  "string-join",
  "distinct-values",
  "size",
  "project",
  "sum",
  "accumulate",
  "descendant-objects",
  "intersect",
  "keys",
  "remove-keys",
  "values",
  "exactly-one",
  "one-or-more",
  "zero-or-one",
  "avg",
  "max",
  "min",
  "empty",
  "head",
  "insert-before",
  "remove",
  "subsequence",
  "tail",
  "index-of",
  "deep-equal",
  "codepoint-equal",
  "codepoints-to-string",
  "contains",
  "encode-for-uri",
  "ends-with",
  "lower-case",
  "matches",
  "normalize-unicode",
  "replace",
  "resolve-uri",
  "serialize",
  "string",
  "starts-with",
  "string-join",
  "string-length",
  "string-to-codepoints",
  "substring",
  "translate",
  "upper-case",
  "current-time",
  "format-time",
  "time",
  "parallelize",
  "doc",
]);

const namespaceSet = new Set(["namespace", "jsoniq"]);
const constantsSet = new Set(["true", "false", "json", "null"]);
const commentMatchingRegexpr = /\(:.*?(:\))/;
const stringMatchingRegexpr = /(?<=\")(.*?)(?=\")/;

const numberMatchingRegexpr = /\d+/;
const separatorSet = new Set([" ", "\n", "\t", ";", ","]);
const punctuationSet = new Set([".", "[", "]", "(", ")", ","]);

export class TokensParser {
  private _tokens: Token[];

  constructor(tokens: Token[]) {
    this._tokens = tokens;
  }

  public getSemanticTokens(): SemanticToken[] {
    let parsedTokens: SemanticToken[] = [];
    let tokenCounter = 0;
    while (tokenCounter < this._tokens.length) {
      let tokenText = this._tokens[tokenCounter].text;
      if (tokenText === undefined) {
        log.write(`Found token without text: ${this._tokens[tokenCounter]}`);
        ++tokenCounter;
        continue;
      }
      if (separatorSet.has(tokenText)) {
        // Separator token does not need semantic coloring.
        ++tokenCounter;
        continue;
      }
      if (tokenText === "$") {
        // Variable
        tokenCounter = this.parseVariable(
          parsedTokens,
          this._tokens,
          tokenCounter
        );
      } else if (tokenText === ".") {
        // Attribute start
        tokenCounter = this.parseAttributes(
          parsedTokens,
          this._tokens,
          tokenCounter
        );
      } else if (tokenText === "as") {
        // Type change
        tokenCounter = this.parseTypeCasting(
          parsedTokens,
          this._tokens,
          tokenCounter
        );
      } else if (tokenText === "%") {
        // Annotation
        tokenCounter = this.parseAnnotations(
          parsedTokens,
          this._tokens,
          tokenCounter
        );
      } else {
        // Other
        this.parseAndStoreToken(parsedTokens, this._tokens[tokenCounter]);
        ++tokenCounter;
      }
    }
    return parsedTokens;
  }

  private parseAttributes(
    parsedTokens: SemanticToken[],
    lexerTokens: Token[],
    tokenCounter: number
  ): number {
    let currCounter = tokenCounter;
    let currToken = lexerTokens[currCounter];
    let currTokenText = currToken.text ?? "";
    while (
      currCounter < lexerTokens.length &&
      !separatorSet.has(currTokenText)
    ) {
      if (punctuationSet.has(currTokenText)) {
        this.storeTokenWithModifier(parsedTokens, currToken, [
          { typeNumber: tokenTypes["punctuation"] },
          { typeNumber: tokenModifiers["declaration"] },
        ]);
      } else if (currTokenText === "$$") {
        this.storeTokenWithModifier(parsedTokens, currToken, [
          { typeNumber: tokenTypes["keyword"] },
          {
            typeNumber: tokenModifiers["declaration"],
          },
        ]);
      } else if (currTokenText.match(numberMatchingRegexpr)?.input) {
        this.storeTokenWithModifier(parsedTokens, currToken, [
          { typeNumber: tokenTypes["number"] },
          {
            typeNumber: tokenModifiers["readonly"],
          },
        ]);
      } else if (builtInFunctionsSet.has(currTokenText)) {
        this.storeTokenWithModifier(parsedTokens, currToken, [
          { typeNumber: tokenTypes["function"] },
          {
            typeNumber: tokenModifiers["defaultLibrary"],
          },
        ]);
      } else {
        this.storeTokenWithModifier(parsedTokens, currToken, [
          { typeNumber: tokenTypes["property"] },
          {
            typeNumber: tokenModifiers["definition"],
          },
        ]);
      }
      currToken = lexerTokens[++currCounter];
      if (currToken === undefined) {
        break;
      }
      currTokenText = currToken.text ?? ""; // needed to handle missing text case
    }

    return currCounter;
  }

  private parseTypeCasting(
    parsedTokens: SemanticToken[],
    lexerTokens: Token[],
    tokenCounter: number
  ): number {
    let currentCount = tokenCounter;
    // Parse "as" token
    this.parseAndStoreToken(parsedTokens, lexerTokens[currentCount]);
    ++currentCount;
    // Skip whitespace
    while (
      currentCount < lexerTokens.length &&
      separatorSet.has(lexerTokens[currentCount].text ?? "")
    ) {
      ++currentCount;
    }
    if (currentCount < lexerTokens.length) {
      let currToken = lexerTokens[currentCount];
      this.storeTokenWithModifier(parsedTokens, currToken, [
        { typeNumber: tokenTypes["type"] },
        { typeNumber: tokenModifiers["static"] },
      ]);
      currentCount++;
    }
    return currentCount;
  }

  private parseAnnotations(
    parsedTokens: SemanticToken[],
    lexerTokens: Token[],
    tokenCounter: number
  ): number {
    let currentCount = tokenCounter;
    let currentToken = lexerTokens[currentCount];
    while (
      currentCount < lexerTokens.length &&
      !separatorSet.has(currentToken.text ?? "")
    ) {
      this.storeTokenWithModifier(parsedTokens, currentToken, [
        { typeNumber: tokenTypes["decorator"] },
        { typeNumber: tokenModifiers["static"] },
      ]);
      currentToken = lexerTokens[++currentCount];
    }
    return currentCount;
  }

  private parseVariable(
    parsedTokens: SemanticToken[],
    lexerTokens: Token[],
    tokenCounter: number
  ): number {
    let currentCounter = tokenCounter;
    this.storeTokenWithModifier(parsedTokens, lexerTokens[currentCounter], [
      { typeNumber: tokenTypes["variable"] },
      { typeNumber: tokenModifiers["readonly"] },
    ]);
    if (currentCounter + 1 === lexerTokens.length) {
      return currentCounter + 1;
    }
    let nextToken = lexerTokens[++currentCounter];
    this.storeTokenWithModifier(parsedTokens, nextToken, [
      { typeNumber: tokenTypes["variable"] },
      { typeNumber: tokenModifiers["readonly"] },
    ]);
    if (currentCounter + 1 === lexerTokens.length) {
      return currentCounter + 1;
    }
    return this.parseAttributes(parsedTokens, lexerTokens, currentCounter);
  }

  private parseAndStoreToken(parsedTokens: SemanticToken[], token: Token) {
    let tokenTypeAndModifier = this.parseTypeAndModifier(token.text);
    if (tokenTypeAndModifier === null) {
      return;
    }
    this.storeTokenWithModifier(parsedTokens, token, tokenTypeAndModifier);
  }

  private storeTokenWithModifier(
    parsedTokens: SemanticToken[],
    token: Token,
    tokenTypeAndModifier: [TokenType, TokenType]
  ) {
    let tokenLength = token.text?.length || 0;
    let tokenDetails: SemanticToken = {
      tokenType: tokenTypeAndModifier[0],
      tokenModifiers: tokenTypeAndModifier[1],
      startIdx: { line: token.line - 1, character: token.charPositionInLine },
      endIdx: {
        line: token.line - 1,
        character: token.charPositionInLine + tokenLength,
      },
      tokenLength: tokenLength,
    };
    parsedTokens.push(tokenDetails);
  }

  private parseTypeAndModifier(
    token: string | undefined
  ): [TokenType, TokenType] | null {
    if (token === undefined) {
      return [{ typeNumber: tokenTypes["string"] }, { typeNumber: 0 }];
    }
    let resultTokenType = tokenTypes["unknown"];
    let resultTokenModifier = 0;
    if (keywordSet.has(token)) {
      resultTokenType = tokenTypes["keyword"];
      resultTokenModifier = tokenModifiers["declaration"];
    } else if (localStorageSet.has(token)) {
      resultTokenType = tokenTypes["local_storage"];
      resultTokenModifier = tokenModifiers["declaration"];
    } else if (operatorSet.has(token)) {
      resultTokenType = tokenTypes["operator"];
    } else if (builtInFunctionsSet.has(token)) {
      resultTokenType = tokenTypes["function"];
      resultTokenModifier = tokenModifiers["defaultLibrary"];
    } else if (namespaceSet.has(token)) {
      resultTokenType = tokenTypes["namespace"];
      resultTokenModifier = tokenModifiers["definition"];
    } else if (constantsSet.has(token)) {
      resultTokenType = tokenTypes["variable"];
      resultTokenModifier =
        tokenModifiers["readonly"] | tokenModifiers["static"];
    } else if (punctuationSet.has(token)) {
      resultTokenType = tokenTypes["punctuation"];
      resultTokenModifier = tokenModifiers["definition"];
    } else if (token.match(commentMatchingRegexpr)?.input) {
      resultTokenType = tokenTypes["comment"];
      resultTokenModifier = tokenModifiers["declaration"];
    } else if (token.match(numberMatchingRegexpr)?.input) {
      resultTokenType = tokenTypes["number"];
      resultTokenModifier = tokenModifiers["declaration"];
    } else if (token.match(stringMatchingRegexpr)?.input) {
      resultTokenType = tokenTypes["string"];
      resultTokenModifier = tokenModifiers["declaration"];
    }
    if (staticModifierSet.has(token)) {
      resultTokenModifier = resultTokenModifier | tokenModifiers["static"];
    }
    if (resultTokenType === tokenTypes["unknown"] && !separatorSet.has(token)) {
      // It is a function invocation or declaration
      resultTokenType = tokenTypes["function"];
      resultTokenModifier = tokenModifiers["readonly"];
    }
    return [
      { typeNumber: resultTokenType },
      { typeNumber: resultTokenModifier },
    ];
  }
}
