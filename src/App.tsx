import { useEffect, useState } from 'react'
import { Header, Aside, Table } from './components'
import { Items } from './components/Table/Table.types'

import {
  LocalStorageService,
  DataService,
} from './components/Table/Table.service'

import { recursivelyDeleteItem } from './helpers/recursiveDelete'

import './App.style.scss'

export function App() {
  const [data, setData] = useState<Items[]>([])

  const columns = [
    { key: 'rowName', title: 'Наименование работ' },
    { key: 'salary', title: 'Основная з/п' },
    { key: 'equipmentCosts', title: 'Оборудование' },
    { key: 'overheads', title: 'Накладные расходы' },
    { key: 'estimatedProfit', title: 'Сметная прибыль' },
  ]

  const handleAdd = async (id: number, data: Items) => {
    try {
      console.log('@add', data)
    } catch (error) {
      console.error('Error deleting row:', error)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      // await DataService.removeItem(id)
      const storedData = LocalStorageService.getItem('data')

      if (!storedData) return

      const updatedData = recursivelyDeleteItem(storedData, id)

      LocalStorageService.setItem('data', updatedData)
      setData(updatedData)
    } catch (error) {
      console.error('Error deleting row:', error)
    }
  }

  const handleEdit = async (id: number, data: Items) => {
    try {
      console.log('@edit', id, data)
    } catch (error) {
      console.error('Error deleting row:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      let storedData = LocalStorageService.getItem('data')

      if (!storedData || storedData.length === 0) {
        try {
          const response = await DataService.getList()
          if (response) {
            storedData = response
            LocalStorageService.setItem('data', storedData)
          }
        } catch (error) {
          console.error(error)
        }
      }

      setData(storedData)
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Aside />
        <Table
          data={data}
          columns={columns}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  )
}
