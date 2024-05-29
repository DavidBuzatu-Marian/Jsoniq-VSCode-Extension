import { TextDocumentIdentifier } from "../../documents.js";
import { NotificationMessage } from "../../server.js";
import {
  clearPendingDiagnostic,
  documentsDiagnostics,
} from "../diagnostics/diagnostic.js";

interface DidCloseTextDocumentParams {
  textDocument: TextDocumentIdentifier;
}

export const didClose = (message: NotificationMessage): void => {
  const params = message.params as DidCloseTextDocumentParams;
  // Remove diagnostics on close
  documentsDiagnostics.delete(params.textDocument.uri);
  clearPendingDiagnostic(params.textDocument.uri);
};
