import React, {useEffect, useState} from 'react';

import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faClipboard ,faSearch } from '@fortawesome/free-solid-svg-icons'

import { getDoctorByCrm } from './handle';


export default ({setCustomSearchDoctors,setShowRawList}) => {

    const [crm,setCrm] = useState("");
    const [customDoctorsIntern,setCustomDoctorsIntern] = useState([]);

    async function searchByCrm(){

        try{
            const res = await getDoctorByCrm(parseInt(crm));
            console.log(res);
            if(res.length > 0){
                setCustomSearchDoctors(res);
                setCustomDoctorsIntern(res);
            }else{
                alert("Médico não encontrado");
            }
        }catch (err){
            console.error(err);
            alert("Médico não encontrado!");
        }

    }

    useEffect(()=>{
        if(customDoctorsIntern.length > 0){
            setShowRawList(false);
        }else{
            setShowRawList(true);
        }
    },[customDoctorsIntern]);


    return (
        <div id="search-block">
          <FontAwesomeIcon
              onClick={()=>searchByCrm()}
              icon={faSearch}
          />
          <input
              placeholder={"Insira o CRM do médico"}
              type="text"
              value={crm}
              onChange={(e)=>{
                  setCrm(e.target.value);
              }}
          />
        </div>
    );
}

