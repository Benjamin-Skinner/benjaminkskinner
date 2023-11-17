import openai from '@/openai'
import { formatResponse } from '@/translation/formatResponse'
import { FeedbackT } from '@/types'
import {
	generatePromptAssessment,
	generatePromptImprovements,
} from './generatePrompt'

/**
 * @function getFeedback
 *
 * @summary
 * Sends the user's translation to the server and returns a full-formatted response
 *
 * @param {string} text - The text to translate
 *
 * @returns {Promise<FeedbackT>} - The server's response
 *
 * @remarks
 */

export const getFeedback = async (
	sentence: string,
	translation: string
): Promise<FeedbackT> => {
	const assessment = await getAssessment(sentence, translation)
	const improvements = await getImprovements(sentence, translation)
	console.log(assessment)
	console.log(improvements)

	const formattedResponse = formatResponse(
		sentence,
		translation,
		assessment,
		improvements
	)

	return formattedResponse
}

const getAssessment = async (sentence: string, translation: string) => {
	const prompt = generatePromptAssessment(sentence, translation)

	const response = await openai.chat.completions.create({
		messages: [{ role: 'user', content: prompt }],
		model: process.env.GPT_MODEL || 'gpt-3.5-turbo',
	})

	if (!response.choices[0].message.content) {
		throw new Error('No response from OpenAI')
	}

	return response.choices[0].message.content
}

const getImprovements = async (sentence: string, translation: string) => {
	const prompt = generatePromptImprovements(sentence, translation)

	const response = await openai.chat.completions.create({
		messages: [{ role: 'user', content: prompt }],
		model: process.env.GPT_MODEL || 'gpt-3.5-turbo',
	})

	if (!response.choices[0].message.content) {
		throw new Error('No response from OpenAI')
	}

	return response.choices[0].message.content
}
