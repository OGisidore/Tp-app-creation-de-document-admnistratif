import { GlobalState } from "./types/GlobalState";

export const getTvaOption = (state : GlobalState)=> state.storage?.withTVA
export const getDetailsContent = (state : GlobalState)=> state.storage?.DetailsContent
export const getSocityInfo = (state : GlobalState)=> state.storage?.socityInfo
export const getClientInfo = (state : GlobalState)=> state.storage?.ClientInfo
export const getDesign = (state : GlobalState)=> state.storage?.Design
