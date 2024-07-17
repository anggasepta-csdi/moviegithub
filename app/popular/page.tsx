"use client"
import getmovie from '@/services/api'
import { url } from 'inspector'
import React, { useEffect, useState } from 'react'
import { json } from 'stream/consumers';
import Image from 'next/image';

interface IResData {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Dates {
  maximum: string;
  minimum: string;
}

// declare page
const page = () => {
  const [movies, setMovie]=useState<Result[]>()

  //get data, [kondisi]
  useEffect(()=>{
    getdata()
  },[])
  
  //fungsi get api
  const getdata=async ()=>{
    const res: IResData= await getmovie({
      url:'https://api.themoviedb.org/3/movie/popular',
      page:1,
      language:'en-US'
    })
    console.log(res)
    setMovie(res?.results)
  }


  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-center p-2 text-[24px] font-bold'>Popular</h1>
      <div className='grid grid-cols-3 gap-6 px-10 py-5'>
      {
        movies?.map((item: Result) => (
          <div key={item.id} >
            <Image
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
              width={220}
              height={330}
              alt=""
              className="rounded-t-lg"
            />
            <div>
              {item.title}
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default page
