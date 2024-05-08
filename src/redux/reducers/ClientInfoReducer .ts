import { UPDATE_CLIENT_INFO } from "../actions/actionTypes";
import { UpdateClientInfoAction } from "../actions/types";

const initialState  = {
  numeroFacture : null ,
  date_ofEmission: '',
  client_code: '',
  Client_Fullname: '',
  Client_Address: '',
  client_ZIP: '',
  client_city: '',
  Country: '',
  phone: '',
  client_tva: '',
  Title: '',
 
};

export const clientInfoReducer = (state = initialState, action: UpdateClientInfoAction = { type: null, payload: { field: null, value: null } }) => {
  switch (action.type) {
    case UPDATE_CLIENT_INFO:
      return {
        ...state,
        [action.payload.field!]: action.payload.value,
      };
    default:
      return state;
  }
  
  
};