import React from 'react'
import { Box } from '@rebass/emotion'

export default ({ top = null, bottom = null, left = 0, right = 0, fill, ...props }) => (
  <Box
    css={{
      position: 'absolute',
      top, bottom, left, right,
      zIndex: -10,
      'svg': { fill },
      '@media(min-width: 500px)': {
        display: 'none'
      }
    }}
    {...props}
  />
)
