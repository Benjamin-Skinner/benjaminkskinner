'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Card, CardBody, Button, Slider } from '@nextui-org/react'
import IntroImage from '@/exhibits/human-art/intro.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<NextUIProvider>
			<div className="w-full h-min-screen lg:h-screen bg-gradient-to-bl from-orange-500 to-yellow-300">
				<p className="text-2xl font-medium text-center pt-12 pb-6">
					Welcome! Please select an exhibit:
				</p>
				<div className="flex flex-row items-center justify-evenly mt-12">
					{/* <Exhibit
						link="/the-battle-that-can-never-be-won-but-must-never-be-lost"
						title="The Battle That Can Never be Won But Must Never Be Lost"
						description="The struggle to live according to one's values is a battle that can never definitively be won, but must never be lost. This exhibit explores the nature of this battle, the different ways in which it is fought, and the different ways in which it can be lost."
					/> */}
					<Exhibit
						link="/stars-and-city-lights"
						title="Stars & City Lights: Exploring Beauty Everywhere"
						description="Both nature and humans are capable of
					generating beautiful works of art. But how do these
					different types of beauty compare? This exhibit compares and
					contrasts the different types of beauty that nature and
					humans are capable of creating, and explores the different
					feelings evoked by the respective types of beauty."
					/>
				</div>
			</div>
		</NextUIProvider>
	)
}

type CardProps = {
	title: string
	description: string
	link: string
}
const Exhibit = ({ title, description, link }: CardProps) => {
	return (
		<Link href={link}>
			<Card
				isBlurred
				className="h-full w-full lg:w-[600px] border-none bg-background/60 dark:bg-default-100/50 px-8 hover:scale-[1.02] transition-all duration-300 ease-in-out"
				shadow="sm"
			>
				<CardBody>
					<div className="h-min-24 flex justify-center items-center">
						<h1 className="py-4 text-4xl font-medium mt-2 text-center">
							{title}
						</h1>
					</div>

					<Image
						alt="Album cover"
						className="object-cover shadow-lg shadow-black rounded-lg m-auto my-8"
						height={400}
						// shadow="md"
						src={IntroImage}
						// width="100%"
					/>
					<p className="font-light italic py-4 text-center">
						{description}
					</p>
				</CardBody>
			</Card>
		</Link>
	)
}
