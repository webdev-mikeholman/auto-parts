import Card from '../Card/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './OnSale.scss'
const OnSale = ({ type }) => {
	// const data = [
	// 	{
	// 		id: 1,
	// 		img1: 'https://picsum.photos/1600?random=1',
	// 		img2: 'https://picsum.photos/1600?random=2',
	// 		title: 'Motor Oil',
	// 		isNew: true,
	// 		oldPrice: 50,
	// 		newPrice: 25
	// 	},
	// 	{
	// 		id: 2,
	// 		img1: 'https://picsum.photos/1600?random=3',
	// 		img2: 'https://picsum.photos/1600?random=4',
	// 		title: 'Spark Plugs',
	// 		isNew: false,
	// 		oldPrice: 37,
	// 		newPrice: 32
	// 	},
	// 	{
	// 		id: 3,
	// 		img1: 'https://picsum.photos/1600?random=5',
	// 		img2: 'https://picsum.photos/1600?random=6',
	// 		title: 'Wiper Blades',
	// 		isNew: false,
	// 		oldPrice: 22,
	// 		newPrice: 19
	// 	},
	// 	{
	// 		id: 4,
	// 		img1: 'https://picsum.photos/1600?random=7',
	// 		img2: 'https://picsum.photos/1600?random=8',
	// 		title: 'Brake Pads',
	// 		isNew: true,
	// 		oldPrice: 75,
	// 		newPrice: 73
	// 	}
	// ]

	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(process.env.REACT_APP_API_URL + '/autoparts?populate=*', { headers: { Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN } })
				console.log(res.data.data)
				setData(res.data.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchData()
	}, [])

	return (
		<div className="discount">
			<div className="top">
				<h1>{type}</h1>
				<p>
					Fromage bavarian bergkase camembert de normandie. Blue castello fromage frais feta pepper jack goat camembert de normandie danish fontina when the cheese comes out everybody's
					happy. Fromage say cheese red leicester camembert de normandie parmesan rubber cheese ricotta st. agur blue cheese. Cauliflower cheese stilton cut the cheese.
				</p>
			</div>
			<div className="bottom">
				{data.map(item => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default OnSale
