'use client'

import React from 'react'
import dateFormat from 'dateformat'
import { NewsStory } from '@/types'

interface Props {
	story: NewsStory
	index: number
}

const Story: React.FC<Props> = ({ story, index }) => {
	return (
		<div
			key={story.id}
			className={
				index % 2 === 0
					? ' rounded-xl bg-gradient-to-l from-slate-50 to-slate-300 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-black px-10 py-4 hover:opacity-50 flex flex-row'
					: 'px-10 py-4 hover:opacity-50 flex flex-row'
			}
			onClick={() => window.open(story.url, '_self')}
		>
			<div>
				<h3 className="text-lg dark:text-slate-200 leading-10 p-0">
					{story.title}
				</h3>
				<div className="flex flex-row items-center">
					<p className="text-sm text-slate-700 dark:text-slate-500 pr-10">
						{dateFormat(new Date(story.time * 1000), 'mmm d')}{' '}
					</p>
					<p className="text-sm text-slate-700 dark:text-slate-500">
						{story.score} points
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center ml-auto">
				<p className="text-xs text-slate-700 dark:text-slate-500">
					@{story.source}
				</p>
			</div>
		</div>
	)
}

export default Story
