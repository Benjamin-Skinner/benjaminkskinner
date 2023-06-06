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
                Hi, I&apos;m Ben Skinner, and I love to build things with code!
                My greatest interest is finding ways to make myself a better person, 
                primarily through the use of meditation and philosophy.
            </blockquote>
        </section>
        <div className="w-full flex justify-center">
            <Image
                src={Headshot}
                alt="Picture of the author"
                width={500}
                height={500}
                className='rounded-full h-[500px] w-[500px] object-cover margin-auto mt-16'
            />
        </div>
        <section>
            <h2>What I&apos;ve done so far</h2>
            <p>
                Here&apos;s a brief rundown of some of the things I&apos;m most proud of. If you
                want to see me brag about my skills and accomplishments, check out 
                my <a href="https://www.linkedin.com/in/ben-skinner-profile/" className='link'>LinkedIn</a>
            </p>
            <Life />
        </section>

        <section>
            <h2>My Life Principles</h2>
            <p>
                I believe that it is critical to have a well-defined set of values and to live based
                on those values. My brain works by defining my values in terms of a few key
                words, and then defining those words in detail. The main influences on my values 
                are Stoicism, Buddhism, Objectivism, and Non-violent communication (NVC). Here is a brief description of how
                I try to live my life:
            </p>
            <br />
            <ol>
                <li>Authenticity: Don’t let society or others tell you what to think, do, or feel. You are your primary concern, so take responsibility for your life. Above all, always be authentic. Never be fake or trade an ounce of your soul for anything.</li>
                <li>Compassion: Remember that everyone on the planet is suffering in their own way. Be understanding and compassionate.</li>
                <li>Experience: Have a good time. Live in the present moment, remembering that every day or moment could be your last.</li>
                <li>Competence: Always do the best you can in whatever you&apos;re doing. Whether as a student, as a friend, or as a business partner, be clear on what your responsibilities are and make sure to live up to them.</li>
                <li>Courage: Have courage. Be willing to suffer and make sacrifices to be the person you want to be.</li>
            </ol>
        </section>

        <section>
            <h2>10 Random Things</h2>
            <ul>
                <li>
                    Everybody has the same 24 hours in a day: If Michelangelo could paint the Sistine Chapel, Thomas Edison could patent over 1,000 inventions, and Alexander the Great could conquer 2 million square miles, just think what you could accomplish.
                </li>
                <li>
                    A rich person is nothing but a poor person with money
                </li>
                <li>
                    When you think of something funny today, know that it was me telepathically telling you a joke. You&apos;re welcome.
                </li>
                <li>
                    This, too, shall pass
                </li>
                <li>
                    “You have enemies? Good. That means you&apos;ve stood up for something, sometime in your life.” – Winston Churchill
                </li>
                <li>
                    If you think about it, every time you paint a room it gets a little smaller.
                </li>
                <li>
                    In a random selection of twenty-three persons there is a 50 percent chance that at least two of them celebrate the same birthdate. <a className='link' href="https://skepdic.com/lawofnumbers.html" target='_blank' rel="noreferrer">Probability is fun</a>.
                </li>
                <li>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' rel="noreferrer" target='_blank' className='link'>Here&apos;s the meaning of life</a>
                </li>
                <li>
                    Et in Arcadia ego
                </li>
                <li>
                    Read <a href="https://czep.net/weblog/52cards.html" target="_blank" rel="" className="link">this article </a>and you&apos;ll never look at a deck of cards the same way again.
                </li>
                <li>
                    “Man suffers only because he takes seriously what the gods made for fun.” – Alan Watts
                </li>
            </ul>
        </section>

        <section>
            <h2>Top 3 Books</h2>
            <p>
                Here are three of my favorite books. They all play a significant
                role in how I view the world. <Link href="/posts/reading-list" className="link">Here&apos;s a list of of all the books 
                I&apos;ve read recently.</Link>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-4">
                <Image
                    src={Stoic}
                    alt="Power of Now, by Eckhart Tolle"
                    width={200}
                    height={200}
                    className="m-auto pb-3"
                />
                <Image
                    src={PowerOfNow}
                    alt="Power of Now, by Eckhart Tolle"
                    width={200}
                    height={200}
                    className="m-auto pb-3"
                />
                <Image
                    src={Fountainhead}
                    alt="Power of Now, by Eckhart Tolle"
                    width={200}
                    height={200}
                    className="m-auto pb-3"
                />
            </div>
        </section>

        <section>
            <h2>My Ideal Day</h2>
            <p className="pb-16">
                One of my favorite questions to ask people is what their ideal day would look like,
                from start to finish. Most days aren&apos;t like this, but here&apos;s my hypothetical ideal day.
                You can see some things I value: health, connecting with others, coding.
            </p>
            <Schedule />
        </section>

        <section>
            <h2>Two-word Q & A</h2>
            <div className="mb-6">
                <p className='font-bold'>Worst fear?</p>
                <p>Living forever</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Role model?</p>
                <p>Marcus Aurelius</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Pitch clock?</p>
                <p>It&apos;s alright</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Starbucks order?</p>
                <p>Chai Latte</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Favorite dessert?</p>
                <p>Carrot cake</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Who&apos;s GOAT?</p>
                <p>Khabib Nurmogomedov</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Favorite director?</p>
                <p>Christopher Nolan</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Political beliefs?</p>
                <p>It&apos;s complicated</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Alternate-timeline career?</p>
                <p>MMA Fighter</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Favorite team?</p>
                <p>Philadelphia Phillies</p>
            </div>
            <div className="mb-6">
                <p className='font-bold'>Skip leg-day?</p>
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
                className='w-full xl:w-1/2 m-auto border-4 border-black'
            />
        </section>

        <section>
            <h2>3 Things that make me feel alive</h2>
            <ol>
                <li>Walking through the city at night</li>
                <li>Coding something I&apos;m passionate about</li>
                <li>Submitting someone in a Jiu Jitsu match</li>
            </ol>
        </section>

        <section>
            <h2>One Last Thing</h2>
            <blockquote>
                “Never regret a day in your life. Good days give happiness, bad days give experience, worst days give lessons, and best days give memories.”
            </blockquote>
            
        </section>
    </div>
  )
}
