import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Nav.scss'
import Cart from '../Cart/Cart'

const Nav = () => {
	const [openCart, setOpenCart] = useState(false)
	const parts = useSelector(state => state.cart.parts)
	return (
		<div className="nav">
			<div className="wrapper">
				<div className="left">
					<div className="item">
						<img src="/assets/images/en.png" alt="Small flag half US and half British" className="flagImage" />
						<KeyboardArrowDownIcon />
					</div>
					<div className="item">
						<span>USD</span>
						<KeyboardArrowDownIcon />
					</div>
					<div className="item">
						<Link className="link" to="/parts/1">
							Brakes
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/parts/2">
							Fluids
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/parts/3">
							Batteries
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/parts/4">
							Wiper Blades
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/parts/5">
							Tires
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/parts/6">
							Lights
						</Link>
					</div>
				</div>
				<div className="center">
					<Link className="link" to="/">
						Mike's Auto Parts
					</Link>
				</div>
				<div className="right">
					<div className="item">
						<Link className="link" to="/">
							Homepage
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							About
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Contact
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Locations
						</Link>
					</div>
					<div className="icons">
						<SearchIcon />
						<PersonOutlineIcon />
						<FavoriteBorderIcon />
						<div className="cartCounter" onClick={() => setOpenCart(!openCart)}>
							<ShoppingCartOutlinedIcon />
							<span>{parts.length}</span>
						</div>
					</div>
				</div>
			</div>
			{openCart && <Cart />}
		</div>
	)
}

export default Nav
