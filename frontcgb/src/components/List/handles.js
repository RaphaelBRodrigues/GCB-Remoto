import { api } from '../../services/api';


async function getDoctors(){
    console.log(await api.get("/"));
}


export { getDoctors };