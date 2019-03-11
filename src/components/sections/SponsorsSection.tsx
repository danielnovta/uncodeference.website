import * as React from 'react'
import styled from '@emotion/styled'
import { Section } from '../Section'
import { colors } from '../../styles/variables'
import { Link } from '../../components/ui/Links'

const Title = styled.h4`
  color: ${colors.white} !important;
  letter-spacing: 0.06em;
`

const Text = styled.p`
  color: ${colors.white} !important;
`

const ColoredSection = styled.div`
  background: ${colors.black};
  @media (max-width: 480px) {
    padding: 1rem;
  }
  @media (min-width: 481px) {
    padding: 2rem;
  }
  @media (min-width: 800px) {
    padding: 4rem;
  }
`

const SponsorsContainer = styled(Section)`
  h2 {
    color: ${colors.brand};
  }
`

const SponsorsSection = () => (
  <ColoredSection>
    <SponsorsContainer id="sponsors" title="Sponsors">
      <Title>Main Sponsors</Title>
      <Text>
        <Link target="_blank" href="https://gronda.eu">
          Gronda:{' '}
        </Link>
        Organization
      </Text>
      <Text>
        <Link target="_blank" href="http://www.werkstaette-wattens.at/de">
          Werkstätte Wattens:{' '}
        </Link>
        Venue
      </Text>
      <Text> More sponsors to be announced </Text>
      <br />
      <br />
      <Title>
        Who else is supporting us?{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Title>
      <Text>
        {' '}
        <Link target="_blank" href="https://scriptconf.org/">
          Script Conf
        </Link>
      </Text>
      <Text>
        {' '}
        <Link target="_blank" href="https://webundspeck.com/">
          Web&amp;Speck Meetup
        </Link>
      </Text>
      <Text>
        {' '}
        <Link target="_blank" href="https://www.agent.sh/">
          Agent conf
        </Link>
      </Text>{' '}
      <br />
    </SponsorsContainer>
  </ColoredSection>
)

export default SponsorsSection
