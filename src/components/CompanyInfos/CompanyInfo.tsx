/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/04/2024 21:57:29
*/
import React, { FC, useEffect } from 'react'
import './CompanyInfo.css'

interface CompanyInfoProps {}

const CompanyInfo: FC<CompanyInfoProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {}
    runLocalData()
  })

  return (
    <div className="socityInfo">
      <form className="p-2">
        <div className="previousLogo">
          <img src="" alt="" />
        </div>
        <div className="logo flex p-[0.2rem]">
          <label htmlFor="logo"> Logo : </label>
          <input type="file" name="logo" id="logo" />
        </div>
        <div className="socityName p-[0.2rem]">
          <input type="text" name="socity_name" id="SName" placeholder="name" />
        </div>
        <div className="socityAdresse p-[0.2rem]">
          <input
            type="text"
            name="socity_address"
            id="SAddress"
            placeholder="Address"
          />
        </div>
        <div className="socity_cityAndZIP_code p-[0.2rem]">
          <input
            type="text"
            name="socity_ZIP"
            id="SZip"
            className="w-[20%] mr-1"
            placeholder="ZIP"
          />
          <input type="text" name="socity_city" id="SCity" placeholder="city" />
        </div>
        <div className="socityCountry p-[0.2rem]">
          <input
            type="text"
            name="Country"
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="socityFax p-[0.2rem]">
          <input type="text" name="fax" id="fax" placeholder="Fax" />
        </div>
        <div className="socityName p-[0.2rem]">
          <input type="email" name="email" id="email" placeholder="email" />
        </div>
        <div className="socitySiret p-[0.2rem]">
          <input
            type="text"
            name="Siret"
            id="siret"
            placeholder="SIREN/SIRET Numero"
          />
        </div>
        <div className="socityRCSVille p-[0.2rem]">
          <input type="text" name="RCSVille" id="Rcs" placeholder="RCS Ville" />
        </div>
        <div className="socityCodeNaf p-[0.2rem]">
          <input
            type="text"
            name="CodeNaf"
            id="CodeNaf"
            placeholder="Code NAF"
          />
        </div>
        <div className="socitTVA p-[0.2rem]">
          <input type="text" name="TVA" id="TVA" placeholder="Numero de TVA" />
        </div>
      </form>
    </div>
  )
}

export default CompanyInfo
