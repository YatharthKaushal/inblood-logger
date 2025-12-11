import { sendResponse } from "../../utils/response.util.js";

/**
 * @route GET /api/logs/health
 * @desc Health check for logs module
 * @body None
 * @response { message: "logs api route working", data: null, error: null }
 */
export const logHealth = async (req, res) => {
  console.log("Request:", req.method, req.originalUrl);
  const response = sendResponse(res, 200, "logs api route working", null, null);
  console.log("Response: 200 logs api route working");
  return response;
};

/**
 * @route POST /api/logs
 * @desc Prints received message and data to console
 * @body { message: string|null, data: object|null }
 * @response { message: "Log printed", data: null, error: null }
 */
export const printLog = async (req, res) => {
  console.log("Request:", req.method, req.originalUrl, req.body);
  const { message, data } = req.body;

  if (message) console.log("Message:", message);
  if (data) {
    // console.log("Data:", data);
    console.table(data);
  }

  const response = sendResponse(res, 200, "Log printed", null, null);
  console.log("Response: 200 Log printed");
  return response;
};
