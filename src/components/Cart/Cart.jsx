import { useSelector } from 'react-redux'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { loadStripe } from '@stripe/stripe-js'
import { makeRequest } from '../../makeRequest'

const Cart = () => {
	const parts = useSelector(state => state.cart.parts)
	const dispatch = useDispatch()

	const totalPrice = () => {
		let total = 0
		parts.forEach(part => (total += part.newPrice * part.quantity))
		return total.toFixed(2)
	}

	const handleCheckout = async () => {
		try {
			const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
			const stripe = await stripePromise
			const res = await makeRequest.post('/orders', {
				parts
			})
			dispatch(resetCart())
			await stripe.redirectToCheckout({
				sessionId: res.data.stripeSession.id
			})
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="cart">
			<h1>Parts in your cart</h1>
			{parts.map(item => (
				<div className="item" key={item.id}>
					<img src={process.env.REACT_APP_IMAGE_URL + item.image1} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.description.substring(0, 100)}</p>
						<div className="price">
							{item.quantity} x {item.newPrice}
						</div>
					</div>
					<DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>${totalPrice()}</span>
			</div>
			<button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
			<span className="reset" onClick={() => dispatch(resetCart())}>
				Reset Cart
			</span>
		</div>
	)
}

export default Cart
