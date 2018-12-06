import { parse } from 'querystring'
import { RESET_TOKEN, SET_TOKEN } from './mutation-types'
import { generateAuthURL } from '../../../api/imgur'
import router from '../../../router'

function loginPrompt() {
  const URL = generateAuthURL()
  location.replace(URL)
}

function logout({ commit }) {
  commit(RESET_TOKEN)
  localStorage.clear('token')
}

function login({ commit }, hash) {
  const querystring = parse(hash)
  if (querystring.access_token) {
    commit(SET_TOKEN, querystring.access_token)
    localStorage.setItem('token', querystring.access_token)
  }
  router.push('/')
}

export default {
  logout,
  loginPrompt,
  login
}
