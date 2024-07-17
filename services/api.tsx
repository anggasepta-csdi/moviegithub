import axios from 'axios'
import React from 'react'

interface IReq{
    url: string
    language: string
    page: number

}

const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzlkODk3NjEyOTQ2NDYzZTYyNGQ4M2ExYTFiZDk0YSIsIm5iZiI6MTcyMTE4ODk2MC43MDU1OSwic3ViIjoiNjY5NzQxNTAxMDA3YmI0ZTRhOGEwM2M0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BSYbnHdw2bjxDIvcNWDPVVXeiSD677NrbAzOQcUNjvE'

async function getmovie({url, language, page} : IReq) {
  const res= await axios.get(
    url,
    {
        headers:{
            Authorization : `Bearer ${token}`
        },
        params:{
            language, page
        }
    }
  )
  return res?.data
}

export default getmovie
