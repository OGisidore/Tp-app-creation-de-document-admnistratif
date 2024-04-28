/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:51
*/
import React, { FC, useEffect, useState } from 'react';
import './EditCopy.css';
import { generateID } from '../../helpers/utiles';
import { Line } from '../../model/Line';
import { tvaPercent, unitValue } from '../../api/data';


interface EditCopyProps {

}


const EditCopy: FC<EditCopyProps> = () => {
  const [color, setColor] = useState<any>()
  const [rows, setRows] = useState<Line[]>([{
    _id: generateID(),
    name: ""
  }])
  const [withTva, setTva] = useState<boolean>(true)
  const handleAddLine = () => {
    setRows([...rows, {
      _id: generateID(),
      name: ""
    }])

  }
  const handleRemoveLine = (e: any, id: string) => {
    console.log("hello");

    setRows(rows.filter((row) => row._id !== id))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      console.log(color);
      console.log('lolavgit ~ kiloju');


      setTva(true)
      console.log("git");



    }
    runLocalData()
  }, [])

  return (
    <div className="EditCopy w-[98%l px-2 mt-2">
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
      <div className={`socityAndClientInformation  w-full flex flex-wrap justify-between`}>
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
              <input type="text" name="socity_ZIP" id="SZip" className="w-[20%] mr-1" placeholder='ZIP' />
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
          <form className='p-3 flex items-stretch flex-col' >
            <div className="facturNumero p-2 sm:w-[100%] md:w-[100%] lg:w-[80%]  self-end">
              <div className="number">
                <label htmlFor="numeroFacture">FACTURE N </label>
                <input type="text" className="w-[50%]" name='numeroFacture' id='numb_facture' />
              </div>
              <div className="emissionDate pt-[0.5rem]">
                <label htmlFor="date_ofEmission"> Date d'emission :  </label>
                <input type="date" className="w-[50%]" name="date_ofEmission" id="date" />
              </div>
            </div>
            <div className="clientDes w-[70%] sm:w-[100%] md:w-[100%] lg:w-[80%] flex flex-col items-end p-2 self-end">
              <div className="all w-[100%]">
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
                  <input type="text" name="client_ZIP" id="C_Zip" className="w-[20%] mr-1" placeholder='code postal' />
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

            </div>
            <div className="titleAdInput mt-2">
              <p>Mettez ici un titre</p>
              <input type="text" name='Title' id='titleAdd' className="w-[25%]" />
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
        <div className="tables ">
          {/* <div style={{ backgroundColor: color }} className="tableHeader font-bold grid grid-cols-12 ">
            <div className="reference border-[0.1rem] p-1 border-solid border-gray-900">Reference</div>
            <div className="designation border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-3">Designation</div>
            <div className="quantity border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900">Quantite</div>
            <div className="Unite border-r-[0.1rem] border-y-[0.1rem] border-l-0 border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900">Unité</div>
            <div className="unitPrice border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid col-span-2 border-gray-900">Prix unitaire HT</div>
            <div className="remise border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900">Remise %</div>
            <div className="HtAmount border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900">Montant HT</div>
            {
              withTva && <div className="tva border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900">TVA %</div>

            }
          </div> */}
          {/* <div style={{ backgroundColor: color }} className="tableHeader font-bold grid grid-cols-12">
            <div className="reference border-[0.1rem] p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-1">Reference</div>
            <div className="designation border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-5 md:col-span-3">Designation</div>
            <div className="quantity border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1">Quantite</div>
            <div className="Unite border-r-[0.1rem] border-y-[0.1rem] border-l-0 border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1">Unité</div>
            <div className="unitPrice border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid col-span-12 sm:col-span-2">Prix unitaire HT</div>
            <div className="remise border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1">Remise %</div>
            <div className="HtAmount border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1">Montant HT</div>
            {
              withTva && <div className="tva border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1">TVA %</div>
            }
          </div> */}
          <div style={{ backgroundColor: color }} className="tableHeader font-bold grid grid-cols-12">
            <div className="reference border-[0.1rem] p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">Reference</div>
            <div className="designation border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3">Designation</div>
            <div className="quantity border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">Quantite</div>
            <div className="Unite border-r-[0.1rem] border-y-[0.1rem] border-l-0 border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">Unité</div>
            <div className="unitPrice border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4">Prix unitaire HT</div>
            <div className="remise border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">Remise %</div>
            <div className="HtAmount border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">Montant HT</div>
            {
              withTva && <div className="tva border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">TVA %</div>
            }
          </div>


          {
            rows.map((row: Line) => {
              return <div key={row._id} className="tablesBody grid grid-cols-12">
                <div className=" p-1 border-y-0 border-x-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-solid border-gray-900">
                  <label htmlFor="reference" className="md:disp"></label>
                  <input type="text" name='reference' placeholder='Reference' />

                </div>
                <div className=" col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
                  <textarea name="designation" className='w[98%]' id="designation" rows={1}  ></textarea>

                </div>
                <div className=" p-1 border-r-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-y-0 border-l-0 border-solid border-gray-900">
                  <input type="text" name='reference' defaultValue={"0"} />
                </div>
                <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
                  <select className='w-[99%]' name="unit" id="selectUnit">
                    <option disabled value="">unite</option>
                    {
                      unitValue.map((unit) => {
                        return <option value={unit.value}> {unit.value} </option>
                      })
                    }
                  </select>
                </div>
                <div className=" col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
                  <input type="text" name='reference' defaultValue={"0.00"} />
                </div>
                <div className=" p-1 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
                  <input type="text" name='reference' defaultValue={"0.00"} />
                </div>
                <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
                  <input type="text" className=' border-none outline-none' name='reference' defaultValue={"0.00"} />
                </div>
                {
                  withTva && <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
                    <select className='w-[99%]' name="tva" id="tva">
                      {
                        tvaPercent.map((tva) => {
                          return <option key={tva._id} value={tva.value}> {tva.value} </option>
                        })
                      }

                    </select>
                  </div>
                }

                <div className="bg-gray-100 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
                  <div className="action flex justify-between px-1 font-bold  bg-gray-100">
                    <div className="titles">
                      <div className="title p-0 m-0">
                        <label htmlFor="addT" className=" text-blue-600">T</label>
                        <input type="checkbox" className='w-[1rem]' name="Tit" id="" />
                      </div>
                      <div className="sum p-0 m-0">
                        <label htmlFor="sumb" className=" text-orange-800">=</label>
                        <input type="checkbox" className='w-[1rem]' name="summ" id="" />
                      </div>
                    </div>
                    <div className="AddL">
                      <div onClick={(e) => handleRemoveLine(e, row._id)} className="remve cursor-pointer text-red-700 ">x</div>
                      <div onClick={handleAddLine} className="remve cursor-pointer text-green-800 ">+</div>
                    </div>
                  </div>
                </div>



              </div>
            })
          }

          {/* <table className="shadow-2xl font-[popins] border-2 table-auto w-11/12 border-collapse ">
            <thead className='text-black'>
              <tr style={{ backgroundColor: color }}>
                <th className="py-3 border-2 border-black border-solid">reference</th>
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

              {rows.map((row: Line) => {
                return (

                  <tr key={row._id}>
                    <td className='border-x-2 border-y-0 border-solid '> 
                    <input type="text" className='w-[5rem]' name='reference' placeholder='Reference' />
                    </td>
                    <td className=' border-x-2 border-y-0 border-solid'>
                      <input type="text" name='designation' placeholder='entrer ici la designation' />
                    </td>
                    <td className=' border-x-2 border-y-0 border-solid'>
                      <input type="text" className='w-[5rem]' name='Quantite' defaultValue={"0"} />
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
                      <input type="text" className='w-[5rem]' name='priceUnit' defaultValue={"0.00"} />
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
                      <div className="action flex justify-between p-1 bg-gray-400">
                        <div className="titles">
                          <div className="title">
                            <label htmlFor="addT" className=" text-blue-600 fontsize font-bold">T</label>
                            <input type="checkbox" name="Tit" id="" />
                          </div>
                          <div className="sum">
                            <label htmlFor="sumb" className=" text-orange-800 fontsize font-extrabold">=</label>
                            <input type="checkbox" name="summ" id="" />
                          </div>
                        </div>
                        <div className="AddL">
                          <div onClick={(e) => handleRemoveLine(e, row._id)} className="remve cursor-pointer text-red-700 fontsize font-extrabold">x</div>
                          <div onClick={handleAddLine} className="remve cursor-pointer text-green-700 fontsize font-extrabold">+</div>
                        </div>
                      </div>

                    </td>
                  </tr>
                )
              })}


              <tr>
                <td className='py-3 border-t-2 border-x-0 border-b-0 border-solid  border-black' rowSpan={3} colSpan={5}>
                  <div className="flex justify-between">
                    <div className="item">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime, in dolorem officia, autem vitae ipsum fuga, obcaecati suscipit architecto nisi laboriosam ex atque. Perferendis suscipit molestias aperiam vel cumque!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime, in dolorem officia, autem vitae ipsum fuga, obcaecati suscipit architecto nisi laboriosam ex atque. Perferendis suscipit molestias aperiam vel cumque!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime, in dolorem officia, autem vitae ipsum fuga, obcaecati suscipit architecto nisi laboriosam ex atque. Perferendis suscipit molestias aperiam vel cumque!</p>
                    </div>
                    <div className="items">polin</div>
                  </div>
                </td>
                <td className='py-3 border-2 border-solid  border-black'>lola</td>
                <td className="border-t-2 border-x-0 border-b-0 border-solid border-black"></td>


              </tr>
              <tr>

                <td className='py-3 border-2 border-solid  border-black'>lola</td>


              </tr>
            </tbody>
          </table> */}



        </div>

      </div>



    </div >
  );
}

export default EditCopy;