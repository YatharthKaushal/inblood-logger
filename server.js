import "dotenv/config";
import app from "./config/express.config.js";
import apiRoutes from "./routes.js";
import { sendResponse } from "./utils/response.util.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("We are Logging...");
  sendResponse(res, 200, "Welcome to inBlood API", null, null);
});

app.get("/health", (req, res) => {
  console.log("We are Healthy...");
  sendResponse(res, 200, "ok", null, null);
});

app.use("/api", apiRoutes);

app.use((req, res) => {
  console.log("404 Not Found:", req.method, req.originalUrl);
  sendResponse(
    res,
    404,
    "Route not found",
    null,
    `${req.method} ${req.originalUrl} does not exist`
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
