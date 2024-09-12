import { NextRequest, NextResponse } from 'next/server'
import { getInitialStories } from '../../../../services/hn'

export async function GET(req: Request, res: Response) {
	const stories = await getInitialStories()

	return NextResponse.json(stories)
}
