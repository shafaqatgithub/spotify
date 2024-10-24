import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from "./AbumItem"
import SongsItems from './SongsItems'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='mb-4 '>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='flex overflow-auto'> 

         {
          albumsData.map((item, id) => (
               <AlbumItem key={id} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))
         }
          </div>
        </div>

        <div className='mb-4 '>
          <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
          <div className='flex overflow-auto'> 

         {
          songsData.map((item, id) => (
               <SongsItems key={id} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))
         }
          </div>
        </div>
    </div>
  )
}

export default Home