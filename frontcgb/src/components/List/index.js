import React, {useEffect, useState} from 'react';
import "./index.css";

import Card from "../Card";

import {getDoctors, getDoctorSpeciality} from "./handles";
import {api} from "../../services/api";



export default () => {


    const [doctors,setDoctors] = useState([]);
    const [specialities,setSpecialities] = useState([]);

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
    },[]);

    // useEffect(()=>{
    //         listDoctorSpeciality().then((specialities)=>{
    //                 console.log(specialities);
    //         });
    // },[doctors]);


    return (
        <section id="doctor-block">
            <div>
                {doctors.map((doctor,index)=>{
                    return <Card doctor={doctor}  key={index} />
                })}
            </div>
        </section>
    );
}

