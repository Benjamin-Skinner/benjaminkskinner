/**
 * @function formatResponse
 *
 * @summary
 * Takes a reponse from ChatGPT and formats it as a FeedbackT
 *
 * @param {string} response - The response from ChatGPT
 *
 * @returns {FeedbackT} - The formatted response
 *
 * @remarks
 */

import { FeedbackT } from '@/types'

export const formatResponse = (
	sentence: string,
	translation: string,
	assessment: string,
	improvements: string
): FeedbackT => {
	const improvementsArray = improvements.split('=').filter((i) => i !== '')

	return {
		title: "That's correct!",
		sent: new Date().toISOString(),
		correct: true,
		answer: translation,
		question: sentence,
		suggestedAnswer: '',
		summary: assessment,
		notes: improvementsArray,
		error: '',
	}
}
