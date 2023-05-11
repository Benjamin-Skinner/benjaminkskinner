import React from 'react'
import Image from 'next/image'

import GrapeVine from '@assets/my-life/grapevine.png'
import JumboVentures from '@assets/my-life/jv.png'
import DHS from '@assets/my-life/dhs.png'
import Tufts from '@assets/my-life/tufts.png'

const Life: React.FC = () => {
    return (
        <div>
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
                    <p>
                        In June of 2021, I co-founded a startup to help people organize events with their friends more easily.
                        We built a web app which had over 60,000 pageviews and a mobile app for iOS. We ended the project in 
                        March of 2023. To see my full reflection and learnings, <a className="link" href="/posts/grapevine-reflection">check out this article I wrote</a>.
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
                    <h3>Jumbo Ventures</h3>
                    <p>
                        I&apos;m the co-founder of Jumbo Ventures, the student-run startup incubator at Tufts University. Every week, we 
                        get an alum to come speak to our cohort about various apsects of the entrepreneurial process. <a className="link" href="https://jumboventures.org">Interested?</a>
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
                    <p>
                        I am a current member of the undergraduate class of 2024 at Tufts University majoring in computer 
                        science and minoring in economics. Last fall I studied abroad in Paris.
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
                    <p>
                        At DHS, I participated in my school’s Student Government, Speech and Debate, Quiz Bowl, 
                        and Model United Nations clubs, which taught me as much as my classes.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Life