import React from 'react'

import { asyncComponent } from '@jaredpalmer/after'

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./Home.tsx'), // required
      Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  },
  {
    path: '/blogpost/:id',
    exact: true,
    component: asyncComponent({
      loader: () => import('./BlogPost'), // required
      Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  },
  {
    path: '/profile/:id',
    exact: true,
    component: asyncComponent({
      loader: () => import('./Profile'), // required
      Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  },
  {
    path: '/write-post',
    exact: true,
    component: asyncComponent({
      loader: () => import('./WritePost'), // required
      Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  }
]
