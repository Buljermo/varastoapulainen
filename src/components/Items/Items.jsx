import styles from './Items.module.scss'
import { FloatingButton } from '../../shared/buttons'
import Item from '../Item/Item'

function Items() {

    return (
        <div className={styles.items}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <FloatingButton primary>+</FloatingButton>
        </div>
    )
}

export default Items
