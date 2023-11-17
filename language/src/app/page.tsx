'use client'

import LoadingSpinner from '@/components/Loading'
import { FeedbackT } from '@/types'
import { useState } from 'react'

export default function Home() {
	const [feedback, setFeedback] = useState<FeedbackT | null>(null)
	const [question, setQuestion] = useState<string>(
		'I was wondering if you could help me find a good bakery nearby.'
	)
	const [feedbackLoading, setFeedbackLoading] = useState<boolean>(false)
	const [newQuestionLoading, setNewQuestionLoading] = useState<boolean>(false)

	const getNewQuestion = async () => {
		const res = await fetch('/api/newQuestion', {
			method: 'POST',
		})

		const result = await res.json()
		setQuestion(result.question)
		setNewQuestionLoading(false)
	}

	const nextQuestion = async () => {
		setNewQuestionLoading(true)
		setFeedback(null)
		// set ID textarea to ''
		// @ts-ignore
		document.getElementById('translation')!.value = ''

		getNewQuestion()
	}

	const sendTranslation = async () => {
		setFeedbackLoading(true)
		const translation = (
			document.getElementById('translation') as HTMLInputElement
		).value

		const res = await fetch('/api/submit', {
			body: JSON.stringify({
				translation,
				question,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})

		const result = await res.json()
		setFeedback(result)
		setFeedbackLoading(false)
	}

	return (
		<div>
			<div className="w-1/2 pt-20 m-auto">
				<p className="italic pb-4">How do you say?:</p>
				{newQuestionLoading ? (
					<div className="m-auto flex mb-2">
						<LoadingSpinner size="4" />
					</div>
				) : (
					<p className="block mb-2 text-md text-gray-900 dark:text-white">
						{question}
					</p>
				)}
				<textarea
					id="translation"
					rows={4}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Write your translation here"
				></textarea>
				{feedbackLoading ? (
					<div className="m-auto  mt-12 flex items-center justify-center">
						<LoadingSpinner size="16" />
					</div>
				) : (
					<div>
						<button
							onClick={sendTranslation}
							type="button"
							className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>
							Submit
						</button>
						<button
							onClick={nextQuestion}
							type="button"
							className="mt-2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
						>
							Skip
						</button>
					</div>
				)}
			</div>

			{feedback && (
				<div className="max-w-3xl m-auto">
					<div className="m-auto block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{feedback.title}
						</h5>
						<h2 className="subtitle">Your answer</h2>
						<p className="text italic">{feedback.answer}</p>

						<p className="text mt-3">{feedback.summary}</p>
						<h2 className="mt-3">Here's a few things you fix:</h2>
						<ul className="list-disc px-4">
							{feedback.notes.map((note, i) => (
								<li className="text">{note}</li>
							))}
						</ul>
						<div className="mt-3">
							<h2 className="">A better translation might be:</h2>
							<p className="text italic">
								{feedback.suggestedAnswer}
							</p>
						</div>
					</div>
					<button
						onClick={nextQuestion}
						type="button"
						className="mt-2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
					>
						Next question
					</button>
				</div>
			)}
		</div>
	)
}
