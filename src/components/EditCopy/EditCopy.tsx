/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:51
*/
import React, { FC, useEffect, useState } from 'react';
import './EditCopy.css';


interface EditCopyProps {

}


const EditCopy: FC<EditCopyProps> = () => {
  const [color, setColor] = useState<any>()
  const [rows, setRows] = useState<any[]>(["lola"])
  const [withTva, setTva] = useState<boolean>(true)


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      console.log(color);
      setRows([""])
      console.log('lolavgit ~ kiloju');


      setTva(true)
      console.log("git");



    }
    runLocalData()
  }, [])

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
      <div className={`socityAndClientInformation  w-full flex justify-between`}>
        <div className="socityInfo">
          <form className='p-2' >
            <div className="previousLogo">
              <img src="" alt="" />
            </div>
            <div className="logo flex p-[0.2rem]">
              <label htmlFor="logo"> Logo : </label>
              <input type="file" name="logo" id="logo" />
            </div>
            <div className="socityName p-[0.2rem]">
              <input type="text" name="socity_name" id="SName" placeholder='name' />
            </div>
            <div className="socityAdresse p-[0.2rem]">
              <input type="text" name="socity_address" id="SAddress" placeholder='Address' />
            </div>
            <div className="socity_cityAndZIP_code p-[0.2rem]">
              <input type="text" name="socity_ZIP" id="SZip" className="w-20 mr-1" placeholder='ZIP' />
              <input type="text" name="socity_city" id="SCity" placeholder='city' />
            </div>
            <div className="socityCountry p-[0.2rem]">
              <input type="text" name="Country" id="country" placeholder='Country' />
            </div>
            <div className="socityFax p-[0.2rem]">
              <input type="text" name="fax" id="fax" placeholder='Fax' />
            </div>
            <div className="socityName p-[0.2rem]">
              <input type="email" name="email" id="email" placeholder='email' />
            </div>
            <div className="socitySiret p-[0.2rem]">
              <input type="text" name="Siret" id="siret" placeholder='SIREN/SIRET Numero' />
            </div>
            <div className="socityRCSVille p-[0.2rem]">
              <input type="text" name="RCSVille" id="Rcs" placeholder='RCS Ville' />
            </div>
            <div className="socityCodeNaf p-[0.2rem]">
              <input type="text" name="CodeNaf" id="CodeNaf" placeholder='Code NAF' />
            </div>
            <div className="socitTVA p-[0.2rem]">
              <input type="text" name="TVA" id="TVA" placeholder='Numero de TVA' />
            </div>

          </form>
        </div>
        <div className="clientInfo">
          <form className='p-3 flex items-stretch flex-col w-full' >
            <div className="facturNumero p-2 w-[18rem] self-end">
              <div className="number">
                <label htmlFor="numeroFacture">FACTURE N </label>
                <input type="text" name='numeroFacture' id='numb_facture' />
              </div>
              <div className="emissionDate pt-[0.5rem]">
                <label htmlFor="date_ofEmission"> Date d'emission :  </label>
                <input type="date" name="date_ofEmission" id="date" />
              </div>
            </div>
            <div className="clientDes p-2 w-[18rem] self-end">
              <div className="clientCode p-[0.2rem]">
                <input type="text" name="client_code" id="C_code" placeholder='Code client (facultatif)' />
              </div>
              <div className="clientFullname p-[0.2rem]">
                <input type="text" name="Client_Fullname" id="C_fullname" placeholder='Nom et Prenom du client' />
              </div>
              <div className="clientAddress p-[0.2rem]">
                <input type="text" name="Client_Address" id="client_address" placeholder='Address du client' />
              </div>
              <div className="client_cityAndZIP_code p-[0.2rem]">
                <input type="text" name="client_ZIP" id="C_Zip" className="w-20 mr-1" placeholder='code postal' />
                <input type="text" name="client_city" id="c_City" placeholder='ville' />
              </div>

              <div className="clientCountry p-[0.2rem]">
                <input type="text" name="Pays" id="Pays" placeholder='Pays' />
              </div>
              <div className="clientEmail p-[0.2rem]">
                <input type="text" name="phone" id="phone " placeholder='email et telephone' />
              </div>
              <div className="clientTva p-[0.2rem]">
                <input type="text" name="client_tva" id="c_tva" placeholder='Numero TVA  du client ( facultatif)' />
              </div>
            </div>
            <div className="titleAdInput mt-2">
              <p>Mettez ici un titre</p>
              <input type="text" name='Title' id='titleAdd' className="w-[20rem]" />
            </div>

          </form>
        </div>
      </div>
      <div className="facBody">
        <div className="exucutiveDate">
          <label htmlFor="dateD_execution"> Date d'exécution de la vente ou de la prestation : </label>
          <input type="date" name="dateD_execution" id="ex_date" />
        </div>
        <div className="headColor flex justify-between">
          <div className="ColorBox">
            <label htmlFor="color">Couleur de l'entête du tableau :</label>
            <input onChange={(e) => setColor(e.target.value)} type="color" name="color" id="color" />
          </div>
          <div className="warning">Veuillez utiliser le point au lieu de la virgule pour les nombres.</div>

        </div>
        <div className="tables">
          <table className="shadow-2xl font-[popins] border-2 table-auto w-11/12 border-collapse ">
            <thead className='text-black'>
              <tr style={{ backgroundColor: color }}>
                <th className="py-3 border-1 border-black border-solid">reference</th>
                <th className='py-3 border-2 border-solid  border-black' >Designation</th>
                <th className='py-3 border-2 border-solid  border-black'>Quantite</th>
                <th className='py-3 border-2 border-solid  border-black'>unite</th>
                <th className='py-3 border-2 border-solid  border-black'>Prix unitaire</th>
                <th className='py-3 border-2 border-solid  border-black'>Montant HT </th>
                {withTva && <th className='py-3 border-solid border-2'>TVA %</th>}


                <th className='bg-white'></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr>
                  <td className='border-x-2 border-y-0 border-solid '> {row}</td>
                  <td className=' border-x-2 border-y-0 border-solid'>
                    <input type="text" name='designation' placeholder='entrer ici la designation' />
                  </td>
                  <td className=' border-x-2 border-y-0 border-solid'>
                    <input type="number" className='w-[5rem]' name='Quantite' placeholder='0' />
                  </td>
                  <td className=' border-x-2 border-y-0 border-solid'>
                    <select name="unite" id="">
                      <option value=""></option>
                      <option value="A">A</option>
                      <option value="G">G</option>
                      <option value="H">H</option>
                      <option value="Img">Img</option>
                      <option value="J">J</option>
                      <option value="Kg">Kg</option>
                      <option value="Km">Km</option>
                      <option value="L">L</option>
                      <option value="lot">lot</option>
                      <option value="M">M</option>
                      <option value="M2">M2</option>
                      <option value="M3">M3</option>
                      <option value="ML">ML</option>
                      <option value="Min">Min</option>
                      <option value="P">P</option>
                      <option value="Pcs">Pcs</option>
                      <option value="sec">sec</option>
                      <option value="T">T</option>
                    </select>
                  </td>
                  <td className=' p-1 border-x-2 border-y-0 border-solid'>
                    <input type="number" className='w-[5rem]' name='priceUnit' placeholder='0.00' />
                  </td>
                  <td className=' border-x-2 border-y-0 border-solid'>
                    <input type="text" className='w-[5rem]' name='priceUnit' defaultValue={"0.00"} />

                  </td>
                  {
                    withTva && <td className=' border-x-2 border-y-0 border-solid'>
                      <select name="Tva_taux">
                        <option value="0.00" selected>0.00</option>
                        <option value="1.00">1.00</option>
                        <option value="2.00">2.00</option>
                        <option value="2.10">2.10</option>
                        <option value="2.40">2.40</option>
                        <option value="2.50">2.50</option>
                        <option value="3.00">3.00</option>
                        <option value="3.80">3.80</option>
                        <option value="4.00">4.00</option>
                        <option value="4.50">4.50</option>
                        <option value="4.80">4.80</option>
                        <option value="5.00">5.00</option>
                        <option value="5.50">5.50</option>
                        <option value="6.00">6.00</option>
                        <option value="6.50">6.50</option>
                        <option value="7.00">7.00</option>
                        <option value="7.60">7.60</option>
                        <option value="8.00">8.00</option>
                        <option value="8.50">8.50</option>
                        <option value="8.75">8.75</option>
                        <option value="9.00">9.00</option>
                        <option value="10.00">10.00</option>
                        <option value="10.50">10.50</option>
                        <option value="11.00">11.00</option>
                        <option value="11.50">11.50</option>
                        <option value="12.00">12.00</option>
                        <option value="12.50">12.50</option>
                        <option value="13.00">13.00</option>
                        <option value="13.50">13.50</option>
                        <option value="14.00">14.00</option>
                        <option value="15.00">15.00</option>
                        <option value="16.00">16.00</option>
                        <option value="17.00">17.00</option>
                        <option value="18.00">18.00</option>
                        <option value="19.00">19.00</option>
                        <option value="19.25">19.25</option>
                        <option value="19.60">19.60</option>
                        <option value="20.00">20.00</option>
                        <option value="20.60">20.60</option>
                        <option value="21.00">21.00</option>
                        <option value="22.00">22.00</option>
                        <option value="23.00">23.00</option>
                        <option value="24.00">24.00</option>
                        <option value="25.00">25.00</option>
                        <option value="26.00">26.00</option>
                        <option value="27.00">27.00</option>
                        <option value="28.00">28.00</option>
                        <option value="29.00">29.00</option>
                      </select>

                    </td>

                  }

                  <td>
                    <div className="action flex bg-gray-400">
                      <div className="titles">
                       <div className="title">
                       <label htmlFor="addT" className=" text-blue-600 font-bold">T</label>
                        <input type="checkbox" name="Tit" id="" />
                       </div>
                       <div className="sum">
                       <label htmlFor="sumb" className=" text-orange-800 font-bold"> = </label>
                        <input type="checkbox" name="summ" id="" />
                       </div>
                      </div>
                    </div>
                    
                  </td>
                </tr>
              ))}
              <tr>
                <td rowSpan={3} colSpan={5}>mirain</td>
                <td rowSpan={3}>
                  <tr><td className='border'>lola</td></tr>
                  <tr><td className='border'>lola</td></tr>
                  <tr><td className='border'>lola</td></tr>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>



    </div>
  );
}

export default EditCopy;