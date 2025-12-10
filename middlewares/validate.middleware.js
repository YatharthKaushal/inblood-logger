import { sendResponse } from "../utils/response.util.js";

/**
 * Joi validation middleware
 * @param {object} schema - Joi schema to validate against
 * @example validate(printLogSchema)
 */
export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessage = error.details.map((d) => d.message).join(", ");
    console.log("Validation error:", errorMessage);
    return sendResponse(res, 400, "Validation failed", null, errorMessage);
  }

  next();
};
