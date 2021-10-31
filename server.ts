import express from "express";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as openapi from "express-openapi";
import * as bodyParser from "body-parser";

class Server {
  port: string = process.env.PORT || '3000';
  app = express();
  constructor() {
    const api = yaml.load(fs.readFileSync("swagger/api.yaml", "utf-8"));

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
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Listening on ${this.port}`);
    });
  }
}

export default Server;
