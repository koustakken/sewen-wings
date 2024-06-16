import axios from 'axios'
import { API_BASE_URL, API_ID } from '../../constants'
import { Items } from './Table.types'

export const axiosService = axios.create({
  baseURL: API_BASE_URL,
})

export const LocalStorageService = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  getItem: (key: string) => {
    const data = localStorage.getItem(key)
    if (data) return JSON.parse(data)
    return null
  },
}

export const DataService = {
  // Transform data
  transformData: (data: Items[], parentId: null | number = null, level = 0) => {
    return data.map((item) => {
      const newItem = {
        ...item,
        parentId: parentId,
        level: level,
      }
      if (item.child && item.child.length > 0) {
        newItem.child = DataService.transformData(
          item.child,
          item.id,
          level + 1
        )
      }
      return newItem
    })
  },

  // Get items
  getList: async () => {
    try {
      const { data } = await axiosService.get(
        `/v1/outlay-rows/entity/${API_ID}/row/list`
      )
      const transformedData = DataService.transformData(data)
      return transformedData
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  // Add item
  addItem: async (parentId: number, data: Items) => {
    try {
      const response = await axiosService.post(
        `/v1/outlay-rows/entity/${API_ID}/row/create`,
        {
          parentId,
          ...data,
        }
      )
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  // Edit item
  editItem: async (id: number, data: Items) => {
    try {
      const response = await axiosService.post(
        `/v1/outlay-rows/entity/${API_ID}/row/${id}/update`,
        {
          ...data,
        }
      )
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  // Remove item
  removeItem: async (id: number) => {
    try {
      const response = await axiosService.delete(
        `/v1/outlay-rows/entity/${API_ID}/row/${id}/delete`
      )
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  },
}
