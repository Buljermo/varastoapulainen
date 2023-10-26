import styles from './Item.module.scss'

function Item() {

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_model}>Samsung RS27T5200SR</div>
                <div className={styles.item_type}>Jääkaappi</div>
                <div className={styles.item_note}>Tilava, mutta joskus kompressorin ääni voi olla voimakas.</div>
            </div>
        </div>
    )
}

export default Item
