import React, {useEffect, useState} from 'react';
import "./index.css";

import Card from "../Card";

import {getDoctors, getDoctorSpeciality} from "./handles";



export default ({ customSearchDoctors , showRawList }) => {

    useEffect(()=>{
        window.scroll({
            top: 100,
            behavior: "smooth"
        });
    },[showRawList]);


    const [doctors,setDoctors] = useState([]);
    const [specialities,setSpecialities] = useState([]);
    const [updateList , setUpdateList] = useState(0);




    async function listDoctors(){
        const doctors = await getDoctors();
        return doctors;
    };

    async function listDoctorSpeciality(){
            try{

            const doctorsID = doctors.map((doctor)=>{
               return doctor.id;
            });


              let specialitiesList = [];
              await doctorsID.map(async(doctorID)=>{
                     const specialities = await getDoctorSpeciality(doctorID);
                  specialitiesList.push(specialities);
              });


            return specialitiesList;

            }catch (err){
                console.log(err);
                return false;
            }
    };

    useEffect(()=>{
        listDoctors().then(doctor =>{
            setDoctors(doctor);
        });
    },[updateList]);

    return (
        <section id="doctor-block">
            <div>
                {showRawList && doctors.map((doctor,index)=>{
                    return <Card doctor={doctor} updateList={setUpdateList} key={index} />
                })}

                {!showRawList && customSearchDoctors.map((doctor,index)=>{
                    return <Card doctor={doctor} updateList={setUpdateList} key={index} />
                })}
            </div>
        </section>
    );
}

