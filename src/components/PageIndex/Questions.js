import React from 'react'
import styled from '@emotion/styled'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel as AccordionItemPanelBase,
  AccordionItemButton
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

const AccordionItemPanel = styled(AccordionItemPanelBase)`
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.primary};
`

const faqs = [
  {
    q: 'Was ist Grüncool überhaupt?',
    a: 'Das Grüncool 2019 ist eine öffentliche Nachhaltigkeits-Veranstaltung, die aus der Motivation, eine bessere Zukunft zu gestalten, entstanden ist. Alle Teammitglieder sind freiwillig dabei und wir verfolgen kein Profitziel. Sollte ein finanzieller Überschuss entstehen, wird dieser an eine gemeinnütze Organisation gespendet.'
  },
  {
    q: 'Wofür steht der Name?',
    a: 'Damit die Erde, so wie wir in ihr aufgewachsen sind erhalten bleibt, ist es wichtig ein umfassendes Umweltbewusstsein zu schaffen. Unsere Mission ist es „Grün“ cool zu machen und den Zeitgeist vorran zu bringen! Passend zu unserem friesischen Heimat und der Regionalität war auch der wortverwandte Grünkohl nicht unbeabsichtigt. '
  },
  {
    q: 'Warum macht Ihr das Event?',
    a: 'Wir glauben, dass der menschengemachte Klimawandel eine der größten Herausforderungen unserer Zeit ist. Unser Ziel ist es zu zeigen, wie wichtig der Schutz unserer Zukunft ist und wie wir heute mit positivem Mindset eine Veränderung beginnen können. Schon mit kleinen alltäglichen Beiträgen kann jeder die Welt ein bisschen besser machen. Und das macht sogar Spaß! Auf unserem Event sollen sich Menschen vorstellen und miteinander vernetzen können.'
  },
  {
    q: 'Welche Aktionen erwarten mich?',
    a: 'Beim Grüncool 2019 erwartet Dich ein vielfältiges Angebot zum Mitmachen und -denken, Zuhören und Genießen. Rund um Nachhaltigkeit und eine bessere Zukunft. Es gibt leckere Speisen, ein Bühnenprogramm mit Livemusik und Poetry-Slamern, diverse Workshops, Umwelt-Organisation und vieles mehr. Auf unseren sozialen Medien stellen wir in den kommenden Wochen einige der geplanten Aktionen vor.'
  },
  {
    q: 'Wer ist die Zielgruppe?',
    a: 'Jeder ist eingeladen! Umweltinteressierte und diejenigen die es werden wollen, Familien, Studierende, Schüler, Stubenhocker, Omas und Katzen.'
  },
]

export default _ => (
  <Accordion>
    {faqs.map(faq =>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {faq.q}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {faq.a}
        </AccordionItemPanel>
      </AccordionItem>
    )}
  </Accordion>
)
