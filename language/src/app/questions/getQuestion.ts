import openai from '../../openai'

export const generateSentence = async () => {
	const prompt = getPrompt()

	const response = await openai.chat.completions.create({
		messages: [{ role: 'user', content: prompt }],
		model: process.env.GPT_MODEL || 'gpt-3.5-turbo',
	})

	if (!response.choices[0].message.content) {
		throw new Error('No response from OpenAI')
	}

	return response.choices[0].message.content
}

const getPrompt = () => {
	const prompt = `Generate a sentence that I can use to practice my translation skills. The sentence should be practical and and used in an everyday situation. Use everyday language that would be fitting for a casual, unplanned interaction. Incorporate advanced grammatical concepts that are useful in daily situations. The sentence should be short. Do not use complex words. Reply with just the sentence.`
	return prompt
}
