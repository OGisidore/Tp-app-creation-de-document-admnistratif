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
  const [withTva , setTva] = useState<boolean>(true)


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      console.log(color);
      setRows([""])
      setTva(true)


    }
    runLocalData()
  },[])

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
        <div className="table">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border-double">reference</th>
                <th className='border'>Quantite</th>
                <th className='border'>Designation</th>
                <th className='border'>unite</th>
                <th className='border'>Prix unitaire</th>
                <th className='border'>Montant HT </th>
                {withTva && <th className='border'>TVA %</th>}
                
                
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr>
                  <td className='border '> {row}</td>
                  <td className='border'>manger</td>
                  <td className='border'>manger</td>
                  <td className='border'>manger</td>
                  <td className='border'>manger</td>
                  <td className='border'>manger</td>
                  <td className='border'>manger</td>
                 
                  <td>
                    <button>Supprimer</button>
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