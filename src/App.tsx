import { useEffect, useState } from 'react'
import { Header, Aside, Table } from './components'

import {
  LocalStorageService,
  DataService,
} from './components/Table/Table.service'

import './App.style.scss'

export function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let storageData = LocalStorageService.getItem('data')

      if (!storageData || storageData.length === 0) {
        try {
          const response = await DataService.getList()
          if (response) {
            storageData = response
            LocalStorageService.setItem('data', storageData)
          }
        } catch (error) {
          console.error(error)
        }
      }

      setData(storageData)
    }

    fetchData()
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
