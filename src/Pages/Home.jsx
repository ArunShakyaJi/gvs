import React from 'react'
import Counter from '../components/Counter'
import Info from '../components/Info/Info'
import Main from '../components/Main'
import Slider from '../components/imageSlider/Slider'
import BackgroundCheck from '../components/BackgrounCheck'
import Whygvs from '../components/Whygvs/Whygvs'
import Location from '../components/Location'

const Home = () => {
  return (
    <>
        <div  >
        <Main />
        <Info />
        <Whygvs />
        <Counter />
        <Slider />
        <BackgroundCheck />
        <Location />
        </div>
        
    </>
  )
}

export default Home
