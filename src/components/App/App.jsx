import AppRouter from '../AppRouter'
import { useState } from 'react'
import useLocalStorage from '../../shared/uselocalstorage'

function App() {

  const [data, setData] = useLocalStorage('varastoapulainen-data',[])
  const [typelist, setTypelist] = useLocalStorage('varastoapulainen-typelist',[])

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

  const handleTypeSubmit = (type) => {
    let copy = typelist.slice()
    copy.push(type)
    copy.sort()
    setTypelist(copy)
  }

  return (
    <>
      <AppRouter data={data}
        typelist={typelist}
        onItemSubmit={handleItemSubmit}
        onItemDelete={handleItemDelete} 
        onTypeSubmit={handleTypeSubmit} />
    </>
  )
}

export default App
