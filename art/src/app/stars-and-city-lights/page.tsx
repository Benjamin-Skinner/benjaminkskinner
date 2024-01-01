import Image2 from '@/exhibits/human-art/2.png'
import Image3 from '@/exhibits/human-art/3.webp'
import Image4 from '@/exhibits/human-art/4.png'
import Image5 from '@/exhibits/human-art/5.png'
import Image6 from '@/exhibits/human-art/6.png'
import Image8 from '@/exhibits/human-art/8.png'
import Image9 from '@/exhibits/human-art/9.png'
import Image10 from '@/exhibits/human-art/10.png'
import Image11 from '@/exhibits/human-art/11.png'
import Image13 from '@/exhibits/human-art/13.png'
import Image14 from '@/exhibits/human-art/14.png'
import Image16 from '@/exhibits/human-art/16.png'
import Image17 from '@/exhibits/human-art/17.png'
import Image18 from '@/exhibits/human-art/18.png'
import BG from '@/exhibits/human-art/bg.webp'

import Image from 'next/image'
import { StaticImageData } from 'next/image'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Link,
} from '@nextui-org/react'
import { Button } from '@nextui-org/react'

interface Props {}

const Page: React.FC<Props> = ({}) => {
	return (
		<div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 pt-12">
			<section className="h-screen flex items-center justify-center">
				<Image
					alt="A city at night"
					src={BG}
					className="object-cover absolute w-full h-full top-0 opacity-75"
				/>
				<Card
					// isBlurred
					className="border-none bg-background/60 dark:bg-default-100/50 w-5/6 lg:w-1/2"
					shadow="sm"
				>
					<CardBody className="px-8">
						<h1 className="text-4xl font-medium py-3">
							Stars & City Lights: Exploring Beauty Everywhere
						</h1>
						<div className="py-8">
							<p className=" text-gray-800 font-light italic">
								This collection of artwork is an attempt to
								better understand beauty. Where can we find it,
								what is it, how can we create it, and why does
								it matter?
							</p>

							<p className=" text-gray-800 font-light italic pt-6">
								Each work is a collaboration between myself and
								Midjourney. At times, the images created were
								exactly what I had in mind; at others, the AI
								created something more beautiful than what I
								envisioned. In either case, I hope to show the
								value of AI-generated art as a legitimate form
								of artistic endeavour.
							</p>
						</div>
					</CardBody>
				</Card>
			</section>

			<div className="space-y-12">
				<Work
					title="A Moonlit Dance Between Man and God"
					image={Image2}
					url="https://cdn.discordapp.com/attachments/989274745495240734/1191066346398679090/benjaminskinner_A_beautiful_city_skyline_at_night_with_lights.__1380978f-590b-4c01-b797-4f85510ba2cf.png?ex=65a415f9&is=6591a0f9&hm=8deac68bf433606c95422aa4b4110977e3ca43493f74de86fb11b8e39d6ecd28&"
					description="This work showcases the synergistic beauty of a city when combined with nature, highlighting the possibility of fusing the beauty of nature with the beauty of human-made artwork."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="The Starriest of Nights"
					image={Image11}
					url="https://cdn.midjourney.com/9b103850-80cd-409e-bc31-77b4eb706383/0_3.webp"
					description="With no human civilization to pollute the night sky, nature has an opportunity to present us with pure beauty. This work begins the first section of the exhibit, which showcases nature's uncorrupted beauty."
					by="Benjamin Skinner (Dec 2023)"
					height={800}
				/>
				<Work
					title="The Untouched Coastline of the New World"
					image={Image4}
					url="https://cdn.midjourney.com/6dd7e1f5-07b3-4dcd-aca9-0605fd5e3671/0_0.webp"
					description="Inspired by the rocky bluffs of the Northern California coast, this work is a reminder of the unfathomable mass of nature's artistry, a scale which humans can never dream of replicating."
					by="Benjamin Skinner (Dec 2023)"
					height={400}
				/>
				<Work
					title="A Final Glimpse of Beauty"
					image={Image3}
					url="https://cdn.midjourney.com/b78e14e4-3009-4315-9d4c-4623dbcf2ae6/0_0.webp"
					description="This work tells the story of an aging explorer, unable to return to his home after a lifetime of adventure. Determined to feel the peace of home once more, he reclines on his ironclad steamer to watch the Northern lights one last time."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="Euclidean Divinity"
					image={Image8}
					url="https://cdn.discordapp.com/attachments/989274745495240734/1191096788032168128/benjaminskinner_low_poly_Mount_Everest._66664f1d-e52e-4295-93b0-05f50bcc477b.png?ex=65a43253&is=6591bd53&hm=2f02247ef9b0803b83cd0b0045bc633ebef11986c0c05d119496aad19a1e5ca9&"
					description="Euclidean Divinity is a study of the geometric beauty present in the natural world. By using a low poly style, this work tries to capture the essence of the mountain's geometric design."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="Incomprehensible"
					image={Image18}
					url="https://cdn.midjourney.com/d95c2320-3316-442a-881c-702934a6a5dc/0_2.webp"
					description="This work experiments with the idea that human perception is fundamentally limited. The workings of the universe are incomprehensibly complex."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="Paris, afternoon, 1920"
					image={Image5}
					url="https://cdn.discordapp.com/attachments/989274745495240734/1191091959700398121/benjaminskinner_Watercolor_of_Romantic_park_in_1920s_Paris._Imp_ff575f10-92b0-44fb-a7cd-b6252c959499.png?ex=65a42dd4&is=6591b8d4&hm=f4556facbac777fbeb78ae633c45fe70f8493a00bdf1066f9018cdb3b444f914&"
					description="The second section of the exhibit demonstrates human-made artork, beginning with the unrivaled urban beauty of the French capital."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="Will we be forgiven if we sin again tonight?"
					image={Image17}
					url="https://cdn.midjourney.com/f72b44d7-76ab-493c-b43a-8569b9eeee18/0_0.webp"
					description="This work seeks to appreciate the strange beauty that arises from artificial lights, an enclosed space, and chemically-altered states of mind."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="Write, Damn You! Write!"
					image={Image14}
					url="https://cdn.discordapp.com/attachments/989274745495240734/1191113123504062474/benjaminskinner_A_man_at_hiis_desk_screaing_into_his_hands._Edv_2585a823-897b-4cb2-bc82-060a3f2dcf3d.png?ex=65a4418a&is=6591cc8a&hm=40cded71de3a6e0739ed6a8f6781d832e1eda91f65152367025f75d1254ded7d&"
					poem="Just because I feel doesn't mean I have the ability to express my feelings in my art. Perhaps the beauty of human feelings is far greater than the beauty of human art? And what if the same is true of the beauty of nature?"
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="Here I am, after all these years"
					image={Image9}
					url="https://cdn.discordapp.com/attachments/989274745495240734/1191098436108419203/benjaminskinner_The_most_beautiful_presentation_of_a_trip_to_Ja_b4b61dd6-b50c-42e1-8767-5f1fa19cdaee.png?ex=65a433dc&is=6591bedc&hm=4371742b1080ec19e638edbb9ed346557bdc0ad86ce66b4875a748fb28fc16d9&"
					description="This work is a reminder to seek beauty in faraway lands, and a reminder that there is always more beauty to be experienced."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="The Beautiful Destruction of the World"
					image={Image10}
					url="https://cdn.discordapp.com/attachments/989274745495240734/1191099403843424348/benjaminskinner_Colorful_landscape_with_people_on_the_side_of_a_235808a1-2b24-41d6-b7c1-7d3b7034bbe8.png?ex=65a434c3&is=6591bfc3&hm=d3af19eafc99f0ca0b7c31c6e01e778b0a396a4adf8c77ae5259ddeecf74ffa5&"
					poem="The eventual destruction of the world is a certainty. One can only hope that it will at least be beautiful."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="Can we capture this beauty for our children?"
					image={Image16}
					url="https://cdn.midjourney.com/189acf8a-5f6c-4757-a95b-7f65357801bf/0_1.webp"
					description="The final section of the exhibit is about the innate drive to share beauty with our loved ones. This work is about a young couple in a beautiful setting, dreaming of the family they will one day raise. They feel a deep yearing to share this beauty with their unborn children, but they understand the inability of a polaroid picture to capture the full splendor of the moment. "
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="How soon shall you forget?"
					image={Image13}
					url="https://cdn.midjourney.com/6a8d2e02-19d4-4133-8b8c-e02a35dba067/0_2.webp"
					poem="Long after the ice melts, I shall still remember this moment. And I hope that you will too."
					description="The goal of this work is to show us the power of nature to instill memories, a fusion of the natural world with the human experience."
					by="Benjamin Skinner (Dec 2023)"
				/>
				<Work
					title="That we may one day stand here together"
					image={Image6}
					url="https://cdn.midjourney.com/16d56cf1-71aa-40f0-bf6c-e8d96b6ed99e/0_2.webp"
					poem="Grant me this one moment with you, as but one instant among eternity, and from that second on, I shall no longer fear death."
					by="Benjamin Skinner (Dec 2023)"
				/>
			</div>

			{/* <Card
				isBlurred
				className="border-none bg-background/60 dark:bg-default-100/50 w-5/6 lg:w-1/2"
				shadow="sm"
			> */}
			{/* <CardBody className="px-8"> */}
			{/* <h1 className="text-4xl font-medium py-3">
						The Beautiful Destroyer of Beautiful Worlds
					</h1> */}
			<div className="flex items-center justify-center h-screen">
				<p className=" text-gray-300 font-light italic text-center">
					The End
				</p>
			</div>
			{/* </CardBody>
			</Card> */}
		</div>
	)
}

