import React from 'react'
import Image from 'next/image'

import GrapeVine from '@assets/my-life/grapevine.png'
import JumboVentures from '@assets/my-life/jv.png'
import DHS from '@assets/my-life/dhs.png'
import Tufts from '@assets/my-life/tufts.png'
import Paris from '@assets/my-life/paris.png'
import Sckedio from '@assets/my-life/sckedio.png'
import MMA from '@assets/my-life/bmac.png'

/*

- DHS
- Sckedio
- Tufts
- Jumbo Ventures
- GrapeVine
- Magician Society
- Mixed Martial Arts

*/

const Life: React.FC = () => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
				<Image
					src={MMA}
					alt="Picture of the author"
					width={200}
					height={200}
					className="self-center m-auto lg:mr-auto rounded-3xl object-cover h-[200px] w-[200px]"
				/>
				<div>
					<h3>Starting Muay Thai and BJJ</h3>
					<p className="text-gray-400">2023</p>
					<p>
						In Paris, I met a guy at the gym who was an MMA fighter.
						We sparred a little bit, and when I got back to school
						the first thing I did was to sign up for Jiu Jitsu and
						Muay Thai classes. I&apos;m now approaching 11 months of
						experience.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
				<Image
					src={Paris}
					alt="Picture of the author"
					width={200}
					height={200}
					className="self-center m-auto lg:mr-auto rounded-3xl object-cover h-[200px] w-[200px]"
				/>
				<div>
					<h3>Study Abroad</h3>
					<p className="text-gray-400">2022</p>
					<p>
						I spent the fall semester of my junior year studying in
						Paris. It was some combination of a dream European
						vacation and a three-month long purgatory that forced me
						to grow a lot. I&apos;m super glad I did it and it will
						be one of the highlights of my time at Tufts.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
				<Image
					src={GrapeVine}
					alt="Picture of the author"
					width={200}
					height={200}
					className="self-center m-auto lg:mr-auto rounded-3xl"
				/>
				<div>
					<h3>GrapeVine</h3>
					<p className="text-gray-400">2021 – 2022</p>
					<p>
						In June of 2021, I co-founded a startup to help people
						organize events with their friends more easily. We built
						a web app which had over 60,000 pageviews and a mobile
						app for iOS. We ended the project in March of 2023. To
						see my full reflection and learnings,{' '}
						<a className="link" href="/posts/grapevine-reflection">
							check out this article I wrote
						</a>
						.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
				<Image
					src={JumboVentures}
					alt="Picture of the author"
					width={200}
					height={200}
					className="self-center m-auto lg:mr-auto rounded-3xl"
				/>
				<div>
					<h3>Start of Jumbo Ventures</h3>
					<p className="text-gray-400">2021</p>
					<p>
						I&apos;m the co-founder of Jumbo Ventures, the
						student-run startup incubator at Tufts University. Every
						week, we get an alum to come speak to our cohort about
						various apsects of the entrepreneurial process. This is
						definitely been a big part of my college experience.{' '}
						<a className="link" href="https://jumboventures.org">
							Interested?
						</a>
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
				<Image
					src={Sckedio}
					alt="Picture of the author"
					width={200}
					height={200}
					className="self-center m-auto lg:mr-auto rounded-3xl"
				/>
				<div>
					<h3>Sckedio</h3>
					<p className="text-gray-400">2020</p>
					<p>
						Sckedio was the first startup I co-founded. My friend
						and I has no idea what we were doing, and we didn&apos;t
						have much success. But I realized that I loved
						entrepreneurship and I had my first coding experience
						while working on the project.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
				<Image
					src={Tufts}
					alt="Picture of the author"
					width={200}
					height={200}
					className="self-center m-auto lg:mr-auto rounded-3xl"
				/>
				<div>
					<h3>Tufts University</h3>
					<p className="text-gray-400">2020 – 2024</p>
					<p>
						I am a current member of the undergraduate class of 2024
						at Tufts University majoring in computer science and
						minoring in economics. Last fall I studied abroad in
						Paris.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
				<Image
					src={DHS}
					alt="Picture of the author"
					width={200}
					height={200}
					className="self-center m-auto lg:mr-auto rounded-3xl"
				/>
				<div>
					<h3>Davis High School</h3>
					<p className="text-gray-400">2017 - 2020</p>
					<p>
						At DHS, I participated in my school’s Student
						Government, Speech and Debate, Quiz Bowl, and Model
						United Nations clubs, which taught me as much as my
						classes.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Life
