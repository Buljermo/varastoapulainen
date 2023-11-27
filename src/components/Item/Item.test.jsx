import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Item from './Item.jsx'

describe('Item', () => {
    test('Komponentti renderöityy merkinnän tiedoilla', () => {
        // Määritellään merkinnän tiedot.
        const data = {
            id: "1",
            model: "Samsung RS27T5200SR",
            type: "Jääkaappi",
            note: "Tilava, mutta joskus kompressorin ääni voi olla voimakas."
        }
        render(<Item data={data} />, { wrapper: BrowserRouter })

        // Määritetään lokaaliasetukset.
        const locale = "fi-FI"

        // Model
        const modelElement = screen.getByText(data.model)
        expect(modelElement).toBeInTheDocument()

        // Type
        const typeElement = screen.getByText(data.type)
        expect(typeElement).toBeInTheDocument()

    })
})
