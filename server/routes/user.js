const router = require("express").Router()

const User = require("../models/User")
const Listing = require("../models/Listing")

/* GET USER or HOST */

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findById(userId)
    res.status(202).json(user)
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
})

/* ADD LISTING TO WISHLIST */
router.patch("/:userId/:listingId", async (req, res) => {
  try {
    const { userId, listingId } = req.params

    // Check if the user and listing exist
    const user = await User.findById(userId);
    const listing = await Listing.findById(listingId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    // Add to Wishlist
    const favoriteListing = user.wishList.find((item) => item._id.toString() === listingId)
  
    if (favoriteListing) {
      user.wishList = user.wishList.filter((item) => item._id.toString() !== listingId)
      await user.save()
      res.status(200).json({ message: "Listing removed from wishlist", wishlist: user.wishList });
    } else {
      user.wishList.push(listing);
      await user.save();
      res.status(200).json({ message: "Listing added to wishlist",  wishlist: user.wishList });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err.message });
  }
})


module.exports = router;
