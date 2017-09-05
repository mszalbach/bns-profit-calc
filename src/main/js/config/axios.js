import * as axios from "axios";

export const axiosClient = axios.create( {
                                             responseType: 'json'
                                         } );