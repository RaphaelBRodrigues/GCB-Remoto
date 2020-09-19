import { api } from '../../services/api';


async function getDoctors(){
    const response = await api.get("/doctor");
    const { result } = response.data.result;

    return result;
}

async function getDoctorSpeciality(id){
    const response = await api.get("/doctorSpeciality/"+id);
    const { result } = response.data.result;

    if(result.status != 404){

        return result;
    }else{
        return {};
    }
}


export { getDoctors , getDoctorSpeciality };