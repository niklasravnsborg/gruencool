import React from 'react'
import { Box } from '@rebass/emotion'

export default ({ alt, ...props }) => (
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
        ...alt ? ({
          borderTop: `3px solid ${theme.colors.accent}`,
          borderRight: `3px solid ${theme.colors.accent}`,
          top: -12,
        }
        ) : ({
          borderBottom: `3px solid ${theme.colors.accent}`,
          borderRight: `3px solid ${theme.colors.accent}`
        })
      }
    })}
  />
)
