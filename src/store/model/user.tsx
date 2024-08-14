import { createSlice } from '@reduxjs/toolkit'
import { getToken, setToken } from '@/utils/token'

const user = createSlice({
  name: 'user',
  initialState: () => {
    let token:string = getToken() || ''
    let userInfo = {
      account: ''
    }
    return {
      token,
      userInfo,
    }
  },
  reducers: {
    setUserInfo(state, action) {
      const { payload } = action
      state.userInfo = payload
    },
    setTokenInfo(state, action) {
      const { payload } = action
      state.token = payload
      console.log(payload)
      setToken(payload)
    }
  },
})

export const { setUserInfo } = user.actions
export const { setTokenInfo } = user.actions
export default user
