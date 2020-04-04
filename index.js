require("dotenv").config();

const app = require("express")();

app.get("/", async (request, response) => {
  response.send("hello world 2");
});

app.listen(process.env.APP_PORT || 3000);
