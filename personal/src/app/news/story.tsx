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
			className={`px-2 sm:px-10 py-4 sm:py-4 hover:opacity-50 flex flex-row ${
				index % 2 === 0
					? 'rounded-xl bg-gradient-to-l from-slate-50 to-slate-300 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-black'
					: ''
			}`}
			onClick={() => window.open(story.url, '_self')}
		>
			<div className="flex flex-col justify-between pr-4">
				<h3 className="text-base sm:text-lg dark:text-slate-200 leading-1 mt-0 pt-0 sm:leading-10 pb-1">
					{story.title}
				</h3>
				<div className="flex flex-row items-center ">
					<p className="text-sm text-slate-400 dark:text-slate-500 pr-10">
						{dateFormat(new Date(story.time * 1000), 'mmm d')}{' '}
					</p>
					<p className="text-sm text-slate-400 dark:text-slate-500">
						{story.score} points
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center ml-auto">
				<p className="text-xs text-slate-400 dark:text-slate-500">
					@{story.source}
				</p>
			</div>
		</div>
	)
}

export default Story
