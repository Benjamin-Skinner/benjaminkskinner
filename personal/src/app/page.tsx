import Image from 'next/image'
import Headshot from '@assets/headshot.jpg'
import Link from 'next/link'
import PowerOfNow from '@assets/books/pon.jpg'
import Stoic from '@assets/books/stoic.jpg'
import Fountainhead from '@assets/books/fountainhead.jpg'
import Meme from '@assets/meme.jpg'
import Schedule from '@/components/home/Schedule'
import Life from '@/components/home/Life'

export default function Home() {
	return (
		<div>
			<section>
				<blockquote>
					Hi, I&apos;m Ben Skinner. My greatest interests are finding
					ways to make myself a better person and using code to build
					things that I think are cool.
				</blockquote>
			</section>
			<div className="w-full flex justify-center">
				<Image
					src={Headshot}
					alt="Picture of the author"
					width={500}
					height={500}
					className="rounded-full h-[500px] w-[500px] object-cover margin-auto mt-16"
				/>
			</div>
			{/* <section>
				<h2>Brief Timeline of My Life</h2>
				<p>
					Here&apos;s a brief rundown of some of the things I&apos;m
					most proud of and that I think have had the most impact on
					my life. If you want to see me brag about my skills and
					accomplishments, check out my{' '}
					<a
						href="https://www.linkedin.com/in/ben-skinner-profile/"
						className="link"
					>
						LinkedIn
					</a>
				</p>
				<Life />
			</section> */}

			<section>
				<h2>My Life Principles</h2>
				<p>
					I believe that it is critical to have a well-defined set of
					values and to live based on those values. My brain works by
					defining my values in terms of a few key words, and then
					defining those words in detail. The main influences on my
					values are Stoicism, Buddhism, Objectivism, and Non-violent
					communication (NVC). Here is a brief description of how I
					try to live my life:
				</p>
				<br />
				<ol>
					<li>
						Authenticity: Don’t let society or others tell you what
						to think, do, or feel. You are your primary concern, so
						take responsibility for your life. Above all, always be
						authentic. Never be fake or trade an ounce of your soul
						for anything.
					</li>
					<li>
						Compassion: Remember that everyone on the planet is
						suffering in their own way. Be understanding and
						compassionate.
					</li>
					<li>
						Experience: Have a good time. Live in the present
						moment, remembering that every day or moment could be
						your last.
					</li>
					<li>
						Competence: Always do the best you can in whatever
						you&apos;re doing. Whether as a student, as a friend, or
						as a business partner, be clear on what your
						responsibilities are and make sure to live up to them.
					</li>
					<li>
						Courage: Have courage. Be willing to suffer and make
						sacrifices to be the person you want to be.
					</li>
				</ol>
			</section>

			<section>
				<h2>A Few Random Things</h2>
				<ul>
					<li>
						Everybody has the same 24 hours in a day: If
						Michelangelo could paint the Sistine Chapel, Thomas
						Edison could patent over 1,000 inventions, and Alexander
						the Great could conquer 2 million square miles, just
						think what you could accomplish.
					</li>
					<li>
						A rich person is nothing but a poor person with money
					</li>
					<li>
						<Link className="link" href="/news">
							Check out my hacker news UI
						</Link>
					</li>
					<li>
						When you think of something funny today, know that it
						was me telepathically telling you a joke. You&apos;re
						welcome.
					</li>
					<li>This, too, shall pass</li>
					<li>
						“You have enemies? Good. That means you&apos;ve stood up
						for something, sometime in your life.” – Winston
						Churchill
					</li>
					<li>
						If you think about it, every time you paint a room it
						gets a little smaller.
					</li>
					<li>
						<a
							href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							rel="noreferrer"
							target="_blank"
							className="link"
						>
							Here&apos;s the meaning of life
						</a>
					</li>
					<li>Et in Arcadia ego</li>
					<li>
						“Man suffers only because he takes seriously what the
						gods made for fun.” – Alan Watts
					</li>
				</ul>
			</section>

			<section>
				<h2>Some of My Favorite Articles</h2>
				<ul>
					<li>
						<a
							href="https://czep.net/weblog/52cards.html"
							target="_blank"
							rel=""
							className="link"
						>
							You&apos;ll never look at a deck of cards the same
							way again
						</a>
					</li>
					<li>
						<a
							className="link"
							href="https://skepdic.com/lawofnumbers.html"
							target="_blank"
							rel="noreferrer"
						>
							Probability is fun
						</a>
					</li>
					<li>
						<a
							className="link"
							href="https://github.com/theletterf/english-lang"
							target="_blank"
							rel="noreferrer"
						>
							English
						</a>
					</li>
					<li>
						<a
							className="link"
							href="https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow"
							target="_blank"
							rel="noreferrer"
						>
							Styling in React Native
						</a>
					</li>
					<li>
						<a
							className="link"
							href="https://writings.stephenwolfram.com/2023/07/generative-ai-space-and-the-mental-imagery-of-alien-minds/"
							target="_blank"
							rel="noreferrer"
						>
							AI Images and Aliens
						</a>
					</li>
				</ul>
			</section>

			<section>
				<h2>Top 3 Books</h2>
				<p>
					These are my three favorite books. They all play a
					significant role in how I view the world.{' '}
					<Link href="/posts/reading-list" className="link">
						Here&apos;s a list of of all the books I&apos;ve read
						recently.
					</Link>
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-4">
					<Image
						src={Stoic}
						alt="Power of Now, by Eckhart Tolle"
						width={200}
						height={200}
						className="m-auto mb-3 border-2 border-black rounded-sm"
					/>
					<Image
						src={PowerOfNow}
						alt="Power of Now, by Eckhart Tolle"
						width={200}
						height={200}
						className="m-auto mb-3 border-2 border-black rounded-sm"
					/>
					<Image
						src={Fountainhead}
						alt="Power of Now, by Eckhart Tolle"
						width={200}
						height={200}
						className="m-auto mb-3 border-2 border-black rounded-sm"
					/>
				</div>
			</section>

			<section>
				<h2>My Ideal Day</h2>
				<p className="pb-16">
					One of my favorite questions to ask people is what their
					ideal day would look like, from start to finish. Most days
					aren&apos;t like this, but here&apos;s my hypothetical ideal
					day. You can see some things I value: health, connecting
					with others, coding.
				</p>
				<Schedule />
			</section>

			<section>
				<h2>Two-word Q & A</h2>
				<div className="mb-6">
					<p className="text-xl font-bold">Worst fear?</p>
					<p>Living forever</p>
				</div>
				<div className="mb-6">
					<h4>Role model?</h4>
					<p>Marcus Aurelius</p>
				</div>
				<div className="mb-6">
					<h4>Pitch clock?</h4>
					<p>It&apos;s alright</p>
				</div>
				<div className="mb-6">
					<h4>Starbucks order?</h4>
					<p>Chai Latte</p>
				</div>
				<div className="mb-6">
					<h4>Favorite dessert?</h4>
					<p>Carrot cake</p>
				</div>
				<div className="mb-6">
					<h4>Who&apos;s GOAT?</h4>
					<p>Khabib Nurmogomedov</p>
				</div>
				<div className="mb-6">
					<h4>Favorite director?</h4>
					<p>Christopher Nolan</p>
				</div>
				<div className="mb-6">
					<h4 className="">Political beliefs?</h4>
					<p>It&apos;s complicated</p>
				</div>
				<div className="mb-6">
					<h4>Alternate-timeline career?</h4>
					<p>MMA Fighter</p>
				</div>
				<div className="mb-6">
					<h4>Favorite team?</h4>
					<p>Philadelphia Phillies</p>
				</div>
				<div className="mb-6">
					<h4>Skip leg-day?</h4>
					<p>Not ever.</p>
				</div>
			</section>

			<section>
				<h2>A Meme</h2>
				<Image
					src={Meme}
					alt="A JavaScript Meme"
					width={200}
					height={200}
					className="w-full xl:w-1/2 m-auto border-4 border-black"
				/>
			</section>

			<section>
				<h2>3 Things that make me feel alive</h2>
				<ol>
					<li>Walking through the city at night</li>
					<li>Coding something I&apos;m passionate about</li>
					<li>Submitting someone in Jiu Jitsu</li>
				</ol>
			</section>

			<section>
				<h2>One Last Thing</h2>
				<blockquote>
					“Never regret a day in your life. Good days give happiness,
					bad days give experience, worst days give lessons, and best
					days give memories.”
				</blockquote>
			</section>
		</div>
	)
}
