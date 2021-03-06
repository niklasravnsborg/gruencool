import { Box } from '@rebass/emotion'

export default props => (
  <Box
    mx="auto"
    px="3"
    css={{
      maxWidth: props.wide ? 1300 : 800
    }}
    {...props}
  />
)
