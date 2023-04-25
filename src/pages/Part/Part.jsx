import { useState } from 'react'
import './Part.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Part = () => {
	const id = useParams().id
	const [selectedImage, setSelectedImage] = useState('image1')
	const [quantity, setQuantity] = useState(1)
	const { data, loading, error } = useFetch(`/autoparts/${id}?populate=*`)

	return (
		<div className="part">
			{error ? (
				'Oops!'
			) : loading ? (
				'Loading...'
			) : (
				<>
					<div className="left">
						<div className="images">
							<img src={process.env.REACT_APP_IMAGE_URL + data?.attributes?.image1.data.attributes.url} alt="" onClick={e => setSelectedImage('image1')} />
							<img src={process.env.REACT_APP_IMAGE_URL + data?.attributes?.image2.data.attributes.url} alt="" onClick={e => setSelectedImage('image2')} />
						</div>
						<div className="mainImage">
							<img src={process.env.REACT_APP_IMAGE_URL + data?.attributes[selectedImage]?.data.attributes.url} alt="" />
						</div>
					</div>
					<div className="right">
						<h1>{data?.attributes?.title}</h1>
						<span className="price">${data?.attributes?.newPrice}</span>
						<p>{data?.attributes?.description}</p>
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
					</div>{' '}
				</>
			)}
		</div>
	)
}

export default Part
