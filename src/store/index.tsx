import { configureStore } from '@reduxjs/toolkit'
import user from '@/store/model/user'
// 创建store对象
const store = configureStore({
  reducer: {
    user: user.reducer,
  },
})
export default store
