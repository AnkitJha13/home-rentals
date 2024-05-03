const router = require("express").Router()

const Booking = require("../models/Booking")
const Listing = require("../models/Listing")

/* CREATE BOOKING */

router.post("/create", async (req, res) => {
  try {
    const { customerId, listingId, hostId, startDate, endDate, totalPrice } = req.body
    const newBooking = new Booking({ customerId, listingId, hostId, startDate, endDate, totalPrice })
    await newBooking.save()
    res.status(201).json(newBooking)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: "Fail to create Booking", error: err.message });
  }
})

/* GET TRIPS */

router.get("/:customerId/trips", async (req, res) => {
  try {
    const { customerId } = req.params;
    const bookings = await Booking.find({ customerId });
    const bookedlistings = await Listing.find({ listingId: bookings.listingId })

    // Create a map to easily lookup listings by _id
    const listingMap = new Map(bookedlistings.map(listing => [listing._id.toString(), listing]));

    // Merge the data
    const mergedData = bookings.map(booking => {
      const listing = listingMap.get(booking.listingId.toString());
      return {
        ...booking.toObject(), // Convert booking to a plain JavaScript object
        ...listing.toObject()
      };
    });
    res.status(202).json(mergedData)
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

/* GET RESERVATION */

router.get("/:hostId/reservations", async (req, res) => {
  try {
    const { hostId } = req.params;
    // const bookedListing = await Listing.find({ hostId })
    // const bookedListingId = bookedListing._id
    const hostReservations = await Booking.find({ hostId });
    const bookedlistings = await Listing.find({ listingId: hostReservations.listingId })

    // Create a map to easily lookup listings by _id
    const listingMap = new Map(bookedlistings.map(listing => [listing._id.toString(), listing]));

    // Merge the data
    const mergedData = hostReservations.map(booking => {
      const listing = listingMap.get(booking.listingId.toString());
      return {
        ...booking.toObject(), // Convert booking to a plain JavaScript object
        ...listing.toObject()
      };
    });
    res.status(202).json(mergedData);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});


module.exports = router;
