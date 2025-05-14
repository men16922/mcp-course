#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
// Create an MCP server
const server = new mcp_js_1.McpServer({
    name: "Demo",
    version: "1.0.0"
});
// Add an addition tool
server.tool("add", { a: zod_1.z.number(), b: zod_1.z.number() }, async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
}));
// Add a dynamic greeting resource
server.resource("greeting", new mcp_js_1.ResourceTemplate("greeting://{name}", { list: undefined }), async (uri, { name }) => ({
    contents: [{
            uri: uri.href,
            text: `Hello, ${name}!`
        }]
}));
// Start receiving messages on stdin and sending messages on stdout
const transport = new stdio_js_1.StdioServerTransport();
// Wrap the connection in an async function
async function startServer() {
    await server.connect(transport);
    console.error("MCP Demo Server v1.0.0 started");
    console.error("Tools: add");
    console.error("Resources: greeting://{name}");
}
// Execute the function
startServer().catch(err => {
    console.error("Error starting server:", err);
    process.exit(1);
});
