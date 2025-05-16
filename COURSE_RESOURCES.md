# MCP Bootcamp Course Resources 

## General
* [Our Github Repository](https://github.com/nordquant/mcp-course)
* [Slides](https://docs.google.com/presentation/d/1d3PYBUqYntgh6YHOPk4Va61B-b0ok1pRZWoJzA9Venc/edit?usp=sharing)
* [The Official MCP Homepage](https://modelcontextprotocol.io/)

## Environment Setup
 * [Visual Studio Code](https://code.visualstudio.com/)
 * [Installing uv](https://docs.astral.sh/uv/getting-started/installation/)

## Claude and Cursor
 * [Claude Desktop Download](https://claude.ai/download)
 * [Cursor Download](https://www.cursor.com/)

## Finding and Integrating Third-Party MCPs
 * [Zapier](https://zapier.com)
 * [Zapier MCP](https://zapier.com/mcp)

### Integrating Zapier's MCP (code)
```
{
  "mcpServers": {
    "zapier-mcp": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://actions.zapier.com/mcp/<<YOUR-TOKEN-COMES-HERE>>/sse"
      ]
    },
  }
}
```

### Stopping Zaper's MCP server
You only need to use this tool when you have issues with Zapier opening Browser Windows:

1. Remove the Zapier MCP from Claude / Cursor (by editing the JSON config)
2. Execute the following command:
   - Mac/Linux:
     `ps -ef | grep -i zapier | grep -v grep | awk '{print $2}' | xargs kill`
   - Windows:
     `Get-Process | Where-Object { $_.Name -like '*zapier*' } | ForEach-Object { $_.Kill() }`


## Third-Party MCP hubs
* [Projects selected by Anthropic](https://github.com/modelcontextprotocol/servers)
* [Smithery](https://smithery.ai/)
* [Cursor Directory](https://cursor.directory/)

## Implementing Our Own MCP Server
* [Official Python MCP Docs](https://github.com/modelcontextprotocol/python-sdk)

### Getting The Python Interpreter's path
* On a Max/Linux: `which python`
* On Window: `(Get-Command python).Path | -replace '\\', '/'`

### Launching the MCP inspector
```
npx @modelcontextprotocol/inspector <<PATH OF PYTHON>> <<PATH OF YOUR binance_mcp.py>>
```

### Adding Binance MCP to Claude / Cursor
This is just an example. Ensure that you replace the Python path and your `binance_mcp.py`'s path to the correct value:

```
{
  "mcpServers": {
    "zapier-mcp": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://actions.zapier.com/mcp/<<YOUR TOKEN HERE>>/sse"
      ]
    },
    "binance-mcp": {
      "command": "/Users/zoltanctoth/src/mcp-course/.venv/bin/python",
      "args": [
        "/Users/zoltanctoth/src/mcp-course/binance_mcp/binance_mcp.py"
      ]
    }
  }
}
```

## Publishing an MCP to the npm Registry

### Build / Install the project:
```
cd typescript_mcp
npm install
```

### Add your MCP to a host:
```
{
    "mcpServers": {
        "binance-ts-mcp": {
            "command": "npx",
            "args": [
                "<<FULL PATH TO YOUR LOCAL FOLDER>>/mcp-course/typescript_mcp"
            ]
        }
    }
}
```

### Publish the MCP to the npm Registry

* First, create an account on https://www.npmjs.com/

Now, execute these commands
```
npm login
npm publish
```

Access your MCP from the repository:
```
{
    "mcpServers": {
        "binance-ts-mcp": {
            "command": "npx",
            "args": [
                "<<add the `name` attribute's value from typescript_mcp/package.json here>>"
            ]
        }
    }
}

## Deploying MCPs to Render.com with SSE/Streamable HTTP
 1) Clone this repository: https://github.com/nordquant/binance-mcp
 2) Step into the cloned repository's folder
 2) Create a virtualenv `virtualenv venv --python=python3.12`
 3) Activate the virtualenv
 4) Install requirements.txt: `pip install -r requirements.txt`
 5) Run the MCP locally: `python binance_mcp.py`
 6) Run the MCP Inspector: `npx @modelcontextprotocol/inspector`
 7) Follow the instructions and connect to `http://localhost:8897/sse` 

```

## MCP Clients and Debugging MCPs
* [LangChain and LangGraph](https://www.langchain.com/)
* [React Agents (optional reading)](https://react-lm.github.io/)
* [LangChain MCP Adapter GitHub](https://github.com/langchain-ai/langchain-mcp-adapters)
* [LangSmith](https://www.langchain.com/langsmith)

## The MCP Roadmap
* [The official MCP Roadmap from Anthropic](https://modelcontextprotocol.io/development/roadmap)
