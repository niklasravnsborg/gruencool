import React from 'react'
import { Box, Card, Heading, Text } from '@rebass/emotion'

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
      icon={<PeopleIcon/>}
      title="Workshops"
      content="Nice alternative Alltagsdinge zum Machen und Mitnehmen!"
    />
    <GridListItem
      icon={<AboutIcon/>}
      title="Information"
      content="Multimediales Dressing für deinen Kopfsalat!"
    />
    <GridListItem
      icon={<ProductsIcon/>}
      title="Products"
      content="Hobbybastler aus der Umgebung präsentieren ihre Upcycling-Diamanten! Mit Second-Hand Klamotten bist du wieder in Mode!"
    />
    <GridListItem
      icon={<ClothingIcon/>}
      title="Kleidertausch"
      content="Nice gegen nicer!"
    />
    <GridListItem
      icon={<AvocadoIcon/>}
      title="Geiles Essen"
      content="Natürlich selbstgemacht und auch vegan!"
    />
    <GridListItem
      icon={<ToolboxIcon/>}
      title="Repair-Station"
      content="Wellness für deinen Drahtesel!"
    />
    <GridListItem
      icon={<MicrophoneIcon/>}
      title="On the Stage"
      content="Nachdenken mit Poetry-Slammern, abdancen mit Live-Musik"
    />
  </GridList>
)
