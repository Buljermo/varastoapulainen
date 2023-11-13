import styles from './ItemForm.module.scss'
import useForm from '../../shared/useform/useform'
import Button from '../../shared/buttons'

function ItemForm(props) {

    const submit = () => {
        console.log(values)
        alert("SUBMIT")
    }

    const initialState = {
        model: "",
        tyoe: "",
        note: ""
    }

    const { values, handleChange, handleSubmit } = useForm(submit, initialState, false)

    const handleCancel = () => {
        alert('CANCEL')
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.itemform}>
                <div className={styles.itemform_row}>
                    <div>
                        <label htmlFor='type'>Tuotetyyppi</label>
                        <select name="type" onChange={handleChange} value={values.type}>
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
                        <label htmlFor='model'>Malli</label>
                        <input type="text" name='model' onChange={handleChange} value={values.model} />
                    </div>
                </div>
                <div className={styles.itemform_row}>
                    <div>
                        <label htmlFor='note'>Lisätietoja</label>
                        <input type="text" name='note' onChange={handleChange} value={values.note} />
                    </div>
                </div>
                <div className={styles.itemform_row}>
                    <div>
                        <Button onClick={handleCancel}>PERUUTA</Button>
                    </div>
                    <div>
                        <Button primary type='submit'>LISÄÄ</Button>
                    </div>
                </div>
            </div>
        </form>
    )

}

export default ItemForm