import { Flex, Box, Image } from '@rebass/emotion'

import fhdh from '../../images/partners/fhdh.png'
import victim from '../../images/partners/victim.png'
import lorient from '../../images/partners/lorient.png'
import morgaen from '../../images/partners/morgaen.png'
import jadewale from '../../images/partners/jadewale.png'
import exposify from '../../images/partners/exposify.png'
import faehrhaus from '../../images/partners/faehrhaus.png'
import bundjugend from '../../images/partners/bundjugend.png'
import einfachfilm from '../../images/partners/einfachfilm.png'
import micheltheilen from '../../images/partners/micheltheilen.png'

const PartnerLogo = ({ href, src, alt, ...props }) => (
  <Box width={[1/2, 1/4]} px={[4, null, null, 5]} py={4} style={{ maxWidth: 320 }}>
    <a href={href} target="_blank">
      <Image src={src} alt={alt} {...props}/>
    </a>
  </Box>
)

export default _ => (
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
      href="http://mst-hillmann.de/jadewale/"
      src={jadewale}
      alt="JadeWale"
    />
    <PartnerLogo
      href="https://www.bundjugend.de/"
      src={bundjugend}
      alt="BUNDjugend"
      px="18%"
    />
  </Flex>
)
