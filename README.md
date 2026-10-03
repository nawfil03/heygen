# 💬 n8n AI Chat Agent (OpenAI + Memory)

A simple **n8n workflow** for a conversational AI agent with memory. It is a starter/back-end workflow for chat assistants (e.g. to pair with a HeyGen avatar).

> The file is named `n8n.js`, but it contains an **n8n workflow in JSON format**.

---

## ⚙️ How it works

```
When chat message received (public chat trigger)
        │
     AI Agent
        ├── OpenAI Chat Model (gpt-4.1-mini)
        └── Simple Memory (window buffer, keyed by sessionId)
```

The agent remembers the recent conversation for each `sessionId`, so follow-up questions keep their context.

## 🚀 How to use

1. Download `n8n.js` and rename it to `n8n-workflow.json` (optional, makes importing easier).
2. In n8n, go to **Workflows → Import from File** and select the file.
3. Open the **OpenAI Chat Model** node and select your own OpenAI credential.
4. (Optional) Add a system message to the **AI Agent** node to give it a persona or instructions.
5. Click **Open chat** in n8n to test, or **Activate** the workflow and use the public chat URL.

Example input:

```json
{ "sessionId": "user1", "message": "Where is Burj Khalifa?" }
```

## 🛠️ Requirements

- n8n (with LangChain AI nodes)
- OpenAI API key

---

👤 Built by **Nawfil Faraaz** · [GitHub](https://github.com/nawfil03)
