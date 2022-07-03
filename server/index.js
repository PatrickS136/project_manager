const express = require("express");
const colors = require("colors");
// Environment variables
require("dotenv").config();
// GraphQL
const { graphqlHTTP } = require("express-graphql");

// GraphQL schema
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

// Connect to the database
connectDB();

// Set up the schema as a middleware, graphql only uses 1 route/endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`SERVER RUNNING ON ${port}`));
