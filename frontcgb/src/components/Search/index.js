import React, {useEffect, useState} from 'react';

import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faClipboard ,faSearch } from '@fortawesome/free-solid-svg-icons'

import { getDoctorByCrm } from './handle';


export default ({setCustomSearchDoctors,setShowRawList}) => {

    const [crm,setCrm] = useState("");
    const [customDoctorsIntern,setCustomDoctorsIntern] = useState([]);
    const [beRed,setBeRed] = useState(false);
    async function searchByCrm(){
        try{
            setCustomDoctorsIntern([]);

            if(crm.length > 1){
                const crmSearch = parseInt(crm);
                const res = await getDoctorByCrm(parseInt(crmSearch));
                if(res.length > 0){

                    setCustomSearchDoctors(res);
                    setCustomDoctorsIntern(res);
                    setBeRed(false);
                    if(typeof crmSearch != "Number") {
                        setShowRawList(false);
                    }else{
                        setShowRawList(true);
                        alert();
                    }


                }else{
                    setBeRed(true);
                    setShowRawList(true);
                }
            }else{
                setShowRawList(true);
            }

        }catch (err){
            console.error(err);
            setBeRed(true);
            setShowRawList(true);
        }
    }

    useEffect(()=>{
        if(customDoctorsIntern.length > 0 && crm){
            setShowRawList(false);
        }else{
            setCustomDoctorsIntern([]);
            setShowRawList(true);
        }



    },[crm]);


    return (
        <div id="search-block">
          <FontAwesomeIcon
              onClick={()=>searchByCrm()}
              icon={faSearch}
          />
          <input
              placeholder={"Insira o CRM do médico"}
              type="text"
              style={
                  crm.length > 0 ?
                  beRed ? {border:"1px solid red",boxShadow:"0 0 10px red"}: {border:"1px solid rgba(0,0,0,0)"} : null
              }
              onKeyDown={(e)=>{
                  setCrm(e.target.value);
              }}
              value={crm}
              onChange={(e)=>{
                  setCrm(e.target.value);
                  searchByCrm().then();
              }}
          />
        </div>
    );
}

