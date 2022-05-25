import type { NextPage } from 'next'
import { Questions } from '../components/Questions'
import { Results as IResults } from '../types/types'
import { useMemo, useState } from 'react'
import { Results } from '../components/Results'
import { GoodByeScreen } from '../components/GoodByeScreen'
import ContactScreen from '../components/ContactScreen'
import { Intro } from '../components/intro/Intro'

enum CurrentScreen {
  Intro,
  Questions,
  Results,
  Contact,
  GoodBye
}

const Home: NextPage = () => {
  const [results, setResults] = useState<IResults | undefined>(undefined)

  const [currentScreen, setCurrentScreen] = useState<CurrentScreen>(CurrentScreen.Intro)

  const screens = useMemo(() => ({
    [CurrentScreen.Intro]: <Intro onStart={() => {
      setCurrentScreen(CurrentScreen.Questions)
      window.scrollTo(0, 0)
    }} />,
    [CurrentScreen.Questions]: <Questions onFinish={(results) => {
      setResults(results)
      setCurrentScreen(CurrentScreen.Results)
    }
    }/>,
    [CurrentScreen.Results]: <Results results={results} onAction={() => setCurrentScreen(CurrentScreen.Contact)} />,
    [CurrentScreen.Contact]: <ContactScreen onFinish={() => setCurrentScreen(CurrentScreen.GoodBye)} />,
    [CurrentScreen.GoodBye]: <GoodByeScreen />
  }), [results])

  return screens[currentScreen]
}

export default Home
