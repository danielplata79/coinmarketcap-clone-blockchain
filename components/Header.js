import React from 'react'
import Image from 'next/image'

const styles = {
    header: `bg-[#24242a] text-white h-20 gap-[100px] w-full p-[30px]`,
}

const Header = () => {
    return (
        <div className={styles.header}>
            {/* <Image 
                src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
                alt='logo'
                width={220}
                height={220}
            /> */}

            <h1>Coinsales.com</h1>
        </div>
    )
}

export default Header