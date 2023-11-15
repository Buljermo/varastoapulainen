import AppRouter from '../AppRouter'
import testdata from './testdata.js'
import { useState } from 'react'

function App() {

  const [data, setData] = useState(testdata)

  const handleItemDelete = (id) => {
    let copy = data.slice()
    copy = copy.filter(item => item.id !== id)
    setData(copy)
  }

  const handleItemSubmit = (newitem) => {
    let copy = data.slice()

    const index = copy.findIndex(item => item.id === newitem.id)
    if (index >= 0) {
      copy[index] = newitem
    } else {
      copy.push(newitem)
    }

    copy.sort((a, b) => {
      const aType = a.type.toLowerCase();
      const bType = b.type.toLowerCase();
      if (aType < bType) {
        return -1;
      } else if (aType > bType) {
        return 1;
      } else {
        return 0;
      }
    })
    setData(copy)
  }

  return (
    <>
      <AppRouter data={data}
        onItemSubmit={handleItemSubmit}
        onItemDelete={handleItemDelete} />
    </>
  )
}

export default App