export default Page

type WorkProps = {
	title: string
	description?: string
	image: StaticImageData
	url: string
	by: string
	height?: number
	poem?: string
}
const Work = ({
	title,
	description,
	image,
	url,
	by,
	height,
	poem,
}: WorkProps) => {
	return (
		<section className="lg:h-screen py-24 lg:py-0 h-min-screen">
			<div className="w-full flex items-center justify-center flex-col lg:flex-row space-y-12 lg:space-y-0  h-full">
				<div className="px-8 flex h-full items-center justify-center">
					<Image
						src={image}
						alt="Intro Image"
						className="rounded-md shadow-lg shadow-black border-8 border-black h-3/4 w-auto aspect-auto"
					/>
				</div>
				<Card className="min-w-[400px] max-w-[400px] min-h-min flex flex-1 ml-12 mr-8">
					<CardHeader className="flex gap-3">
						<div className="flex flex-col">
							<p className="text-md font-bold italic">{title}</p>
						</div>
					</CardHeader>

					{(poem || description) && (
						<>
							<Divider />
							<CardBody className="overflow-visible">
								{poem && (
									<p className="font-light text-sm italic">
										"{poem}"
									</p>
								)}
								<p className="font-light text-sm">
									{description}
								</p>
							</CardBody>
						</>
					)}
					<Divider />
					<CardFooter>
						<Link
							isExternal
							showAnchorIcon
							href={url}
							className="text-sm h-min-[20px]"
						>
							Enlarge
						</Link>
					</CardFooter>
				</Card>
			</div>
		</section>
	)
}
