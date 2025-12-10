import { sendResponse } from "../../utils/response.util.js";

/**
 * @route GET /api/logs/health
 * @desc Health check for logs module
 * @body None
 * @response { message: "logs api route working", data: null, error: null }
 */
export const logHealth = async (req, res) => {
  return sendResponse(res, 200, "logs api route working", null, null);
};

/**
 * @route POST /api/logs
 * @desc Prints received data to console
 * @body { data: string }
 * @response { message: "Log printed", data: null, error: null }
 */
export const printLog = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return sendResponse(res, 400, "Missing required field", null, "data field is required");
  }

  console.log(data);
  return sendResponse(res, 200, "Log printed", null, null);
};
