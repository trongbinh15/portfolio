import React, { useState } from 'react';
import styled from './nav-bar-styles.module.scss';

const NavBar = () => {
    const [burgerClass, setBurgerClass] = useState(styled['burger']);

    const toggleNavbar = (e) => {

        if (burgerClass === styled['burger']) {
            setBurgerClass(`${styled['burger']} ${styled['toggle']}`)
        } else {
            setBurgerClass(styled['burger']);
        }

        const nav = document.querySelector(`.${styled['nav-link']}`)

        nav.classList.toggle(`${styled['nav-active']}`);
    }

    return (
        <>
            <div className={styled['nav']}>
                <div className={styled['logo']}>
                    <h4>Logo</h4>
                </div>
                <ul className={styled['nav-link']}>
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>About</p>
                    </li>
                    <li>
                        <p>Work</p>
                    </li>
                    <li>
                        <p>Project</p>
                    </li>
                </ul>
                <div className={burgerClass} onClick={e => toggleNavbar(e)}  >
                    <div className={styled['line1']}></div>
                    <div className={styled['line2']}></div>
                    <div className={styled['line3']}></div>
                </div>
            </div>
        </>
    );
}

export default NavBar;