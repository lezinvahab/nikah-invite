import { wedding } from './config/wedding'
import Cover from './components/Cover'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import MiniCountdown from './components/MiniCountdown'
import Couple from './components/Couple'
import Story from './components/Story'
import EventDetails from './components/EventDetails'
import Timeline from './components/Timeline'
import Venue from './components/Venue'
import Gallery from './components/Gallery'
import Family from './components/Family'
import DressCode from './components/DressCode'
import SpecialNote from './components/SpecialNote'
import RSVP from './components/RSVP'
import MusicButton from './components/MusicButton'
import Footer from './components/Footer'

export default function App() {
  const { show } = wedding

  return (
    <>
      {wedding.openInvitation && <Cover />}

      <Navigation />

      <main>
        <Hero />
        {show.countdown && <Countdown />}
        {show.couple && <Couple />}
        {show.story && <Story />}
        {show.details && <EventDetails />}
        {show.timeline && wedding.timeline.length > 0 && <Timeline />}
        {show.venue && <Venue />}
        {show.gallery && <Gallery />}
        {show.family && <Family />}
        {show.dressCode && <DressCode />}
        {show.specialNote && <SpecialNote />}
        {show.rsvp && <RSVP />}
      </main>

      <Footer />
      <MusicButton />
      {show.countdown && <MiniCountdown />}
    </>
  )
}