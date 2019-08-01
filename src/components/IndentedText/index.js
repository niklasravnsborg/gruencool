import React from 'react'
import { Flex, Box, Text } from '@rebass/emotion'

export default props => (
  <Flex>
    <Box
      flex="none"
      bg="accent"
      ml="4"
      mr="3"
      css={{
        width: 2,
        height: 40
      }}
    />
    <Text
      {...props}
    />
  </Flex>
)
