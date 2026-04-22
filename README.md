<div align="center"></div>

<h1 align="center">Nila Code</h1>

<div align="center">

<a target="_blank" href="https://opensource.org/licenses/Apache-2.0" style="background:none">
    <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" style="height: 22px;" />
</a>

<p></p>

**AI-powered coding assistant for VS Code and JetBrains**

</div>

## Getting started

Install the Nila Code extension from the VS Code marketplace, or load the `.vsix` directly.

Once installed, open the sidebar panel and configure a model in your `~/.nila-code/config.yaml` to start chatting.

## How it works

Nila Code runs an AI assistant directly in your editor. You can:

- **Chat** — ask questions about your codebase in natural language
- **Edit** — let the agent read, edit, and create files autonomously
- **Search** — grep and glob across your project
- **Run commands** — execute terminal commands directly from the chat

Models can be configured locally (via Ollama) or via cloud providers (Anthropic, OpenAI, Google, etc.).

## Configure a model

Edit `~/.nila-code/config.yaml`:

```yaml
name: Local Config
version: 1.0.0
schema: v1
models:
  - name: Gemma 3 4B
    provider: ollama
    model: gemma3:4b
```

For a full list of supported providers, see the [config schema](extensions/vscode/config_schema.json).

## Enable tools (agent mode)

To give the AI the ability to read/edit files and run commands, add tools to your config:

```yaml
tools:
  - name: read_file
    type: builtin
  - name: edit_existing_file
    type: builtin
  - name: run_terminal_command
    type: builtin
  - name: grep_search
    type: builtin
  - name: file_glob_search
    type: builtin
  - name: ls
    type: builtin
```

## Contributing

Read the [contributing guide](./CONTRIBUTING.md) and open an issue or PR on [GitHub](https://github.com/jayakrishna1993/nila-code).

## License

[Apache 2.0 © 2024 Narwal](./LICENSE)
