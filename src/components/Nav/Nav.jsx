import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
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
							Motor Oil
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
						<div className="cartCounter">
							<ShoppingCartOutlinedIcon />
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nav
