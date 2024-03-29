import express from "express";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as openapi from "express-openapi";
import * as bodyParser from "body-parser";
const morgan = require("morgan");

class Server {
  port: string = process.env.PORT || "3000";
  app = express();

  constructor() {
    this.app.use(morgan("combined"));
    const api = yaml.load(fs.readFileSync("./api.yaml", "utf-8"));
    openapi.initialize({
      app: this.app,
      apiDoc: api,
      paths: "./dist/server/api",
      consumesMiddleware: {
        "application/json": bodyParser.json(),
        "text/text": bodyParser.text(),
      },
      errorMiddleware: (err, req, res, next) => {
        res.status(400);
        res.json(err);
      },
      errorTransformer: (openapiError, ajvError) => {
        return { openapiError: openapiError, ajvError: ajvError };
      },
      exposeApiDocs: true,
    });

    this.app.get("/healthcheck", function (req, res) {
      res.json({
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
      });
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Listening on ${this.port}`);
    });
  }
}

export default Server;
