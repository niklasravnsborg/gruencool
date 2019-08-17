import React from 'react'
import { Flex, Box, Text, Heading } from '@rebass/emotion';

const items = [
  {
    time: "13:00 - 20:00",
    title: "Aus alten Büchern neue Kladden binden",
    organizor: "Galerie Kama"
  },
  {
    time: "13:00 - 20:00",
    title: "T-Shirts in Taschen verwandeln",
    organizor: "DIY-Werkstatt"
  },
  {
    time: "13:15 - 14:15 und 16:45 – 17:45",
    title: "Nachhaltiges Waschmittel herstellen",
    organizor: "Luna von Grüncool"
  },
  {
    time: "14:30 - 16:30 und 18:00 - 20:00",
    title: "T-Shirts im Batik-Look färben",
    organizor: "Neue Botschaft Sued"
  },
  {
    time: "15:00 - 16:00",
    title: "Ein eigenes Hochbeet einrichten",
    organizor: "SelbstFairSorgt"
  }
]

export default () => (
  <Box>
    <Heading mb="3">Workshops</Heading>
    {items.map(item => (
      <Flex mb={3}>
        <Text flex="1">
          <b>{item.title}</b><br/>
          {item.time}<br/>
          {item.organizor}
        </Text>
      </Flex>
    ))}
  </Box>
)
