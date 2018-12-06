import { SET_IMAGES } from './mutation-types'
import api from '../../../api/imgur'
import router from '../../../router'

async function fetchImages({ rootState, commit }) {
  const response = await api.fetchImages(rootState.auth.token)

  commit(SET_IMAGES, response.data.data.map(item => item.link))
}

async function uploadImages({ rootState }, images) {
  await api.uploadImages(rootState.auth.token, images)

  router.push('/')
}

export default { fetchImages, uploadImages }
