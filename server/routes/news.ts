import express, { Express, Request, Response, Router } from 'express'

import { getInitialStories, loadMoreStories } from '../services/news/index.js'

const router: Router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get('/initial', async (req: Request, res: Response) => {
    const stories = await getInitialStories()
    res.json(stories)
})

router.get('/load/:id', async (req: Request, res: Response) => {
    const new_stories = await loadMoreStories(parseInt(req.params.id))
    res.json(new_stories)
})

export default router

