import { api } from '../../services/api';


async function getDoctorByCrm(crm){

    const response = await api.get("/doctor/"+crm);
    const { result } = response.data.result;


    if(result.length > 0){
        return result;
    }

    return false;
}



export { getDoctorByCrm };