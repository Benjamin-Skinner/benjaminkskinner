import React from 'react'

interface Props {
	size?: string
}

const LoadingSpinner: React.FC<Props> = ({ size = '16' }) => {
	return (
		<div
			className={`w-${size} h-${size} border-t-4 border-black rounded-full animate-spin`}
		></div>
	)
}

export default LoadingSpinner
