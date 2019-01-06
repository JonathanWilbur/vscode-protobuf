"use strict";
exports.__esModule = true;
var vscode_1 = require("vscode");
var PROTOBUF_MODE = { language: 'proto', scheme: 'file' };
var diagnosticCollection;
function activate(ctx) {
    // This is in the VS Code extension example, but it does not say where
    // getDisposable() is or what it does.
    // ctx.subscriptions.push(getDisposable()); 
    diagnosticCollection = vscode_1.languages.createDiagnosticCollection('proto');
    ctx.subscriptions.push(diagnosticCollection);
    // workspace.onDidChangeTextDocument(onChange, null, ctx.subscriptions);
    // workspace.onDidOpenTextDocument(onOpen, null, ctx.subscriptions);
}
exports.activate = activate;
// function onOpen(document : TextDocument) : void {
//     if (document.languageId !== "proto") return;
//     let diagnosticMap: Map<string, Diagnostic[]> = new Map();
//     let diagnostics : Diagnostic[] = diagnosticMap.get(document.uri.toString());
//     if (!diagnostics) diagnostics = [];
//     const text : string = document.getText();
//     const lines : string[] = text.split(/\r?\n/g);
//     diagnosticMap.set(document.uri.toString(), diagnostics);
//     diagnosticMap.forEach((diagnostics, file) => {
//         diagnosticCollection.set(Uri.parse(file), diagnostics);
//     }); 
// }
// function onChange(event : TextDocumentChangeEvent) : void {
//     if (event.document.languageId !== "proto") return;
//     let diagnosticMap: Map<string, Diagnostic[]> = new Map();
//     let diagnostics : Diagnostic[] = diagnosticMap.get(event.document.uri.toString());
//     if (!diagnostics) diagnostics = [];
//     const text : string = event.document.getText();
//     const lines : string[] = text.split(/\r?\n/g);
//     diagnosticMap.set(event.document.uri.toString(), diagnostics);
//     diagnosticMap.forEach((diagnostics, file) => {
//         diagnosticCollection.set(Uri.parse(file), diagnostics);
//     });
// }
//# sourceMappingURL=index.js.map