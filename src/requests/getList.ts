import axios from 'axios'
import { API_BASE_URL, API_ID } from '../constants/constants'

export const getList = async () => {
  const localStorageData = localStorage.getItem('data')
  try {
    if (localStorageData) return JSON.parse(localStorageData)

    const response = await axios.get(
      `${API_BASE_URL}/v1/outlay-rows/entity/${API_ID}/row/list`
    )

    localStorage.setItem('data', JSON.stringify(response.data))
    return response.data
  } catch (error) {
    console.log(error)
  }
}
