import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from '../../assets/NavBar/LevelUpWorks-white.png';
import maoriFlag from '../../assets/NavBar/MaoriFlag.png';
import nzFlag from '../../assets/NavBar/NZFlag.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
// ^^^ VISUAL ELEMENT IMPORTS ^^^

import Login from '../Login/Login';

export default function Header(props) {
    // State for login modal
    const [modalOpenState, setModalOpenState] = useState(false);
    function closeModal() {
        setModalOpenState(false);
    }
    function openModal() {
        setModalOpenState(true);
        console.log(modalOpenState);
    }

    useEffect(()=>{
        if(props.currentUser.id>-1) {

        }
    }, [])

    return (
        <div id={styles['header']}>
            <Login currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser} modalOpenState={modalOpenState} openModal={openModal} closeModal={closeModal}></Login>
            {/* LOGO DIV */}
            <div id={styles['imgSection']}>
                <img alt='LevelUp Works Logo' src={logo}></img>
            </div>
            {/* LINKS DIV */}
            <div id={styles['links']}>
                <NavLink className={styles.headerNavLink} to='/'>HOME</NavLink>
                <NavLink className={styles.headerNavLink} to='/HelpRequests'>REQUESTS</NavLink>

               

                <NavLink className={styles.headerNavLink} to='/StudentProjects'>PROJECTS</NavLink>
                <NavLink className={styles.headerNavLink} to='/studentprofiles'>PROFILES</NavLink>


            </div>
            {/* LOGIN ETC DIV */}
            <div id={styles['userSection']}>
                <div id={styles['langs']}>
                    LANG
                    <img alt='Maori' src={maoriFlag}></img>
                    <img alt='English UK' src={nzFlag}></img>
                </div>
                {/* On reviewing design spec. special attention will be needed in this area to handle logging in etc.
                    For example a ternary could potentially be used i.e !signedIn? && <loginDiv>  */}
                {props.currentUser.id<0 && <div id={styles['loginButtons']} onClick={openModal}>
                    <FontAwesomeIcon icon={faUserCircle} size='xl'/>
                    REGISTER | LOGIN
                </div>}

                {props.currentUser.id>0 && <div></div>}
            </div>
        </div>
    );
}