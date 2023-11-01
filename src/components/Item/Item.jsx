import styles from './Item.module.scss'
import { MdNavigateNext } from 'react-icons/md'

function Item({data, ...props}) {

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_model}>{data.model}</div>
                <div className={styles.item_type}>{data.type}</div>
                <div className={styles.item_note}>{data.note}</div>
            </div>
            <div className={styles.item_edit}>
                <MdNavigateNext />
            </div>
        </div>
    )
}

export default Item
