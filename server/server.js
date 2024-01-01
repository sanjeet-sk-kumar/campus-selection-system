const express = require("express");
const fs = require("fs");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { graphqlHTTP } = require("express-graphql");
const resolvers = require("./resolvers/resolvers");
const cors = require("cors");

const port = 5000;

const schemaString = fs.readFileSync("./schema/schema.graphql", "utf-8");

const schema = makeExecutableSchema({
  typeDefs: schemaString,
  resolvers,
});

const app = express();
app.use(
  "/graphql",
  cors({
    origin: "http://localhost:3000",
  }),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.use(cors());

app.listen(port, () => console.log(`app is running on port: ${port}`));
