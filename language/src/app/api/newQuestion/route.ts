import { generateSentence } from '@/app/questions/getQuestion'
import { getFeedback } from '@/translation/getFeedback'

export async function POST(request: Request) {
	const question = await generateSentence()

	return Response.json({
		question,
	})
}
