import { APIError, invalidSchemaError } from "./http-errors.js";

export const validateRequestQuery = (schema) => (req, res, next) => {
  try {
    const { body } = req;
    const { value } = schema.parse(body);

    req.body = { value };
    next()
  } catch (err) {
    const error = new APIError(invalidSchemaError);
    return next(error);
  }
};