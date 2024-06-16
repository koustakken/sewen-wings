import { useEffect, useState } from 'react'
import { Header, Aside, Table } from './components'

import { getList } from './requests/getList'

import './App.style.scss'

export function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getList()
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Aside />
        <Table data={data} />
      </div>
    </>
  )
}
