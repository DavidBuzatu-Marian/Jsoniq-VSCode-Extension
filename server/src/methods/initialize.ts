import { RequestMessage } from "../server";
import { tokenLegend } from "./semanticHighlighting/tokenLegend";
type ServerCapabilities = Record<string, unknown>;

interface InitializeResult {
  capabilities: ServerCapabilities;
  serverInfo?: {
    name: string;
    version?: string;
  };
}

export const initialize = (message: RequestMessage): InitializeResult => {
  return {
    capabilities: {
      textDocumentSync: 1,
      semanticTokensProvider: {
        legend: tokenLegend,
        range: true,
        full: { delta: false },
      },
      diagnosticProvider: {
        interFileDependencies: false,
        workspaceDiagnostics: false,
      },
      completionProvider: {},
    },
    serverInfo: {
      name: "jsoniq-language-server",
      version: "0.0.1",
    },
  };
};
