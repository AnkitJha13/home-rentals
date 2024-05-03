const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors")

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const userRoutes = require("./routes/user.js")
const bookingRoutes = require("./routes/booking.js")

app.use(cors()); // Block other request which is not from your domain
app.use(express.json());

/* Serve static files from the "public" directory */
app.use(express.static('public'));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/users", userRoutes)
app.use("/bookings", bookingRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5003;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
