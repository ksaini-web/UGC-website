import { useState } from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopHead from "./part1/TopHead";
import DropDown from './part1/DropDown';
import Slider1 from './part1/Slider1';
import Marquee from './part1/Marquee';
import Modiji from './part1/Modiji';
import Grids from './part1/Grids';
import PageNotfound from './PageNotfound'
import Photodiv from  './part1/Photodiv.jsx';
import Verticalmarquee from './part1/Verticalmarquee.jsx'
import DivgridThree from './part1/DivgridThree.jsx'
import SocialMedia from './part1/SocialMedia.jsx'
import FloatingIcons from './part1/FloatingIcons.jsx'
import DigitalInitives from './part1/DigitalInitives.jsx'
import Footer from './part1/Footer.jsx'
import Mainfooter from './part1/Mainfooter.jsx'
import Genesis from './PageGenesis/Genesis.jsx'
import Mandate from './PageGenesis/Aboutus/Mandate.jsx'
import UGCACT1956 from './PageGenesis/Aboutus/UGCACT1956.jsx'
import Logo from './PageGenesis/Aboutus/Logo.jsx'
import Bureaus from './PageGenesis/Aboutus/Bureaus.jsx'
import UgcOffices from './PageGenesis/Aboutus/UgcOffices.jsx'
import InterUniversityCentres from './PageGenesis/Aboutus/InterUniversityCentres.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={
    <>
    <TopHead/>
    <DropDown/>
    <Slider1/>
    <Marquee/>
    <Modiji/>
    <Grids/>
    <Photodiv/>
    <Verticalmarquee/>
    <DivgridThree/>
    <SocialMedia/>
    <FloatingIcons/>
    <DigitalInitives/>
    <Footer/>
    <Mainfooter/>
    </>
    }/>

    <Route path='/genesis' element={
     
      <>
       <TopHead/>
       <DropDown/>
      <Genesis/>
       
    <Footer/>
    <Mainfooter/>
      
      </>
    }
    />

    <Route path='/mandate' element={
      <>
       <TopHead/>
       <DropDown/>
      <Mandate/>
        <Footer/>
    <Mainfooter/>


      </> }/>

      <Route path='/ugcact1956' element={
        
        <>
         <TopHead/>
       <DropDown/>
        <UGCACT1956/>
        <Footer/>
    <Mainfooter/>
        </>

      }/>

      <Route path ='/logo' element={
        <>
      <TopHead/>
      <DropDown/>
      <Logo/>
        <Footer/>
    <Mainfooter/>

      </>

        }/>


        <Route path='/bureaus' element={
          <>
           <TopHead/>
      <DropDown/>
          <Bureaus/>
              <Footer/>
    <Mainfooter/>
      
       
          </>
        }/>

        <Route path='/ugcoffices' element={

          <>
                 <TopHead/>
      <DropDown/>
          <UgcOffices/>
              <Footer/>
    <Mainfooter/>
          </>
        } />

        <Route path='/inter-university-centres' element ={
          <>
                    <TopHead/>
      <DropDown/>
          <InterUniversityCentres/>
              <Footer/>
    <Mainfooter/>
          </>
        }/>
  
      

    <Route path='*' element={<PageNotfound/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
