import React from 'react'
import { Box, Card, Heading, Text } from '@rebass/emotion'

import Nobreak from '../../components/Nobreak'

import ToolboxIcon from '../../images/icons/toolbox.svg'
import ProductsIcon from '../../images/icons/products.svg'
import PeopleIcon from '../../images/icons/people.svg'
import MicrophoneIcon from '../../images/icons/microphone.svg'
import ClothingIcon from '../../images/icons/clothing.svg'
import AvocadoIcon from '../../images/icons/avocado.svg'
import AboutIcon from '../../images/icons/about.svg'

const GridList = props => (
  <Box
    px="3"
    {...props}
  />
)

const GridListItem = ({ title, content, icon, ...props }) => (
  <Card
    p="4"
    css={theme => ({
      position: 'relative',
      borderLeft: `2px solid ${theme.colors.accent}`,
      borderRight: `2px solid ${theme.colors.accent}`,
      ':before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        height: 2,
        width: 'calc(100% + 40px)',
        transform: 'translateX(-50%)',
        backgroundColor: theme.colors.accent
      },
      ':last-of-type:before': {
        display: 'none'
      }
    })}
  >
    <Box
      mb="2"
      css={theme => ({
        'svg': {
          width: 40,
          fill: theme.colors.accent,
        }
      })}
      children={icon}
    />
    <Heading mb="2" children={title}/>
    <Text children={content}/>
  </Card>
)

export default _ => (
  <GridList>
    <GridListItem
      icon={<AboutIcon/>}
      title="Information"
      content="Multimediales Dressing für Deinen Kopfsalat! Hier kannst Du Wissen tanken und Dich bei Ständen regionaler Organisationen informieren."
    />
    <GridListItem
      icon={<PeopleIcon/>}
      title="Workshops"
      content="Nice Alltagsdinge zum Machen und Mitnehmen! Wir zeigen Dir, wie Du selbst Shampoo, Einkaufstasche und Co. herstellst."
    />
    <GridListItem
      icon={<ProductsIcon/>}
      title="Products"
      content={<>
        Hobbybastler aus der Umgebung präsentieren ihre Werke. <Nobreak>Ob Skateboards</Nobreak> oder Plastiktaschen – alles wird geupcycled!
      </>}
    />
    <GridListItem
      icon={<ClothingIcon/>}
      title="Kleidertausch"
      content="Bringt Kleidung mit, die gut aussieht, Euch aber nicht mehr passt oder gefällt. Mit Second-Hand Klamotten bist du wieder in Mode!"
    />
    <GridListItem
      icon={<AvocadoIcon/>}
      title="Streetfood-Style"
      content={<>
        Keine Sorge: Für den Mampf ist gesorgt! Denn das <Nobreak>L‘ Orient</Nobreak> und das Strandcafé Fährhaus präsentieren uns am Tag des Events ein Geschmackserlebnis, für welches allein es sich lohnt vorbei zu schauen. Alle Speisen werden umweltbewusst serviert und auf der Karte stehen natürlich auch vegane oder vegetarische Gerichte.
      </>}
    />
    {/* <GridListItem
      icon={<ToolboxIcon/>}
      title="Repair-Station"
      content="Wellness für deinen Drahtesel!"
    /> */}
    <GridListItem
      icon={<MicrophoneIcon/>}
      title="On the Stage"
      content="Nachdenken mit Poetry-Slammern, Entspannen mit Live-Musik. Nur ein ausgewogenes Bühnenprogramm führt zu einem ganzheitlichen Event."
    />
  </GridList>
)
