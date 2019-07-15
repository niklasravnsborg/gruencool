import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'

export default _ => (
  <Layout title="Impressum">
  <Container>
    <h1>Impressum</h1>

    <p>
      <b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</b><br/>
      Grüncool (Francesco Huber)<br/>
      Karl-Harms Str. 18<br/>
      26419 Schortens<br/>
    </p>

    <p>
      Kontakt: <a href="mailto:info@gruen.cool">info@gruen.cool</a> | <a href="tel:+4916781704372">+49 167 81704372</a>
    </p>

    <p>
      <b>Veranstalter am 18. August 2019</b><br/>
      Neue Botschaft Sued e.V.<br/>
      Eingetragen im Vereinsregister.<br/>
      Registergericht: Amtsgericht Oldenburg (Oldenburg)<br/>
      Registernummer: VR 201561<br/>
      <br/>
      Gemeinnützig durch Bescheid nach § 60a Abs. 1 AO über die gesonderte Feststellung der Einhaltung der satzungsmäßigen Voraussetzungen nach §§ 51, 59, 60 und 61 AO
    </p>

    <p>
      <Link to="/">← Zurück zur Startseite</Link>
    </p>
  </Container>
  </Layout>
)
