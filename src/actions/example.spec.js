'use strict'

import test from 'ava'
import example from './example'

test('example test', t => {
  t.is(example(), 'hello world')
})
