import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

import logo from '../../assets/NavBar/LevelUpWorks-white.png';
import maoriFlag from '../../assets/NavBar/MaoriFlag.png';
import nzFlag from '../../assets/NavBar/NZFlag.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
// ^^^ VISUAL ELEMENT IMPORTS ^^^

export default function Header() {
    return (
        <div id={styles['header']}>
            {/* LOGO DIV */}
            <div id={styles['imgSection']}>
                <img alt='LevelUp Works Logo' src={logo}></img>
            </div>
            {/* LINKS DIV */}
            <div id={styles['links']}>
                <NavLink className={styles.headerNavLink} to='/'>HOME</NavLink>
                <NavLink className={styles.headerNavLink} to='/HelpRequests'>REQUESTS</NavLink>
                <NavLink className={styles.headerNavLink} to='/projects'>PROJECTS</NavLink>
            </div>
            {/* LOGIN ETC DIV */}
            <div id={styles['userSection']}>
                <div id={styles['langs']}>
                    LANG
                    <img alt='Maori' src={maoriFlag}></img>
                    <img alt='English UK' src={nzFlag}></img>
                </div>
                <div id={styles['loginButtons']}>
                    <FontAwesomeIcon icon={faUserCircle} size='xl'/>
                    REGISTER | LOGIN
                </div>
            </div>
        </div>
    );
}