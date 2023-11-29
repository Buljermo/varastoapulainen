import styles from './Header.module.scss'
import logo from './logo.jpg'
function Header() {

    return (
        <div className={styles.header}>
            <a href="https://kodinkoneet.net/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo" className={styles.smallLogo} /></a>
            <div className={styles.text}>
                Varastoapulainen
            </div>
        </div>
    )

}

export default Header
