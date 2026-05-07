import express from "express";
import cors from "cors";
import compression from "compression";

import indexRoutes from "./routes/index.js";
import aboutRoutes from './routes/about.js';
import courseRoutes from './routes/course.js';

const app = express();

const PORT = process.env.PORT || 3000;
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost";

app.use(cors());
app.use(compression());
app.use("/", indexRoutes);
app.use(aboutRoutes);
app.use(courseRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}. Visit ${API_BASE_URL}:${PORT}`
  );
});

export default app;
