import styles from './Menu.module.scss'
import { MdHomeFilled } from 'react-icons/md'
import { MdDataThresholding } from 'react-icons/md'
import { MdPermIdentity } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function Menu() {

    return (
        <div className={styles.menu}>
            <div><NavLink to=""><MdHomeFilled /></NavLink></div>
            <div><NavLink to="/stats"><MdDataThresholding /></NavLink></div>
            <div><NavLink to="/settings"><MdPermIdentity /></NavLink></div>
        </div>
    )

}

export default Menu
