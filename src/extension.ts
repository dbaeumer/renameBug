// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.languages.registerRenameProvider('plaintext', {
		provideRenameEdits(document, position, newName, token) {
			const edit = new vscode.WorkspaceEdit();
			edit.replace(document.uri, new vscode.Range(position, position.translate(0, 5)), newName);
			return edit;
		},
		prepareRename() {
			return null;
		}
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
