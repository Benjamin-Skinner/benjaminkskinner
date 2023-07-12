import { NextRequest, NextResponse } from 'next/server'
import { getMoreStories } from '../../../services/hn'

export async function GET(req: Request, res: Response) {
	const { searchParams } = new URL(req.url)
	const index = searchParams.get('index')

	if (!index) return NextResponse.json([])

	const stories = await getMoreStories(parseInt(index))

	return NextResponse.json(stories)
}
