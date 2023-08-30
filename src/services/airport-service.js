const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data) {
    console.log(data);
    try {
      const airport = await this.airportRepository.createAirport({
        name: data.name,
        cityId: data.cityId,
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong in Service later");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await this.airportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("Something went wrong in service later");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await this.airportRepository.updateAirport(
        airportId,
        data
      );
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.airportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
