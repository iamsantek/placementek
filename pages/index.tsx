import type { NextPage } from 'next'
import { Questions } from '../components/Questions'
import { CurrentScreen, PlacementSettings, PlacementContext as PlacementContextType } from '../types/types'
import { useEffect, useState } from 'react'
import { Results } from '../components/Results'
import { GoodByeScreen } from '../components/GoodByeScreen'
import ContactScreen from '../components/ContactScreen'
import { Intro } from '../components/intro/Intro'
import { defaultPlacementConfiguration, PlacementContext } from '../context/PlacementContext'
import PlacementService from '../services/PlacementService'

const Home: NextPage = () => {
  const [placementConfiguration, setPlacementConfiguration] = useState<PlacementSettings>(defaultPlacementConfiguration)

  useEffect(() => {
    const fetchConfiguration = async () => {
      const configuration = await PlacementService.fetchConfiguration()
      const { questions, timer } = configuration

      setPlacementConfiguration({
        ...placementConfiguration,
        questions,
        timer,
        isLoading: false
      })
    }

    fetchConfiguration()
  }, [])

  const screens = {
    [CurrentScreen.Intro]: <Intro />,
    [CurrentScreen.Questions]: <Questions />,
    [CurrentScreen.Results]: <Results />,
    [CurrentScreen.Contact]: <ContactScreen />,
    [CurrentScreen.GoodBye]: <GoodByeScreen />
  }

  const defaultContext: PlacementContextType = {
    context: placementConfiguration,
    setContext: setPlacementConfiguration
  }

  return (
    <PlacementContext.Provider value={defaultContext}>
      {screens[placementConfiguration.currentScreen]}
    </PlacementContext.Provider>
  )
}

export default Home
