const key = 'ROCO_REACT'

export const getToken = (): string => {
  return localStorage.getItem(key) ? localStorage.getItem(key) as string : ''
}

export const setToken = (token: string) => {
  localStorage.setItem(key, token)
}

export const removeToken = () => {
  localStorage.removeItem(key)
}
