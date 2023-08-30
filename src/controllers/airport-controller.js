const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: " Successfully create a Airport",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      data: {},
      success: false,
      message: "Not able to create a Airport",
      error: error,
    });
  }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a Airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete an Airport",
      error: error,
    });
  }
};

// PATCH -> /city/:id  and req.body[data]
const update = async (req, res) => {
  try {
    const airpot = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airpot,
      success: true,
      message: "Successfully updated an Airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update an Airport",
      error: error,
    });
  }
};

// GET -> /citiy/:id
const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return req.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched an Airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch an Airpot",
      error: error,
    });
  }
};

module.exports = {
  create,
  update,
  destroy,
  get,
};
