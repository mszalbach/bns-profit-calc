import * as axios from "axios";


export const BASEURL = '';
export const axiosClient = axios.create( {
                                             responseType: 'json'
                                         } );