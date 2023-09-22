const { response } = require("express");
const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: " Successfully created the  Airport",
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
    const response = await airportService.destroy(req.params.id);
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
    const response = await airportService.get(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Sucessfully fetched an Airpot",
      error: error,
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
