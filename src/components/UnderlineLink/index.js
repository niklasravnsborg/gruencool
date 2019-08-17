import React from 'react'
import { Box } from '@rebass/emotion'

export default props => (
  <Box
    css={{
      display: 'inline-block',
      borderBottom: '2px solid black',
      a: { color: 'black' }
    }}
    {...props}
  />
)
