import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
	return (
		<div className="card">
			<Link to={`/projd/${item.id}`}>
				<div className="card">Card</div>
			</Link>
		</div>
	)
}

export default Card
