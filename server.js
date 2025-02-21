require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// import x from '../ Routes/bookRoutes'
// import x from './Routes'
const bookRoutes = require("./Routes/bookRoutes");
const memberRoutes = require("./Routes/memberRoutes");
const Book = require("./modles1/Book"); 
const Member = require("./modles1/Member"); 
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Library Management System Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 