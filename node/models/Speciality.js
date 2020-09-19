const knex = require("../database/connection");


class Speciality{

    async getSpecialities(){
        console.log("getDoctors");
    }

    async getDoctorSpecialities(doctor_id){
        console.log("getDoctorSpecialities");
    }
}


module.exports = new Speciality();