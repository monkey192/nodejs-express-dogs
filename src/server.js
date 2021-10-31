"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
const yaml = __importStar(require("js-yaml"));
const openapi = __importStar(require("express-openapi"));
const bodyParser = __importStar(require("body-parser"));
class Server {
    constructor() {
        this.port = process.env.PORT || '3000';
        this.app = (0, express_1.default)();
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
exports.default = Server;
//# sourceMappingURL=server.js.map