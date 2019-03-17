import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default _ => (
  <Layout>
    <h1>Impressum</h1>

    <p>
      <b>Angaben gemäß § 5 TMG</b><br/>
      Nachhaltigkeitsfreunde<br/>
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
      Telefon: +49 (0) 167 81 70 43 72<br/>
      Email: FrancescoHuber@gmx.de
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
  </Layout>
)
