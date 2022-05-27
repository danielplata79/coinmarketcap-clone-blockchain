import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search.js'
import { ConnectButton } from 'web3uikit'

const styles = {
    header: `bg-[#24242a] text-white h-20 gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    nav: `flex justify-center items-center gap-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 mL-3`,
}

const Header = () => {
    return (
        <div className={styles.header}>
            
            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Criptocurrency</div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Exchanges</div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>NFT</div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Cryptown</div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Portafolio</div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Watchlist</div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Products</div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Learn</div>
                    </div>

                    <div className='flex items-center'>
                        <ConnectButton/> 
                        <div className={styles.inputContainer}>
                            <Search/>
                            <input className={styles.input} placeholder="Search coin"></input>
                        </div>                       
                    </div>

                </nav>
                 
            </div>
        </div>
    )
}

export default Header