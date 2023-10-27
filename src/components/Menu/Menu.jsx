import styles from './Menu.module.scss'
import { MdHomeFilled } from 'react-icons/md'
import { MdDataThresholding } from 'react-icons/md'
import { MdPermIdentity } from 'react-icons/md'

function Menu() {

    return (
        <div className={styles.menu}>
            <div><MdHomeFilled /></div>
            <div><MdDataThresholding /></div>
            <div><MdPermIdentity /></div>
        </div>
    )

}

export default Menu
