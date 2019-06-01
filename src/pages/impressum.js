import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'

export default _ => (
  <Layout title="Impressum">
  <Container>
    <h1>Impressum</h1>

    <p>
      <b>Angaben gemäß § 5 TMG</b><br/>
      Grüncool<br/>
      Karl-Harms Str. 18<br/>
      26419 Schortens
    </p>

    <p>
      <b>Vertreten durch</b><br/>
      Francesco Huber<br/>
      Niklas Ravnsborg<br/>
      Richard Keil<br/>
      Kadija Ege<br/>
      Luna Hilbers<br/>
      Sophie Plenio
    </p>

    <p>
      <b>Kontakt</b><br/>
      Telefon: <a href="tel:+4916781704372">+49 167 81704372</a><br/>
      Email: <a href="mailto:info@gruen.cool">info@gruen.cool</a>
    </p>

    <p>
      <b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</b><br/>
      Francesco Huber<br/>
      Karl-Harms Str. 18<br/>
      26419 Schortens
    </p>

    <p>
      <Link to="/">← Zurück zur Startseite</Link>
    </p>
  </Container>
  </Layout>
)
