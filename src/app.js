'use strict'

import riot from 'riot'
import {createStore} from 'redux'
import './tags/app.tag'

let store = createStore(() => {})

riot.mount('app', {
  store: {
    msg: 'Hello World'
  }
})
