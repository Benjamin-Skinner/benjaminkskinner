import Image from 'next/image'
import image from '@/assets/happiness-wheel.png'

export default function Page() {
	return (
		<div>
			<h1>The Happiness Wheel</h1>
			<Image
				src={image}
				width={500}
				height={500}
				alt="Happiness wheel"
				className="m-auto"
			/>
			<p className="blog-text">
				This is an idea I&apos;m still working on
			</p>

			<p className="blog-text">
				The idea is to balance the different opposing aspects. Too much
				&quot;hot energy&quot;, represented by the bottom half, leads to
				anxiety, stress, and fatigue.
			</p>

			<p className="blog-text">
				The idea is to balance the different opposing aspects. Too much
				&quot;cold energy&quot;, represented by the top half, leads to
				boredom, depresssion, and apathy.
			</p>

			<p className="blog-text">
				There are three subcategories within each half: physical,
				emotional, and social.
			</p>

			{/* <p className="blog-text">
				Here&apos;s a breakdown of how I view a problem in each category
				affecting me.
			</p>

			<table className="table-auto">
				<thead>
					<th>Category</th>
					<th>Too Little</th>
					<th>Too Much</th>
				</thead>
				<tbody>
					<tr>
						<td className="font-bold">comfort</td>
						<td>anxiety</td>
						<td>lack of purpose and no growth</td>
					</tr>
				</tbody>
			</table> */}
		</div>
	)
}
