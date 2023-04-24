import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const Cart = () => {
	const data = [
		{
			id: 1,
			img1: 'https://picsum.photos/1600?random=1',
			img2: 'https://picsum.photos/1600?random=2',
			title: 'Motor Oil',
			isNew: true,
			oldPrice: 50,
			newPrice: 25,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nam dignissimos, veritatis a unde necessitatibus, consectetur dolorem nulla accusantium doloremque itaque aliquid id. Fugiat excepturi optio hic asperiores, rem reiciendis.'
		},
		{
			id: 2,
			img1: 'https://picsum.photos/1600?random=3',
			img2: 'https://picsum.photos/1600?random=4',
			title: 'Spark Plugs',
			isNew: false,
			oldPrice: 37,
			newPrice: 32,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, et? Sunt distinctio voluptate facilis tempore cumque dolores, nostrum est architecto nisi mollitia id sequi officia, voluptatem accusamus nesciunt similique dolorem?'
		}
	]
	return (
		<div className="cart">
			<h1>Parts in your cart</h1>
			{data.map(item => (
				<div className="item" key={item.id}>
					<img src={item.img1} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.description.substring(0, 100)}</p>
						<div className="price">{item.newPrice}</div>
					</div>
					<DeleteOutlinedIcon className="delete" />
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>$59.99</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className="reset">Reset Cart</span>
		</div>
	)
}

export default Cart
