import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
  
  const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }

  const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
  }
  
  const update = updatedObject => {
    const request = axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject)
    return request.then(response => response.data)
  }

// The extra step below stops a warning
const axiosInterface = { getAll, create, remove, update }

export default axiosInterface;