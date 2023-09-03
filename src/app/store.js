import { configureStore } from '@reduxjs/toolkit'
import postsRedcer from '../features/posts/postsSlice'
import tipsRedcer from '../features/tips/tipsSlice'

export default configureStore({
  reducer: { 

    posts: postsRedcer,
    tips: tipsRedcer
  }


})