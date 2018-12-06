import { stringify } from 'querystring'
import axios from 'axios'

const CLIENT_ID = '7cceb1da4292c09'
const ROOT_URL = 'https://api.imgur.com/'

export function generateAuthURL() {
  let params = {
    client_id: CLIENT_ID,
    response_type: 'token'
  }

  params = stringify(params)
  return `${ROOT_URL}oauth2/authorize?${params}`
}

export function fetchImages(token) {
  return axios.get(`${ROOT_URL}3/account/me/images`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export function uploadImages(token, images) {
  const promises = Array.from(images).map(image => {
    const formData = new FormData()
    formData.append('image', image)
    return axios.post(`${ROOT_URL}/3/image`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  })

  return Promise.all(promises)
}

export default {
  fetchImages,
  generateAuthURL,
  uploadImages
}
