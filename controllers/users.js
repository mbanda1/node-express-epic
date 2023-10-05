import userSchema from "../shemas/userSchema.js";
import { validateRequestQuery } from "../lib/validator.js";
import { getOne, getMany, addOne, getOneFromDb } from "../services/users.js";

export const getSingleUser = [
  getOne(),
];

export const getManyUsers = [
  getMany(),
];

export const addOneUser = [
  validateRequestQuery(userSchema),
  addOne(),
];


export const getOneFromDbById = [
  getOneFromDb(),
];
