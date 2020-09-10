import React from 'react';
import styled from './home-styles.module.scss';
import background from '../../asset/images/home_bg.jpg';
import moon from '../../asset/images/home_moon.png';
import mountain from '../../asset/images/home_mountain.png';
import road from '../../asset/images/home_road.png';
import { useState } from 'react';


function HomeComponent() {

    const [scrollValue, setValue] = useState('');

    return (
        <>
            <div className={styled['container']}>
                <div className={styled['content']}>
                    <img src={background} alt='' className={styled['bg']} style={{ top: bgMovingValue * 0.5 + 'px' }} />
                    <img src={moon} alt='' className={styled['moon']} />
                    <img src={mountain} alt='' className={styled['mountain']} />
                    <img src={road} alt='' className={styled['road']} />
                    <p>Hello World</p>
                    <div className={styled['buttons']}>
                        <button>Contact Me</button>
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
