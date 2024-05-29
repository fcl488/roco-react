const key = 'ROCO_REACT'

export const getToken = () => {
  return localStorage.getItem(key)
}

export const setToken = (token: string) => {
  localStorage.setItem(key, token)
}

export const removeToken = () => {
  localStorage.removeItem(key)
}
