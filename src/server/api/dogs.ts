import { Operation } from "express-openapi";

const dogList = [
  {
    id: "507f1f77bcf86cd799439011",
    name: "Van Du",
  },
  {
    id: "507f12221f77bcf86cd799439",
    name: "PitPull",
  },
];

export const get: Operation = async (req, res) => {
    res.status(200);
    res.json(dogList);
    return res;
};
