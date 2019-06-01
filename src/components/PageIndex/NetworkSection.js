import { Flex, Box, Image } from '@rebass/emotion'

import fhdh from '../../images/partners/fhdh.png'
import victim from '../../images/partners/victim.png'
import lorient from '../../images/partners/lorient.png'
import exposify from '../../images/partners/exposify.png'
import faehrhaus from '../../images/partners/faehrhaus.png'
import einfachfilm from '../../images/partners/einfachfilm.png'
import micheltheilen from '../../images/partners/micheltheilen.png'

const PartnerLogo = ({ href, src, alt, ...props }) => (
  <Box width={[1/2, 1/3]} px={[4, null, 5]} py={4} style={{ maxWidth: 320 }}>
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
      px={28}
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
  </Flex>
)
