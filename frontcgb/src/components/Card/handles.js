import { api } from '../../services/api';


async function deleteDoctor(id){
    const response = await api.delete("/doctor/"+id);
    const { result } = response.data.result;

    return result;
}

async function updateDoctor(data,doctor_id){


    const response = await api.put("/doctor/"+doctor_id,{...data});
    const { result } = response.data.result;

    console.log(response);

    return result;
}

async function getDoctorSpecialities(doctor_id){

    const response = await api.get("/doctorSpeciality/"+doctor_id);
    const { result } = response.data.result;

    if(result.length > 0){
        return result;
    }

    return [];
}

async function deleteSpecialityAPI(data){
    const {doctor_id , speciality_id } = data;

    try{
        const response = await api.delete(`/doctorSpeciality/${doctor_id}/${speciality_id}`);
        const { result } = response.data.result;

        return result;
    }catch (err){
        return false;
    }

}



export { deleteDoctor , updateDoctor ,getDoctorSpecialities , deleteSpecialityAPI };