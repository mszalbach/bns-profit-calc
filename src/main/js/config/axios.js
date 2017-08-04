import * as axios from "axios";


export const BASEURL = 'https://api.silveress.ie/bns/v3';
export const axiosClient = axios.create( {
                                             baseURL: BASEURL,
                                             responseType: 'json'
                                         } );