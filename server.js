const express = require("express");
const app = express();
const schema = require("./Schemas");
const { graphqlHTTP } = require("express-graphql");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("Server is running!");
});
