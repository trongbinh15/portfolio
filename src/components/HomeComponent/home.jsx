import React, { lazy, Suspense } from 'react';
import styled from './home-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = lazy(() => import('../nav-bar/nav-bar'));

function HomeComponent() {
    return (
        <>
            <div className={styled['container']}>
                <NavBar></NavBar>
                <div className={styled['inner-width']}>
                    <div className={styled['content']}>
                        <h1> </h1>
                        <div className={styled['sm']}>
                            <a href="https://www.facebook.com/trongbinhnguyen15/">
                                <FontAwesomeIcon icon={['fab', 'facebook']} ></FontAwesomeIcon>
                            </a>
                            <a href="https://www.linkedin.com/in/trongbinhnguyen15">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} ></FontAwesomeIcon>
                            </a>
                            <a href="https://www.github.com/trongbinh15/">
                                <FontAwesomeIcon icon={['fab', 'github']} ></FontAwesomeIcon>
                            </a>
                            <a href="https://www.instagram.com/trongbinh15/">
                                <FontAwesomeIcon icon={['fab', 'instagram']} ></FontAwesomeIcon>
                            </a>
                        </div>
                        <div className={styled['buttons']}>
                            <button>Contact Me</button>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
