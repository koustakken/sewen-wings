import { useEffect, useState } from 'react'
import { Header, Aside, Table } from './components'

import { getList } from './requests/getList'

import './App.style.scss'

export function App() {
  const localStorageData = localStorage.getItem('data')
  const [data, setData] = useState(
    localStorageData ? JSON.parse(localStorageData) : []
  )

  useEffect(() => {
    getList()
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [localStorageData])

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
