require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const path = require("path")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const upload = require("./Middlewares/multerConfig");
app.use(
  "/uploads",
  express.static(path.join(__dirname, "Middlewares/uploads"))
);
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

require("./Jobs/CronJob Cleanup");
const authRoutes = require("./Routes/Auth.Routes");
const CertificateRoutes = require("./Routes/Certificate.Routes");
const contactusRoutes = require("./Routes/Contact.Routes");
const adminRoutes = require("./Routes/Admin.Routes");
const advBarRoutes = require("./Routes/AdvBar.Routes");

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
app.use("/pasaydan/contact/", contactusRoutes);
app.use("/pasaydan/admin/", adminRoutes);
app.use("/pasaydan/admin/", advBarRoutes);
const port = 8000;
// console.log(__dirname)

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
