import { Operation } from "express-openapi";

const dogList = [
    {
        "id": "1anhdjeasd",
        "name": "Dog 1"
    },
    {
        "id": "2anhdjeasd",
        "name": "Dog 2"
    }
]

export const get: Operation = async (req, res) => {
    console.log("GET /dogs");
    res.status(200);
    res.json(dogList);
    return res;
};
