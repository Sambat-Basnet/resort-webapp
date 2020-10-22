import React from 'react'
import styles from './nav.module.css'
import {GrInstagram} from 'react-icons/gr'
import {FaTripadvisor} from 'react-icons/fa'


const Nav = () => {
    return (
        <nav>
            <div className={styles.mainNav}>
                <div className={styles.logoSec}>
                    <img src="/assets/whitelogo.svg" alt="logo"/>
                    <a href="#">Luvíana</a>
                </div>
                <div className={styles.rightItems}>
                <div className={styles.itemSec}>
                    <ul>
                        <li><a href="#">Rooms & Suites</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>
                </div>
                <div className={styles.iconSec}>
                    <GrInstagram/>
                    <FaTripadvisor/>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
