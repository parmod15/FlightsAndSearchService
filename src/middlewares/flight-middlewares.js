const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // If any of body params are missing we come inside the if
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      error: "Missing mandatory properities to create a flight",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
