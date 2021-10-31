"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const dogList = [
    {
        "id": "1anhdjeasd",
        "name": "Dog 1"
    },
    {
        "id": "2anhdjeasd",
        "name": "Dog 2"
    }
];
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("get /dogs");
    res.status(200);
    res.json(dogList);
    return res;
});
exports.get = get;
//# sourceMappingURL=dogs.js.map