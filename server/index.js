const express = require("express");
const colors = require("colors"); // Allows colors for console.log
const cors = require("cors"); // Resolve CORS errors
require("dotenv").config(); // Environment variables

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema"); // GraphQL Schema
const connectDB = require("./config/db"); // Function to connect to MongoDB, makes it cleaner if its on another file
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

// Use the CORS module
app.use(cors());

// Use GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Live on : http://localhost:${port}`));
