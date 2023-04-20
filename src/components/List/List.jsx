import Card from '../Card/Card'
import './List.scss'

const List = () => {
	const data = [
		{
			id: 1,
			img1: 'https://picsum.photos/1600?random=1',
			img2: 'https://picsum.photos/1600?random=2',
			title: 'Motor Oil',
			isNew: true,
			oldPrice: 50,
			newPrice: 25
		},
		{
			id: 2,
			img1: 'https://picsum.photos/1600?random=3',
			img2: 'https://picsum.photos/1600?random=4',
			title: 'Spark Plugs',
			isNew: false,
			oldPrice: 37,
			newPrice: 32
		},
		{
			id: 3,
			img1: 'https://picsum.photos/1600?random=5',
			img2: 'https://picsum.photos/1600?random=6',
			title: 'Wiper Blades',
			isNew: false,
			oldPrice: 22,
			newPrice: 19
		},
		{
			id: 4,
			img1: 'https://picsum.photos/1600?random=7',
			img2: 'https://picsum.photos/1600?random=8',
			title: 'Brake Pads',
			isNew: true,
			oldPrice: 75,
			newPrice: 73
		}
	]
	return (
		<div className="list">
			{data?.map(item => (
				<Card item={item} key={item.id} />
			))}
		</div>
	)
}

export default List
