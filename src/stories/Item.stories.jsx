import Item from '../components/Item'
import { MemoryRouter } from 'react-router-dom'

export default {
    title: 'Components/Item',
    component: Item,
    tags: ['autodocs'],
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
    argTypes: {
        data: { control: 'object' },
    }
}

export const Default = {
    args: {
        data: {
            id: "1",
            model: "Sasung RS27mT5200SR",
            type: "Jääkaappi",
            note: "Tilava, mutta joskus kompressorin ääni voi olla voimakas."
        }
    }
}

export const OnlyRequiredData = {
    args: {
        data: {
            id: "2",
            model: "Bosch Serie 4 HBA534BS0",
            type: "Uuni"
        }
    }
}
