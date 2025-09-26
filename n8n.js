{
  "nodes": [
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 2,
      "position": [
        160,
        -20
      ],
      "id": "a085773c-045a-438f-b23e-437918f1b696",
      "name": "AI Agent"
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "mode": "list",
          "value": "gpt-4.1-mini"
        },
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1.2,
      "position": [
        120,
        200
      ],
      "id": "5d217d30-b8a2-4f21-b0ff-1da5e98784a2",
      "name": "OpenAI Chat Model",
      "credentials": {
        "openAiApi": {
          "id": "YKD4WtYRjv5W7bw7",
          "name": "openai(ram sir)"
        }
      }
    },
    {
      "parameters": {
        "sessionIdType": "customKey",
        "sessionKey": "=sessionKey = {{$json[\"sessionId\"]}}"
      },
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.3,
      "position": [
        260,
        200
      ],
      "id": "88af0a74-8013-4bde-b3d0-889d04d38943",
      "name": "Simple Memory"
    },
    {
      "parameters": {
        "public": true,
        "initialMessages": "{\n  \"sessionId\": \"user1\",\n  \"message\": \"Where is Burj Khalifa?\"\n}\n",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1.1,
      "position": [
        -60,
        100
      ],
      "id": "3afcf893-7b71-4335-93e7-24a70f9e4611",
      "name": "When chat message received",
      "webhookId": "be9313fc-404c-4874-bc51-8d2d857cb939"
    }
  ],
  "connections": {
    "AI Agent": {
      "main": [
        []
      ]
    },
    "OpenAI Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Simple Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "When chat message received": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "aee285e862d73f094085d9e77e030ac7335765ff95695ccc37d826237f205f75"
  }
}
