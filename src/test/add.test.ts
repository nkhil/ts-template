import test from 'ava'

import { add } from '../add.js'

test('adds numbers', t => {
  t.is(add(2, 2), 4)
})
