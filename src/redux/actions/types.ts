import { ADD_TO_STORAGE, REMOVE_FROM_STORAGE, UPDATE_CLIENT_INFO, UPDATE_COMPANY_INFO } from "./actionTypes"

export interface StorageAction{
    type : typeof ADD_TO_STORAGE | typeof REMOVE_FROM_STORAGE | null
    key:string | null
    unique? : boolean,
    payload : any| null
}

export interface UpdateCompanyInfoAction {
    type: typeof UPDATE_COMPANY_INFO | null;
    payload: {
      field: string | null ;
      value: any ;
    };
  }
export interface UpdateClientInfoAction {
    type: typeof UPDATE_CLIENT_INFO | null;
    payload: {
      field: string | null ;
      value: any ;
    };
  }