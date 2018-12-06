import { SET_IMAGES } from './mutation-types'

function setImages(state, images) {
  state.images = images
}

export default {
  [SET_IMAGES]: setImages
}
