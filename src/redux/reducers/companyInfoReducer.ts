import { addItem } from "../../api/apiDocument";
import { CompanyInfo } from "../../model/companyInfo";
import { UPDATE_COMPANY_INFO } from "../actions/actionTypes";
import { UpdateCompanyInfoAction } from "../actions/types";

const initialState : CompanyInfo = {
  logo_link : null ,
  companyName: '',
  address: '',
  ZIP: '',
  city: '',
  country: '',
  fax: '',
  email: '',
  siret: '',
  rcsVille: '',
  codeNaf: '',
  tva: '',
};

export const companyInfoReducer = (state = initialState, action: UpdateCompanyInfoAction = { type: null, payload: { field: null, value: null } }) => {
  switch (action.type) {
    case UPDATE_COMPANY_INFO:
      console.log(action.payload.value);
      addItem("companyInfo", {...state,  [action.payload.field!]: action.payload.value,}, false)
      return {
        ...state,
        [action.payload.field!]: action.payload.value,
      };
    default:
      return state;
  }
  
  
};