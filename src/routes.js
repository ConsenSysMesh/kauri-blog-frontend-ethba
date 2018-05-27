import React from 'react'
import Home from './Home'
import BlogPost from './BlogPost'
import Profile from './Profile'
import WritePost from './WritePost'
import { asyncComponent } from '@jaredpalmer/after'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/blogpost/:id',
    exact: true,
    component: BlogPost
  },
  {
    path: '/profile/:id',
    exact: true,
    component: Profile
  },
  {
    path: '/write-post',
    exact: true,
    component: WritePost
  }
]
