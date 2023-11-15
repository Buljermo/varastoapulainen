import styles from './Item.module.scss'
import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Item({ data, ...props }) {

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_model}>{data.model}</div>
                <div className={styles.item_type}>{data.type}</div>
                <div className={styles.item_note}>{data.note}</div>
            </div>
            <div className={styles.item_edit}>
                <Link to={"/edit/" + data.id}><MdNavigateNext /></Link>
            </div>
        </div>
    )
}

export default Item
