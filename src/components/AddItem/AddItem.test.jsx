import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import AddItem from './AddItem.jsx'

describe('AddItem', () => {
    test('Lisäyslomake lähettää tiedot, kun vaadittavat kentät on täytetty', async () => {

        // Alustetaan testauskirjaston käyttäjäinteraktiot.
        const user = userEvent.setup()

        // Muodostetaan laitetyyppi-lista.
        const typelist = ['Jääkaappi', 'Uuni', 'Pesukone']

        // Lomakkeelle syötettävät tiedot.
        const formdata = {
            type: typelist[1],     // laitetyyppi-listan toinen alkio
            model: 'Bosch',
            note: 'Hyväkuntoinen'
        }

        // Muodostetaan lomakekäsittelijää simuloiva funktio.
        // Testin kannalta riittää, että nähdään kuinka monta
        // kertaa funktiota kutsuttiin ja millä arvolla.
        const handleItemSubmit = vi.fn(() => true)

        // Renderöidään komponentti.
        render(<AddItem onItemSubmit={handleItemSubmit}
            typelist={typelist} />, { wrapper: BrowserRouter })

        // Valitaan laitetyyppi ja tarkistetaan, että
        //  - listasta on valittu oikea valinta ja 
        //  - lisäysnappi on disabloitu.
        await user.selectOptions(screen.getByLabelText('Tuotetyyppi'), formdata.type)
        expect(screen.getByRole('option', { name: formdata.type }).selected).toBe(true)
        expect(screen.getByRole('button', { name: 'LISÄÄ' }).disabled).toBe(true)

        // Syötetään malli ja tarkistetaan, että
        //  - kentän arvo on sama kuin syötetty arvo ja 
        //  - lisäysnappi on disabloitu.
        await user.type(screen.getByLabelText('Malli'), formdata.model.toString())
        expect(screen.getByLabelText('Malli')).toHaveValue(formdata.model)
        expect(screen.getByRole('button', { name: 'LISÄÄ' }).disabled).toBe(false)

        // Syötetään lisätietoja ja tarkistetaan, että
        //  - kentän arvo on sama kuin syötetty arvo ja 
        //  - lisäysnappi on aktiivinen.
        await user.type(screen.getByLabelText('Lisätietoja'), formdata.note)
        expect(screen.getByLabelText('Lisätietoja')).toHaveValue(formdata.note)
        expect(screen.getByRole('button', { name: 'LISÄÄ' }).disabled).toBe(false)

        // Painetaan lisäysnappia ja tarkistetaan, että
        //  - handleItemSubmit-funktiota on kutsuttu vain kerran ja
        //  - funktion parametrina saama olio sisältää samat tiedot
        //    kuin mitä lomakkeelle syötettiin.
        await user.click(screen.getByRole('button', { name: 'LISÄÄ' }))
        expect(handleItemSubmit).toHaveBeenCalledTimes(1);
        const submittedItem = handleItemSubmit.mock.lastCall.shift()
        expect(submittedItem).toMatchObject(formdata)

    })
})
