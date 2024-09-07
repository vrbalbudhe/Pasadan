const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

require("./Jobs/CronJob Cleanup");
const authRoutes = require("./Routes/Auth.Routes");
const CertificateRoutes = require("./Routes/Certificate.Routes");

app.use(cors(corsOptions)); 
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
      },
    },
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/pasaydan/auth/", authRoutes);
app.use("/pasaydan/user/", CertificateRoutes);

const port = 8000;
const connection = async () => {
  try {
    app.listen(port, () => {
      console.log(`${port} Is Listening..`);
    });
  } catch (error) {
    console.log(error);
  }
};
connection();
