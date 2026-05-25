const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// HOME PAGE
app.get("/", (req, res) => {
  res.send(`
    <h1>MCP Gmail Project</h1>
    <p>This app is a Gmail MCP integration using OAuth 2.0.</p>
    <a href="/privacy-policy">Privacy Policy</a>
  `);
});

// PRIVACY POLICY
app.get("/privacy-policy", (req, res) => {
  res.send(`
    <h1>Privacy Policy</h1>
    <p>This application uses Google OAuth to access Gmail API.</p>
    <p>We do not store user emails or personal data.</p>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
