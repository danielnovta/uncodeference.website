import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section'

const ColoredSection = styled.div`
  background-image: linear-gradient(90deg, ${colors.brand}, hsla(173, 45%, 62%, 0.9));
  @media (max-width:480px){
      padding: 1rem;
  }
  @media (min-width:481px){
      padding: 2rem;
    }
  @media (min-width:800px){
      padding: 4rem;
    }
`

const AttendContainer = styled(Section)`
  a {
    color: ${colors.black};
  }
`

const AttendSection = () => (
  <ColoredSection>
    <AttendContainer id="attend" title="Attend">
      <div>
        <section>
          <h3>The Conference</h3>
          <div>
            <p>The unconference* format creates space for peer-to-peer learning, collaboration and creativity.</p>
            <p>
              At the start, the whole group will gather together and be guided through creating an agenda using open space technology. The
              exact process is not important to understand in advance – the process will become clear as it happens. The important part is
              that all those gathered will have the opportunity to put conference sessions on the agenda. No session will be voted off or
              ‘won’t happen’ for some other reason. All sessions are welcome!
            </p>
            <p>The sessions convened will range from the formal to the informal:</p>
            <ul>
              <li>
                From the well thought out pre-prepared talk reflecting years of research and practice to the spur of the moment ‘new idea’
                that would be fun to talk about.
              </li>
              <li>From the demonstration of a working tool to the whiteboarding of something completely new.</li>
            </ul>
            <p>
              Read more about it&nbsp;
              <a target="_blank" href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">
                here
              </a>
              .
            </p>
          </div>
        </section>
        <section>
          <h3>The Venue</h3>
          <p>
            <a href="https://www.werkstaette-wattens.at/en" target="blank">
              Werkstätte Wattens
            </a>{' '}
            is an international business and creative centre for founders, startups, movers & shakers and service providers at various
            stages of development. They focus on technology, innovation, and the creation of regional value and sustainable growth.
          </p>
          <p />
          <p>Weisstraße 9, 6112 Wattens, Austria</p>
        </section>
        <section>
          <h3>The Meetup</h3>
          <p>
            Follow the{' '}
            <a href="https://github.com/uncodeference/unmeetup" target="blank">
              link
            </a>{' '}
            for more info!
          </p>
        </section>
        <section>
          <h3>The Hike</h3>
          <p>To be announced!</p>
        </section>
        <section>
          <h3>Code of Conduct</h3>
          <p>
            All attendees, speakers, sponsors and volunteers at our conference are required to agree with the{' '}
            <a href="http://confcodeofconduct.com/">
              <b>Conference Code of Conduct</b>
            </a>
            . We expect cooperation from all participants to help ensure a safe environment for everybody.
          </p>
        </section>
      </div>
    </AttendContainer>
  </ColoredSection>
)

export default AttendSection
