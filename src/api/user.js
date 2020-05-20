import axios from '@/libs/api.request'

export const getUserInfo = (token) => {
  return axios.request({
    url: 'user/',
    params: { token},
    method: 'get'
  })
}

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login/',
    data,
    method: 'post'
  })
}


// 20个接口