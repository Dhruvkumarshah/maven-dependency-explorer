# maven-dependency-explorer README

This is the "maven-dependency-explorer" vscode extension.

## Features

This plugin help us to visualize the maven dependency. Along with filtering it.

![Alt Text](./feature-walkthrough.gif)

## Requirements

Works for Java maven project. Maven path is configured!

## Extension Settings

This extension contributes the following settings (Command + Shift + p):

- `Maven dependency explorer`: Run this command to view the dependency for maven project

## Known Issues

None.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.17

- Reduce build size

### 1.0.16

- Added handling for "Webview is disposed"

### 1.0.15

- Fixed minor bug

### 1.0.14

- [@m-pavel]( https://github.com/m-pavel ) fixed issue to open pom.xml from current editor.
- Ran npm audit

### 1.0.13

- [@Tordek947]( https://github.com/Tordek947 ) added maven executable option.

### 1.0.10

- bug fixed (path was not working correctly for Window.)

### 1.0.9

- bug fixed (set current webview to undefined on destroy.)

### 1.0.8

- Clean up on webview destroy
- Setting up webview when become active from background
- Removed first entry in pom tree which is project group & artifact id.

### 1.0.7

- localized the bootstrap

### 1.0.6

- Added Expand/Collapse functionality
- Added Spinner until dependency tree generated.
- Override Command + F key to change focus to input box.
- Fixed caret up/down logic

### 1.0.5

Fixed webview crash when tapping enter on input box.

### 1.0.4

Added Maven dependency explorer to top-right side menu when filename is pom.xml.

### 1.0.3

Fixed crash.

### 1.0.2

Fixed missing activationEvents issue.

### 1.0.1

Corrected spell.

### 1.0.0

Initial release of maven dependency explorer.

---
