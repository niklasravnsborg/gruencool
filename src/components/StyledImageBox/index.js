import React from 'react'
import { Box } from '@rebass/emotion'

export default props => (
  <Box
    {...props}
    css={theme => ({
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        top: 12,
        left: 12,
        width: '100%',
        height: '100%',
        borderBottom: `3px solid ${theme.colors.accent}`,
        borderRight: `3px solid ${theme.colors.accent}`,
      }
    })}
  />
)
