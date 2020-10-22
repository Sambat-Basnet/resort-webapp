import React from 'react'

import styles from './hero.module.css'

// importing components
import Nav from './Nav'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <video muted autoplay loop>
                <source type="video/mp4" src="/assets/secVid.mp4"/>
            </video>
            <Nav/>
            <div className={styles.vidContent}>
                    <h1>Resort & Spa Hotel</h1>
                    <p>The Hotel Luviana is the right choice for visitors who are searching for a combination of charm, peace, quiet and a convenient position frm where to explore surroundings.</p>
                    <button>more info</button>
                    <h1 className={styles.neutralR}>R</h1>
                </div>
        </div>
    )
}

export default Hero
