const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema (
  {
    customerId: {
      type: String,
      required: true,
    },
    listingId: {
      type: String,
      required: true,
    },
    hostId: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    totalPrice: Number,
})

const Booking = mongoose.model("Booking", BookingSchema)

module.exports = Booking
