import axios from 'axios'
import { API_BASE_URL, API_ID } from '../constants/constants'

export const addRow = async (id: number, data: any) => {
  try {
    await axios.delete(
      `${API_BASE_URL}/v1/outlay-rows/entity/${API_ID}/row/create`,
      {
        data: {
          parentId: id,
          ...data,
        },
      }
    )
  } catch (error) {
    console.log('Error deleting row:', error)
    throw error
  }
}
