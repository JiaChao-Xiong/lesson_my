import axios from "./config.js"

const getSwiperList = () => {
  return axios.get('/swiperList')
}

const getVideosList = () => {
  return axios.get('/videosList')
}

export { getSwiperList, getVideosList }