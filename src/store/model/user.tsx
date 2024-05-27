import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '@/utils/token'

const user = createSlice({
  name: 'user',
  initialState: () => {
    const token = getToken() || null
    return {
      token,
      userInfo: {
        username: '',
      },
    }
  },
  reducers: {
    setUserInfo(state, action) {
      const { payload } = action
      state.userInfo = payload
    },
  },
})

export const { setUserInfo } = user.actions
export default user
