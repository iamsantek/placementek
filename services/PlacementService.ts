import { Answers, ContactFormInputs, Question, Results } from "../types/types"

class PlacementService {
    public sendForm = async (formData: ContactFormInputs) => {
        const contact = await fetch('api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        return contact.json()
    }

    public fetchQuestions = async () => {
        const questions =  await fetch('api/questions')

        return questions.json() as Promise<Question[]>
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