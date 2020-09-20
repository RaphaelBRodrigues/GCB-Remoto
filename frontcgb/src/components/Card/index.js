import React, {useEffect, useState} from 'react';
import { deleteDoctor } from "./handles";
import "./index.css";

export default ({ doctor , updateList }) => {

    async function confirmDeleteDoctor(id){
        const sure = window.confirm("Deseja deletar o doutor(a) "+doctor.name+"?");

        if(sure){
            await deleteDoctor(id);
            updateList(id);
        }
    }

    return (
        <section id="doctor-card">
            <fieldset>
                <legend>
                    <p>
                        {doctor.name}
                    </p>
                </legend>
                <div>
                    <div>
                        <ul>
                            <li>
                                Telefone: {doctor.phone}
                            </li>
                            <li>
                                CRM: {doctor.crm}
                            </li>
                            <li>
                                Estado: {doctor.state}
                            </li>
                            <li>
                                Cidade: {doctor.city}
                            </li>
                        </ul>
                    </div>
                    <div>

                        {/*{specialities && specialities.map((speciality)=>{*/}
                        {/*        return <p>teste</p>*/}
                        {/*})}*/}
                    </div>
                </div>
                <button onClick={()=>confirmDeleteDoctor(doctor.id)}>
                    Deletar
                </button>
            </fieldset>
        </section>
    );
}

