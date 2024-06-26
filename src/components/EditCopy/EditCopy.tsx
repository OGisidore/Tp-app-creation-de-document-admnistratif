/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:51
*/
import React, { FC, useEffect, useState } from 'react'
import './EditCopy.css'
import { generateID } from '../../helpers/utiles'
import { Line } from '../../model/Line'
import TableBodyLine from '../TableBodyLine/TableBodyLine'

import CompanyInfo from '../CompanyInfos/CompanyInfo'
import ClientInfo from '../ClientInfo/ClientInfo'
import SubTotalBox from '../SubTotalBox/SubTotalBox'
import { useParams } from 'react-router-dom'
import ArticlesubtitleLine from '../Article_subtitleLine/Article_subtitleLine'
import ArticleTotalAmountLine from '../Article_TotalAmountLine/Article_TotalAmountLine'
import { getDesign } from '../../redux/selectors/selectors'
import { useSelector } from 'react-redux'


interface EditCopyProps { }

const EditCopy: FC<EditCopyProps> = () => {
  const [duplicata, setDuplicata] = useState<boolean>(false)
  const [proforma, setProforma] = useState<boolean>(false)
  const [color, setColor] = useState<any>()
  const [withTVA, setWithTVA] = useState<boolean>(true)
  const [rows, setRows] = useState<Line[]>([
    {
      _id: generateID(),
      setSub_title: false,
      setTotal_amount: false,
      name: '',
    },
  ])

  const { slug } = useParams()




  const handleAddLine = () => {
    setRows([
      ...rows,
      {
        _id: generateID(),
        setSub_title: false,
        setTotal_amount: false,
        name: '',
      },
    ])
  }

  /******************************************** */

  const handleRemoveLine = (e: any, id: string) => {
    setRows(rows.filter((row) => row._id !== id))
  }
  /******************************************** */

  const handleChange = async (e: any) => {
    const option: string = e.target.value
    if (option.trim() === 'Entreprise avec TVA') {
      setWithTVA(true)
    } else {
      setWithTVA(false)
    }


  }

  const design = useSelector(getDesign)
  console.log(design);


  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  }, [])

  /******************************************** */

  const handleSetDuplicata = () => {
    setDuplicata(!duplicata)
  }

  /******************************************** */
  const handleSetProforma = () => {
    setProforma(!proforma)
  }

  /******************************************** */

  const handleSetSubTitle = (id: string) => {

    const updateRow = rows.map((row) => {
      if (row._id === id) {
        return { ...row, setSub_title: !row.setSub_title }

      }
      return row
    })

    setRows(updateRow)
  }
  /******************************************** */

  const handleSetTotalAmount = (id: string) => {
    const updateRow = rows.map((row) => {
      if (row._id === id) {
        return { ...row, setTotal_amount: !row.setTotal_amount }
      }
      return row
    })
    setRows(updateRow)
  }


  return (
    <div className={'EditCopy w-[98%l m-2 px-2 mt-2' + design?.style}>
      <div className="header flex flex-col items-center">
        <div className="headerContent p-2 rounded-b-lg   bg-gray-200">
          <div className="modelSelect flex ">
            <label htmlFor="modele">Modele de {slug} : </label>
            <select
              name="modele"
              defaultValue={''}
              onChange={(e) => handleChange(e)}
              id="model"
            >
              <option value="Entreprise avec TVA ">
                {' '}
                Entreprise avec TVA{' '}
              </option>
              <option value="Entreprise sans TVA ">
                {' '}
                Entreprise sans TVA{' '}
              </option>
              <option value="Auto-entrepreneur "> Auto-entrepreneur </option>
            </select>
          </div>
          {
            slug === "fature" && <div className="mentionSelect flex ">
              <label htmlFor="mention">Mentions à afficher  : </label>
              <div className="options flex ">
                <div className="proforma flex">
                  <input type="checkbox" name="proforma" onChange={handleSetProforma} id="proforma" />
                  <label htmlFor="proforma">proforma</label>
                </div>
                <div className="duplicata flex">
                  <input
                    type="checkbox"
                    onChange={handleSetDuplicata}
                    name="duplicata"
                    id="duplicata"
                  />
                  <label htmlFor="duplicata">duplicata</label>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
      <div
        className={`socityAndClientInformation  w-full flex flex-wrap relative justify-between`}
      >
        {duplicata && <div className="absolute text-stroke"> duplicata </div>}
        <CompanyInfo />
        <ClientInfo proforma={proforma} />
      </div>
      <div className="facBody">
        <div className="exucutiveDate">
          <label htmlFor="dateD_execution">
            {' '}
            Date d'exécution de la vente ou de la prestation :{' '}
          </label>
          <input type="date" name="dateD_execution" id="ex_date" />
        </div>
        <div className="headColor flex justify-between">
          <div className="ColorBox">
            <label htmlFor="color">Couleur de l'entête du tableau :</label>
            <input
              onChange={(e) => setColor(e.target.value)}
              type="color"
              name="color"
              id="color"
            />
          </div>
          <div className="warning">
            Veuillez utiliser le point au lieu de la virgule pour les nombres.
          </div>
        </div>
        <div className="tables ">
          <div
            style={{ backgroundColor: color }}
            className="tableHeader font-bold grid grid-cols-12"
          >
            <div className="reference border-[0.1rem] p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">
              Reference
            </div>
            <div className="designation border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3">
              Designation
            </div>
            <div className="quantity border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">
              Quantite
            </div>
            <div className="Unite border-r-[0.1rem] border-y-[0.1rem] border-l-0 border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
              Unité
            </div>
            <div className="unitPrice border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4">
              Prix unitaire HT
            </div>
            <div className="remise border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
              Remise %
            </div>
            <div className="HtAmount border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
              Montant HT
            </div>
            {withTVA ?
              <div className="tva border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
                TVA %
              </div>
              :
              <div className=" bg-white"></div>
            }
            <div className=" bg-white"></div>
          </div>

          {rows.map((row: Line) => {
            return (
              <div key={row._id}>
                {
                  row.setSub_title && <ArticlesubtitleLine withTVA={withTVA} />
                }

                <div className="tablesBody mt-2 lg:mt-0 border-solid border-gray-950 border-1 lg:border-0 grid grid-cols-12"
                >
                  <TableBodyLine row={row} withTVA={withTVA} />
                  <div className="bg-gray-100 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
                    <div className="action flex justify-between px-1 font-bold  bg-gray-100">
                      <div className="titles">
                        <div className="title p-0 m-0">
                          <label htmlFor="addT" className=" text-blue-600">
                            T
                          </label>
                          <input
                            type="checkbox"
                            className="w-[1rem]"
                            name="Tit"
                            onChange={() => handleSetSubTitle(row._id)}
                            id=""
                          />
                        </div>
                        <div className="sum p-0 m-0">
                          <label htmlFor="sumb" className=" text-orange-800">
                            =
                          </label>
                          <input
                            type="checkbox"
                            className="w-[1rem]"
                            name="summ"

                            onChange={() => handleSetTotalAmount(row._id)}
                            id=""
                          />
                        </div>
                      </div>
                      <div className="AddL">
                        <div
                          onClick={(e) => handleRemoveLine(e, row._id)}
                          className="remve cursor-pointer text-red-700 "
                        >
                          x
                        </div>
                        <div
                          onClick={handleAddLine}
                          className="remve cursor-pointer text-green-800 "
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {
                  row.setTotal_amount && <ArticleTotalAmountLine withTVA={withTVA} />
                }
              </div>

            )
          })}
        </div >
        <SubTotalBox withTva={withTVA} handleAddLine={handleAddLine} />

        <div className="infosupp">
          <div className="subT">infos supplementaire</div>
          <textarea name="info" id="info" cols={100} rows={2}></textarea>
        </div>
      </div>
    </div>
  )
}

export default EditCopy
