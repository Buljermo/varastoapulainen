import styles from './ItemForm.module.scss'

function ItemForm(props) {

    return (
        <form>
            <div className={styles.itemform}>
                <div className={styles.itemform_row}>
                    <div>
                        <label htmlFor='type'>Tuotetyyppi</label>
                        <select name="type">
                            <option>Jääkaappi</option>
                            <option>Pakastin</option>
                            <option>Uuni</option>
                            <option>Pesukone</option>
                            <option>Mikroaaltouuni</option>
                        </select>
                    </div>
                </div>
                <div className={styles.itemform_row}>
                    <div>
                        <label  htmlFor='model'>Malli</label>
                        <input type="text" name='model' />
                    </div>
                </div>
                <div className={styles.itemform_row}>
                    <div>
                        <label  htmlFor='note'>Lisätietoja</label>
                        <input type="text" name='note' />
                    </div>
                </div>
            </div>
        </form>
    )

}

export default ItemForm
