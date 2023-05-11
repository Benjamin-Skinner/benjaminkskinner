import React from 'react'

const Schedule: React.FC = () => {    

    return (
        <table className="table-auto border-spacing-0.5 border-separate border border-slate-400 w-full">
            <thead>
                <tr>
                <th>Time</th>
                <th>Activity</th>
                <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>7 – 7:45 am</td>
                <td>Workout</td>
                <td>Lifting, sprints</td>
                </tr>
                <tr>
                <td>7:45 – 8</td>
                <td>Yoga + meditate</td>
                <td>My mom taught me to love morning yoga as a
                    tool to improve physical and mental health.
                </td>
                </tr>
                <tr>
                    <td>8 – 8:30</td>
                <td>Breakfast</td>
                <td>Egg, avocado, oatmeal, banana, coffee</td>
                </tr>
                <tr>
                    <td>9 am – 1 pm</td>
                    <td>Code</td>
                    <td>I want to build something cool with code</td>
                </tr>
                <tr>
                    <td>1 – 2</td>
                    <td>Lunch</td>
                    <td>Meet a friend for lunch at a chic salad restaurant or a café</td>
                </tr>
                <tr>
                    <td>2 – 6</td>
                    <td>Work more</td>
                    <td>Hopefully more coding (and I&apos;ll be watching baseball in the background)</td>
                </tr>
                <tr>
                    <td>6 – 7:30</td>
                    <td>Jiu Jitsu training</td>
                    <td>Maybe throw in some Muay Thai too</td>
                </tr>
                <tr>
                    <td>7:30 – 9</td>
                    <td>Dinner</td>
                    <td>Cook a nice, healthy dinner, and eat with someone
                        I care about. Have some interesting conversation and finish
                        with a chai tea.
                    </td>
                </tr>
                <tr>
                    <td>9 – 10</td>
                    <td>Learn</td>
                    <td>I like to schedule time to learn new skills,
                        whether its machine learning, Italian,
                        or piano.
                    </td>
                </tr>
                <tr>
                    <td>10 – 10:20</td>
                    <td>Reflect</td>
                    <td>I love the Stoic practice of daily reflection
                        journaling to figure out how I can be 
                        better the next day.
                    </td>
                </tr>
                <tr>
                    <td>10:20 – 11</td>
                    <td>Read, hang out</td>
                    <td>Find a good book, talk to someone, or
                        watch baseball highlights.
                    </td>
                </tr>
                <tr>
                    <td>11 pm</td>
                    <td>Sleep</td>
                    <td>I sleep early. I feel weak, depressed, and 
                        boring when I&apos;m sleep deprived, so I make it
                        a priority to get enough sleep.
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Schedule