import React,{ useState } from 'react'
import Rate from "./cmc-table/rate"
import fire from '../assets/fire.png'
import usdt from '../assets/usdt.png'
import btc from '../assets/btc.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import TrendingCard from './trendingCard'

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2x1`,
    
    flexCenter: `flex items-center`
}

const Trending  = () => {
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
              number: 2,
              symbol: "USDT",
              name: "USDT",
              icon: usdt,
              isIncrement: false,
              rate: "9,32%"
          },{
              number: 1,
              symbol: "BTC",
              name: "Bitcoin",
              icon: btc,
              isIncrement: true,
              rate: "9,32%"
          },
       ]
    
    return (
        
    <div className="text-white px-10">
        <div className={styles.trendingWrapper}>
            <div  className='flex justify-between'>
                <h3 className='text-lg'>Todays Cryptocurrency Prices by market Cap</h3>

                <div className='flex'>
                   <p className='text-gray-400'>Highlights &nbsp;</p> 
                   <ReactSwitch checked={checked} onChange={() => { setChecked(!checked) }} />
                </div> 
            </div>
            <br/>

            <div className='flex'>
                <p>The global crypto market cap is $1.74T, a &nbsp;</p>
                <span><Rate isIncrement={true} rate="0.53%" /> </span>
                <p> &nbsp; decrease over the last day. <span className='underline'>Read more</span> </p>
            </div>
            <br/>

            <div className={styles.flexCenter}>
                <TrendingCard title='Trending' icon={fire} trendingData={trendingData}/> 
                <TrendingCard title='Biggest Gainers' icon={gainers} trendningData={trendingData} />
                <TrendingCard title='Recently Added' icon={recent} trendningData={trendingData} />
            </div>
        </div>
    </div>
    )    
}

export default Trending