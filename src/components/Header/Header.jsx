import styles from './Header.module.scss'
import logo from './logo.jpg'
function Header() {

    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" className={styles.smallLogo} />
            <div className={styles.text}>
                Varastoapulainen
            </div>
        </div>
    )

}

export default Header
