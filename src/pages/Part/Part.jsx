import { useState } from 'react'
import './Part.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

const Part = () => {
	const [selectedImage, setSelectedImage] = useState(0)
	const [quantity, setQuantity] = useState(1)
	const images = ['https://picsum.photos/1600/1067?random=1', 'https://picsum.photos/1600/1067?random=2']
	return (
		<div className="part">
			<div className="left">
				<div className="images">
					<img src={images[0]} alt="" onClick={e => setSelectedImage(0)} />
					<img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
				</div>
				<div className="mainImage">
					<img src={images[selectedImage]} alt="" />
				</div>
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className="price">$99</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita blanditiis aliquid dolorum laborum incidunt dignissimos architecto eveniet quaerat provident delectus nemo facere
					vitae, enim veritatis. Ab voluptas qui obcaecati? Aliquam!
				</p>
				<div className="quantity">
					<button onClick={() => (quantity > 1 ? setQuantity(prev => prev - 1) : 0)}>-</button>
					{quantity}
					<button onClick={() => setQuantity(prev => prev + 1)}>+</button>
				</div>
				<button className="add">
					<AddShoppingCartIcon /> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon /> ADD TO WISH LIST
					</div>
					<div className="item">
						<BalanceIcon /> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor: Blah</span>
					<span>Part Type: Blah</span>
					<span>Tag: Blah</span>
				</div>
				<hr />
				<div className="info">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	)
}

export default Part
