import React, {useEffect, useState} from 'react';
import "./index.css";

export default ({ doctor , specialities }) => {


    return (
        <section id="doctor-card">
            <fieldset>
                <legend>
                    {doctor.name} Barbosa Rodrigues
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
                        {specialities}
                        {/*{specialities && specialities.map((speciality)=>{*/}
                        {/*        return <p>teste</p>*/}
                        {/*})}*/}
                    </div>
                </div>
            </fieldset>
        </section>
    );
}

