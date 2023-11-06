import styles from './AddItem.module.scss'
import ItemForm from '../ItemForm/ItemForm'

function AppItem(props) {

    return (
        <div className={styles.additem}>
            <h2>Uuden tuotteen lisääminen</h2>
            <ItemForm />
        </div>
    )

}

export default AppItem
