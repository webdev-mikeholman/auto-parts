import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
	return (
		<Link className="link" to={`/part/${item.id}`}>
			<div className="card">
				{item.isNew && <span>New Part</span>}
				<div className="image">
					<img src={item.img1} alt="" className="mainImage" />
					<img src={item.img2} alt="" className="secondImage" />
				</div>
				<h2>{item.title}</h2>
				<div className="prices">
					<h3>${item.oldPrice}</h3>
					<h3>${item.newPrice}</h3>
				</div>
			</div>
		</Link>
	)
}

export default Card
