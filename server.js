import "dotenv/config";
import app from "./config/express.config.js";
import apiRoutes from "./routes.js";
import { sendResponse } from "./utils/response.util.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  sendResponse(res, 200, "Welcome to inBlood API", null, null);
});

app.get("/health", (req, res) => {
  sendResponse(res, 200, "ok", null, null);
});

app.use((req, res) => {
  sendResponse(
    res,
    404,
    "Route not found",
    null,
    `${req.method} ${req.originalUrl} does not exist`
  );
});

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
