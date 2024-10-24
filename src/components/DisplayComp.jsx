import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'


const DisplayComp = () => {
  const displayRef = useRef();
  const location = useLocation()
  const isAlbum = location.pathname.includes("album");
  // console.log(isAlbum)
  const albumId = isAlbum ? location.pathname.slice(-1) : "" ;
  // console.log(albumId)
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else {
      displayRef.current.style.background = ` #121212`
    }
  })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%]  lg:ml-0'>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/album/:id' element={<DisplayAlbum/>} />
    </Routes>
    </div>
  )
}

export default DisplayComp