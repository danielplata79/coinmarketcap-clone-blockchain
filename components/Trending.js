import React,{ useState } from 'react'
//import Rate from "./cmc-table/rate"
import fire from '../assets/fire.png'
import usdt from '../assets/usdt.png'
import btc from '../assets/fire.png'
import gainers from '../assets/fire.png'
import recent from '../assets/fire.png'
import TrendingCard from '../assets/fire.png'
import ReactSwitch from '../assets/fire.png'


const styles = {
    trendingWrapper: `mx-auto max-w-screen-2x1`,
    h1: `text-3x1 text-black`,
    h2: `text-3x1 text-black`,
    flexCenter: `flex items-center`
}

const Trending  = (props) => {
      const [checked, setChecked] = useState(false)

      const trendingData = [
          {
              number: 1,
              symbol: "BTC",
              name: "Bitcoin",
              icon: btc,
              isIncrement: true,
              rate: "2.34%"
          },{
              number: 1,
              symbol: "BTC",
              name: "Bitcoin",
              icon: btc,
              isIncrement: false,
              rate: "9,32%"
          },{
              number: 1,
              symbol: "BTC",
              name: "Bitcoin",
              icon: btc,
              isIncrement: false,
              rate: "9,32%"
          },
       ]
    
    return (
        
    <div className="text-">
        <div className={styles.trendingWrapper}>
            <div  className='flex justify-between'>
                <h1 className={styles.h1}>Todays Cryptocurrency Prices by market Cap</h1>

            <h2>Vamos : {miObjeto.nombre}</h2>  

            </div>
        </div>
    </div>
    )    
}

const miObjeto = {
    "nombre": "nombre del objeto",
    "lista": {
        primero: "hola, ",
        segundo: "este es una prueba"
    }
}


const element = <Trending papa="papa!!!!!!!!!!" />

export default Trending