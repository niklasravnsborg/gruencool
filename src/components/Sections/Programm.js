import React from 'react'
import { Flex, Text } from '@rebass/emotion';

const items = [
  {
    time: '13.30',
    title: 'Bernhard Wessels',
    description: '„Nachhaltige Mobilität“',
    category: 'Vortrag'
  },
  {
    time: '13.50',
    title: 'Gaußband',
    description: 'Schülerband aus Braunschweig',
    category: 'Musik'
  },
  {
    time: '14.50',
    title: 'Marlene Stamerjohanns',
    description: '„Bäume, Libellen und Leute in Wilhelmshaven“',
    category: 'Poetry Slam'
  },
  {
    time: '15.10',
    title: 'Majanko',
    description: 'Poetischer Akustik-Pop aus Wilhelmshaven',
    category: 'Musik'
  },
  {
    time: '16.10',
    title: 'Michael Gorski',
    description: '„Warum Veganismus scheiße ist“',
    category: 'Vortrag'
  },
  {
    time: '16.30',
    title: 'Studentenwerk',
    description: 'Musikstudenten aus Bremen',
    category: 'Musik'
  },
  {
    time: '17.10',
    title: 'deMood aus Jever',
    description: 'Torsten Fellensiek im Gespräch',
    category: 'Gespräch'
  },
  {
    time: '18.10',
    title: 'We Don’t Know',
    description: 'Rockband aus Wilhelmshaven',
    category: 'Musik'
  },
  {
    time: '18.50',
    title: 'David Onnen',
    description: '„Kritik an Versandhandel und Rassismus“',
    category: 'Poetry Slam'
  },
  {
    time: '19.30',
    title: 'Crypsilon',
    description: 'Abgedrehter Singer-Songwriter',
    category: 'Musik'
  }
]

export default () => (
  <>
    {items.map(item => (
      <Flex mb={3}>
        <Text width={[60, 80]}>
          {item.time}
        </Text>
        <Text flex="1">
          <b>{item.title}</b><br/>
          {item.description}
        </Text>
        <Text width={120} textAlign="right">
          {item.category}
        </Text>
      </Flex>
    ))}
  </>
)
