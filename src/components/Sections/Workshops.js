import React from 'react'
import { Flex, Text } from '@rebass/emotion';

const items = [
  {
    time: "13.00 – 20.00 Uhr",
    title: "Aus alten Büchern neue Kladden binden",
    organizor: "Galerie Kama"
  },
  {
    time: "13.00 – 20.00 Uhr",
    title: "T-Shirts in Taschen verwandeln",
    organizor: "DIY-Werkstatt"
  },
  {
    time: "13.00 – 20.00 Uhr",
    title: "Ersatz für Frischhaltefolien herstellen",
    organizor: "BUNDjugend"
  },
  {
    time: "13.15 – 14.15 Uhr und 16.45 – 17.45 Uhr",
    title: "Nachhaltiges Waschmittel produzieren",
    organizor: "Luna von Grüncool"
  },
  {
    time: "14.30 – 16.30 Uhr und 18.00 – 20.00 Uhr",
    title: "T-Shirts im Batik-Look färben",
    organizor: "Neue Botschaft Sued"
  },
  {
    time: "15.00 – 16.00 Uhr",
    title: "Ein eigenes Hochbeet einrichten",
    organizor: "SelbstFairSorgt"
  }
]

export default () => (
  <>
    {items.map(item => (
      <Flex mb={3}>
        <Text flex="1">
          <b>{item.title}</b><br/>
          {item.time}<br/>
          {item.organizor}
        </Text>
      </Flex>
    ))}
  </>
)
