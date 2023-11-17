import { getFeedback } from '@/translation/getFeedback'

export async function POST(request: Request) {
	const body = await request.json()

	const feedback = await getFeedback(body.question, body.translation)

	return Response.json(feedback)
}
