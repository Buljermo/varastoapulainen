import styles from './ItemForm.module.scss'
import useForm from '../../shared/useform/useform'
import Button from '../../shared/buttons'
import { useNavigate } from 'react-router-dom'

function ItemForm(props) {
    const navigate = useNavigate()

    const submit = () => {
        let storedValues = Object.assign({}, values)
        storedValues.id = storedValues.id ? storedValues.id : crypto.randomUUID()
        props.onItemSubmit(storedValues)
        navigate(-1)
    }

    const initialState = props.formData ? props.formData : {
        model: "",
        type: "",
        note: ""
    }

    const { values, handleChange, handleSubmit } = useForm(submit, initialState, false)

    const handleCancel = () => {
        navigate('/')
    }

    const handleDelete = () => {
        props.onItemDelete(values.id)
        navigate(-1)
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
                        <Button primary
                            disabled={values.model &&
                                values.type ? "" : "true"}
                            type='submit'>
                            {props.formData ? "TALLENNA" : "LISÄÄ"}
                        </Button>
                    </div>
                </div>
                {props.onItemDelete ?
                    <div className={styles.itemform_row}>
                        <div>
                            <Button secondary onClick={handleDelete}>POISTA</Button>
                        </div>
                        <div></div>
                    </div>
                    : null}

            </div>
        </form>
    )

}

export default ItemForm
