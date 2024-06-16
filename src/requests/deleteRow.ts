import axios from 'axios'
import { API_BASE_URL, API_ID } from '../constants/constants'
import { getList } from './getList'

export const deleteRow = async (id: number) => {
  try {
    await axios.delete(
      `${API_BASE_URL}/v1/outlay-rows/entity/${API_ID}/row/${id}/delete`
    )
  } catch (error) {
    console.log('Error deleting row:', error)
    throw error
  }
}
