import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./Main.css"


import BackgroundDay from '../../Assets/images/daytime.png';
import BackgroundNight from '../../Assets/images/Bitmap.png'

import Sun from '../../Assets/images/bg-image-daytime.svg'
import Moon from '../../Assets/images/Path.svg'

import button from "../../Assets/images/Group 3.svg"


function Main() {
    const [IP,setIP] = useState(null)
    const [data,setData] = useState("20:22")
    const API_KEY = "c7f7801b2c4e43309bb5b64015c69d08"
    const [BackGround,setBackGround] = useState(BackgroundNight)

    const [sunormoon,setSunormoon] = useState(Sun)

    const [daytime,setDaytime] = useState("GOOD MORNING")

    const [locationity,setLocationcity] = useState("Tbilisi")
    const[InfoTimezone,setInfoTimezone] = useState("Asia")

    const[week,setWeek] = useState(3)
    const[year,setYear] = useState(4)
const[month,setMonth] = useState(5)





    ////////////////////////Time


//     useEffect(() => {

//        const fetchUsingPromiseWithFetchApi = () => {
//          fetch('http://ip-api.com/json/?fields=61439') 
//            .then((response) => response.json()) 
//            .then((data) => {
             
//              setIP(data.query)
//              console.log(data.query); 
//            });
//        };
   
//        // Trigger fetching method on component mount
//        fetchUsingPromiseWithFetchApi();
   
//      },[]); // Run the effect only once on component mou

//     useEffect(() => {
      
//       if(IP){
//         try{
//             axios
//             .get(`https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&ip=${IP}`)
//             .then(function (response) {
//                 setData(response.data.time_24)
//                 setLocationcity(response.data.geo.city)
//                 setInfoTimezone(response.data.timezone)
//                 setWeek(response.data.week)
//                 setYear(response.data.year)
//                 setMonth(response.data.month)

//                 const withoutLastFourChars = response.data.time_24.slice(0, -3);
//                 setData(withoutLastFourChars)

//             })

//           ///////////////////BackGround
// if("08:00:00"<data>"20:00:00"){
//   setBackGround(BackgroundDay)
// setMoreinfocolor("#ffffff")
// setMoreinfobg("#303030")
//   setSunormoon(Sun)
//   setDaytime("GOOD MORNING")
 
// }else{
//   setBackGround(BackgroundNight)
//   setSunormoon(Moon)
// setMoreinfobg("#ffffff")
// setMoreinfocolor("#303030")
//   setDaytime("GOOD EVENING")
  
// }

// }catch{  }
//       }
//         });


/////////////////////////////////////Time


const [btn,setBtn] = useState("M O R E")
const [moreInfocolor,setMoreinfocolor] = useState("#ffffff")
const [moneinfobg,setMoreinfobg] = useState('#303030')

const styleLessDown = {
  transform: 'rotate(180deg)', 
  transition: 'transform 350ms ease', // smooth transition
 }
 const styleMoreup = {
  transform: 'rotate(0deg)' ,
  transition: 'transform 350ms ease', // smooth transition
 }


 

 const styleDisplay = {
  animationName:`Slideup`,
  transform: 'rotate(180deg)',
  transition: 'transform 350ms ease', // smooth transition
 }



const [btnroto,setBtnRoto] = useState()
const [qoutesDisplay,setQoutesDisplay] = useState()

const [isActive, setIsActive] = useState(true);

const ClickMoreInfo = () =>{


  if (btn==="M O R E"){
    setBtn("L E S S")
    setBtnRoto(styleLessDown)
    

    setIsActive(false)

  }else{
    setBtn("M O R E")
    setBtnRoto(styleMoreup)
   

    setIsActive(true)
  }


}

   
  return (
    
   <section style={{backgroundImage: `url(${BackGround})`}}  className='Main'>
    <div className="main-wrapper">
      <div className={isActive ? 'qoutes' : 'qoutes active'}>
        <p className='qoutes-text'>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
        <p className='author'>Ada Lovelace</p>
      </div>
       <div className='main-info'>
        <div className="main-clock">
          <h5 className='clock-header'><img src={sunormoon} alt="sun/moon"/>{daytime}<p className='curent'>, IT’S CURRENTLY</p></h5>
          <h1 className='Clock'>{data}<p className='Clock-text'>BST</p></h1>
          <h3 className='location'>IN  {locationity},  GEO </h3>
        </div>
        <div className='button-wrap'>
          <button  onClick={ClickMoreInfo} className='show-btn' >{btn}<img style={btnroto} src={button} alt="sun/moon"/></button>
        </div>
      </div>
    </div>
    <div style={{backgroundColor: `${moreInfocolor}`}}  className={isActive ? 'more-info' : 'more-info active-info'}>
       <div   className='more-info-wraper'>
        <div className="info-one">
          <div  className='timezone'>
            <p style={{color: `${moneinfobg}`}} className='timezone-text'>CURRENT TIMEZONE</p>
            <h3 style={{color: `${moneinfobg}`}} className='timezone-title'>{InfoTimezone}</h3>
          </div>
          <div  className='DOTY'>
            <p style={{color: `${moneinfobg}`}} className='timezone-text'>Year</p>
            <h3  style={{color: `${moneinfobg}`}} className='timezone-title'>{year}</h3>
          </div>
        </div>
        <div className='info-two'>
        <div className='DOTY1'>
            <p style={{color: `${moneinfobg}`}} className='timezone-text'>Month</p>
            <h3 style={{color: `${moneinfobg}`}} className='timezone-title'>{month}</h3>
          </div>
          <div className='DOTY'>
            <p style={{color: `${moneinfobg}`}} className='timezone-text'>Week number</p>
            <h3 style={{color: `${moneinfobg}`}} className='timezone-title'>{week}</h3>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Main
