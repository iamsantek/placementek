import { Answers, ContactFormInputs, PlacementSettings, Results } from '../types/types'

class PlacementService {
  public sendContactForm = async (user: ContactFormInputs, results: Results) => {
    const contact = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user,
        results
      })
    })

    return contact.json()
  }

  public fetchConfiguration = async () => {
    const questions = await fetch('api/questions')

    return questions.json() as Promise<PlacementSettings>
  }

  public sendResults = async (answers: Answers) => {
    const response = await fetch('api/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answers })
    })

    return response.json() as Promise<Results>
  }
}

export default new PlacementService()
