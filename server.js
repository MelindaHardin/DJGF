const express = require ("express");
const path = require ("path");
const bodyParser = require ("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require ("./routes/apiRoutes");

