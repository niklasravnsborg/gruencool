import React from 'react'
import { Flex, Box, Image, Text } from '@rebass/emotion'

import wtf from '../../images/partners/wtf.png'
import mbo from '../../images/partners/mbo.png'
import fhdh from '../../images/partners/fhdh.png'
import kama from '../../images/partners/kama.png'
import young from '../../images/partners/young.png'
import demood from '../../images/partners/demood.png'
import victim from '../../images/partners/victim.png'
import lorient from '../../images/partners/lorient.png'
import morgaen from '../../images/partners/morgaen.png'
import senfonie from '../../images/partners/senfonie.png'
import exposify from '../../images/partners/exposify.png'
import jadewale from '../../images/partners/jadewale.png'
import cup2date from '../../images/partners/cup2date.png'
import faehrhaus from '../../images/partners/faehrhaus.png'
import bundjugend from '../../images/partners/bundjugend.png'
import greenpeace from '../../images/partners/greenpeace.png'
import einfachfilm from '../../images/partners/einfachfilm.png'
import quadratblick from '../../images/partners/quadratblick.png'
import micheltheilen from '../../images/partners/micheltheilen.png'
import jadekulturwerk from '../../images/partners/jadekulturwerk.png'
import barthelstiftung from '../../images/partners/barthelstiftung.png'
import selbstfairsorgt from '../../images/partners/selbstfairsorgt.png'
import fridaysforfuture from '../../images/partners/fridaysforfuture.png'
import neuebotschaftsued from '../../images/partners/neuebotschaftsued.png'
import intelligentmobiles from '../../images/partners/intelligentmobiles.png'

const PartnerLogo = ({ href, src, alt, ...props }) => (
  <Box width={[1/3, 1/4, 1/5]} px={[12, 24, 30, 40]} py={[24, 32]} style={{ maxWidth: 320 }}>
    <a href={href} target="_blank">
      <Image src={src} alt={alt} {...props}/>
    </a>
  </Box>
)

const Partners = _ => (
  <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
    <PartnerLogo
      href="https://lorient.one"
      src={lorient}
      alt="L‘ Orient Libanesisches Restaurant"
    />
    <PartnerLogo
      href="http://xn--strandcafe-fhrhaus-wtb.de"
      src={faehrhaus}
      alt="Strandcafé Fährhaus"
    />
    <PartnerLogo
      href="https://micheltheilen.com"
      src={micheltheilen}
      alt="Michel Theilen Music & Audio"
      px="8%"
    />
    <PartnerLogo
      href="https://www.wilhelmshaven-touristik.de"
      src={wtf}
      alt="Wilhelmshaven Touristik & Freizeit"
    />
    <PartnerLogo
      href="https://www.barthel-stiftung.de"
      src={barthelstiftung}
      alt="Barthel Stiftung"
      px="12%"
    />
    <PartnerLogo
      href="http://www.lichtdoktor.de"
      src={mbo}
      alt="MBO Lichtdesign"
    />
    <PartnerLogo
      href="https://www.demood.de"
      src={demood}
      alt="deMood"
    />
    <PartnerLogo
      href="https://www.quadratblick.de"
      src={quadratblick}
      alt="Quadratblick"
      px="22%"
    />
    <PartnerLogo
      href="https://www.cup2date.de"
      src={cup2date}
      alt="Cup2date"
    />
    <PartnerLogo
      href="https://www.jade-hs.de/jade-kulturwerk/"
      src={jadekulturwerk}
      alt="Jade Kulturwerk"
    />
    <PartnerLogo
      href="http://www.victimbrand.de"
      src={victim}
      alt="Victim Brand"
      px="16%"
    />
    <PartnerLogo
      href="https://www.exposify.de"
      src={exposify}
      alt="Exposify Immobiliensoftware"
    />
    <PartnerLogo
      href="https://friesland.heldenderheimat.de"
      src={fhdh}
      alt="Frieslands Helden der Heimat"
    />
    <PartnerLogo
      href="https://varafy.de"
      src={einfachfilm}
      alt="einfach film"
    />
    <PartnerLogo
      href="https://www.facebook.com/morgaenwilhelmshaven/"
      src={morgaen}
      alt="Morgaen Café"
    />
    <PartnerLogo
      href="https://www.bundjugend.de/"
      src={bundjugend}
      alt="BUNDjugend"
      px="20%"
    />
    <PartnerLogo
      href="https://www.wilhelmshavener-senfmanufaktur.de"
      src={senfonie}
      alt="Senfonie Wilhelmshaven"
      px="15%"
    />
    <PartnerLogo
      href="https://www.facebook.com/GalerieKaMa/"
      src={kama}
      alt="Galerie KaMa"
      px="15%"
    />
    <PartnerLogo
      href="https://www.selbstfairsorgt.de"
      src={selbstfairsorgt}
      alt="SelbstFairSorgt"
      px="15%"
    />
    <PartnerLogo
      href="https://fridaysforfuture-whv.jimdofree.com"
      src={fridaysforfuture}
      alt="Fridays for Future Wilhelmshaven"
      px="15%"
    />
    <PartnerLogo
      href="http://mst-hillmann.de/jadewale/"
      src={jadewale}
      alt="JadeWale"
    />
    <PartnerLogo
      href="https://www.intelligentmobiles.com"
      src={intelligentmobiles}
      alt="IntelligentMobiles"
    />
    <PartnerLogo
      href="https://www.wilhelmshaven.greenpeace.de/"
      src={greenpeace}
      alt="Greenpeace Wilhelmshaven"
    />
    <PartnerLogo
      href="https://www.vryoung-whv.de"
      src={young}
      alt="Volksbank Young Wilhelmshaven"
    />
  </Flex>
)

export default _ => (
  <>
    <Box mt={4} mb={4}>
      <Text textAlign="center" mb="2">Das Grüncool 2019 wird veranstaltet von:</Text>
      <Box mx="auto" px={20} css={{ maxWidth: 460 }}>
        <a href="https://neue-botschaft-sued.de/" target="_blank">
          <Image src={neuebotschaftsued} alt="Neue Botschaft Sued"/>
        </a>
      </Box>
    </Box>
    <Partners/>
  </>
)
