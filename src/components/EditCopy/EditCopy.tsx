/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:51
*/
import React, { FC, useEffect } from 'react';
import './EditCopy.css';
// import "bootstrap/dist/css/bootstrap.min.css"


interface EditCopyProps {

}


const EditCopy: FC<EditCopyProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="EditCopy mt-2 px-6">
      <div className="header flex flex-col items-center">
        <div className="headerContent p-2 rounded-b-lg   bg-gray-200">
          <div className="modelSelect flex ">
            <label htmlFor="modele">Modele de facture : </label>
            <select name="modele" id="model">
              <option value="Entreprise avec TVA "> Entreprise avec TVA </option>
              <option value="Entreprise sans TVA "> Entreprise avec TVA </option>
              <option value="Auto-entrepreneur "> Auto-entrepreneur </option>
            </select>
          </div>
          <div className="mentionSelect flex ">
            <label htmlFor="mention">Modele de facture : </label>
            <div className="options flex ">
              <div className="proforma flex">
                <input type="checkbox" name="proforma" id="proforma" />
                <label htmlFor="proforma">proforma</label>
              </div>
              <div className="duplicata flex">
                <input type="checkbox" name="duplicata" id="duplicata" />
                <label htmlFor="duplicata">duplicata</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="socityAndClientInformation flex">
        <div className="socityInfo">
          <form className='p-2' >
            <div className="previousLogo">
              <img src="" alt="" />
            </div>
            <div className="logo flex">
              <label htmlFor="logo"> Logo : </label>
              <input type="file" name="logo" id="logo" />
            </div>
            <div className="socityName p-1">
              <input type="text" name="socity_name" id="SName" />
            </div>
            <div className="socityAdresse p-1">
              <input type="text" name="socity_address" id="SAddress" />
            </div>
            <div className="socity_cityAndZIP_code gap 1">
              <input type="text" name="socity_city" id="SCity" />
              <input type="text" name="socity_ZIP" id="SZip" />
            </div>
            <div className="socityCountry">
              <input type="text" name="" id="" />
            </div>
            <div className="socityName">
              <input type="text" name="" id="" />
            </div>
            <div className="socityName">
              <input type="text" name="" id="" />
            </div>
            <div className="socityName">
              <input type="text" name="" id="" />
            </div>
            <div className="socityName">
              <input type="text" name="" id="" />
            </div>
            
            <input type="tel" name="" id="" />

          </form>
        </div>
        <div className="clientInfo"></div>
        .
      </div>
      


    </div>
  );
}

export default EditCopy;