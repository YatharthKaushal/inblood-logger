import Joi from "joi";

export const printLogSchema = Joi.object({
  message: Joi.string().allow(null),
  data: Joi.object().allow(null),
}).or("message", "data");
