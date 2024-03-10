import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		const filePath = path.join(process.cwd(), 'src/content/files/js.js')
		const fileContent = fs.readFileSync(filePath, 'utf-8')

		return new NextResponse(fileContent, {
			headers: {
				'Content-Type': 'application/javascript',
			},
		})
	} catch (error: any) {
		console.error(error)
		return NextResponse.json(
			{
				error: error.message,
			},
			{
				status: 500,
			}
		)
	}
}
