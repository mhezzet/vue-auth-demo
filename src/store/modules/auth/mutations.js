import { SET_TOKEN, RESET_TOKEN } from './mutation-types'

function setToken(state, token) {
  state.token = token
}

function resetToken(state) {
  state.token = ''
}

export default {
  [SET_TOKEN]: setToken,
  [RESET_TOKEN]: resetToken
}
