// !   @   #     $   %   ^  &  *  () +  _ {} "" : <> |  

import React from 'react'
import avatar from '../../Assets/images/avataaars.svg'
import "./Home.css"
export default function Home() {
  return (
    <>
    <div className="container-fluid my-home">
        <div className="home-part"> 
        <div className="home-avatar">
            <img src={avatar}   alt=""/>
        </div>
        <div className="home-desc py-5" style={{color : 'white'}} >
            <h2 className='fs-1'>START FRAMEWORK </h2>
            <div className="div p-2 position-relatives">

        <div className="line1 ms-3"></div>

        <i  className="fa-solid fa-star"></i>

        <div className="line2 ms-3"></div>

         <p>Graphic Artist - Web Designer - Illustrator</p>
         </div>
        </div>
        </div>
    </div>

    </>
  )
}

