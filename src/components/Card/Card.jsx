import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
	{
		console.log(item)
	}
	return (
		<Link className="link" to={`/part/${item.id}`}>
			<div className="card">
				{item?.attributes.isNew && <span>New Part</span>}
				<div className="image">
					<img src={process.env.REACT_APP_IMAGE_URL + item.attributes?.image1.data.attributes.url} alt={item?.attributes.image1.data.attributes.alternativeText} className="mainImage" />
					<img src={process.env.REACT_APP_IMAGE_URL + item.attributes?.image2.data.attributes.url} alt={item?.attributes.image2.data.attributes.alternativeText} className="secondImage" />
				</div>
				<h2>{item?.attributes.title}</h2>
				<div className="prices">
					{item.attributes.oldPrice && <h3 className="oldPrice">${item?.attributes.oldPrice}</h3>}
					<h3>${item?.attributes.newPrice}</h3>
				</div>
			</div>
		</Link>
	)
}

export default Card
