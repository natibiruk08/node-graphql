const express = require("express");
const app = express();
const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");

app.listen(8080, () => {
  console.log("Server is running!");
});
