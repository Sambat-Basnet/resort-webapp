import React from 'react'

import styles from './welcome.module.css'
import {FaSwimmingPool, FaSwimmer, FaWater, FaUmbrellaBeach} from 'react-icons/fa'
import {BiSpa} from 'react-icons/bi'
import {CgGym} from 'react-icons/cg'
import {IoIosBoat} from 'react-icons/io'
import {BsFillMicFill} from 'react-icons/bs'


const Welcome = () => {
    return (
        <div className={styles.welcomeHomeSec}>
        <div className={styles.comfortSec}>
            <div className={styles.picSec}>
                
                <img className={styles.welcome1} src="/assets/welcome2.jpg" alt=""/>
                <img className={styles.welcome2} src="/assets/welcome1.jpg" alt=""/>
                <img className={styles.logoImg} src="/assets/logo.png" alt=""/>
            </div>
            <div className={styles.comfortContent}>
                <span></span>
                <h3>raising comfort to the highest level</h3>
                <h1>Welcome to Luviana Hotel Resort</h1>
                <div className={styles.comfortContent_text}>
                <p>The Hotel Luviana is the right choice for visitors who are searching for a combination of charm and a convenient position from where to explore surroundings.</p>
                <p>The rooms are arranged on the first, second and third floors. On the top floor, there is also a charming terrace or solarium available for the use of guests, from where you can enjoy the view.</p>
                <button>read more</button>
                </div>
            </div>
        </div>
        <div className={styles.amenitiesSec}>
            <div className={styles.amenityItems}>
            <div className={styles.emptySec}></div>
            <div className={styles.amenitySec}>
                <div className={styles.amenityContent}>
                <h1>Our Amenities</h1>
                <p>The hotel is arranged on three floors without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea.</p>
                <div className={styles.serviceRow}>
                <div className={styles.firstIconRow}>
                    <div className={styles.firstIconItem}>
                        <FaSwimmingPool className={styles.amenityIcons} />
                        <h3>Swimming Pool</h3>
                    </div>
                    <div className={styles.firstIconItem}>
                        <BiSpa className={styles.amenityIcons}/>
                        <h3>Spa & massage</h3>
                    </div>
                    <div className={styles.firstIconItem}>
                        <FaSwimmer className={styles.amenityIcons}/>
                        <h3>Surfing lessons</h3>
                    </div>
                    <div className={styles.firstIconItem}>
                        <FaWater className={styles.amenityIcons}/>
                        <h3>Diving & smorkling</h3>
                    </div>
                </div>
                <div className={styles.secondIconRow}>
                    <div className={styles.firstIconItem}>
                        <CgGym className={styles.amenityIcons}/>
                        <h3>Gym & yoga</h3>
                    </div>
                    <div className={styles.firstIconItem}>
                        <IoIosBoat className={styles.amenityIcons}/>
                        <h3>Boat tours</h3>
                    </div>
                    <div className={styles.firstIconItem}>
                        <BsFillMicFill className={styles.amenityIcons}/>
                        <h3>Conference room</h3>
                    </div>
                    <div className={styles.firstIconItem}>
                        <FaUmbrellaBeach className={styles.amenityIcons}/>
                        <h3>Private Beach</h3>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Welcome
