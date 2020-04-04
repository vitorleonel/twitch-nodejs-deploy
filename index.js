require("dotenv").config();

const app = require("express")();

app.get("/", async (request, response) => {
  response.send("hello world");
});

app.listen(process.env.APP_PORT || 3000);
