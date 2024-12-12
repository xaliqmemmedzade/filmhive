import { saveApi } from "../api"

export const saveList = async()=>{
    const res = await saveApi.post(`/api/movies/list/`)
    if( !res.data ){
        throw new Error("List Not Save")
    }
    return res.data
}

import { saveApi } from "../api"

export const getSingleList = async(id)=>{
    const res = await saveApi.get(`/api/movies/list/${id}`)
    if( !res.data ){
        throw new Error("List Not Found")
    }
    return res.data
}