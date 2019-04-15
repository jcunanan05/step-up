import { render } from 'react-testing-library'
import React from 'react'

describe('sample test', () => {
  const Sample = () => <h1>Hello World</h1>
  it('works', () => {
    render(<Sample />)
  })
})
