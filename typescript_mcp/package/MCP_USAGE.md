# Using the Demo MCP with Cursor

This guide explains how to integrate the Demo MCP server with Cursor.

## Setting Up

1. Make sure you have the MCP server built and ready:
   ```bash
   cd typescript_mcp
   npm install
   npm run build
   ```

2. The MCP definition is in `mcp-definition.json`. This file describes:
   - The available tools (add)
   - The available resources (greeting)
   - The command to start the server

## Configuring Cursor

To add this MCP to Cursor:

1. Open Cursor
2. Go to Settings
3. Navigate to the "Model Context Protocol" section
4. Click "Add Provider"
5. Select "Local Process"
6. Set the provider name (e.g., "Demo MCP")
7. For the configuration file, select the `mcp-definition.json` file
8. Save the configuration

## Using the MCP

Once configured, you can use the tools in Cursor:

- **Add Tool**: Adds two numbers together
  ```
  2 + 3 = 5
  ```

- **Greeting Resource**: Retrieves a greeting for a name
  ```
  Hello, World!
  ```

## Troubleshooting

If you encounter issues:

1. Make sure the server is not already running
2. Check that TypeScript is compiled with `npm run build`
3. Verify the paths in `mcp-definition.json` are correct for your system 