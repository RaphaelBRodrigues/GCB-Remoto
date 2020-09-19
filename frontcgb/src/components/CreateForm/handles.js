import { api } from '../../services/api';


async function createDoctorAPI(data){
    const response = await api.post("/doctor",{...data});
    const { result } = response.data.result;

    if(result.length > 0){
        return result;
    }else{
        return false;
    }

}



export { createDoctorAPI };