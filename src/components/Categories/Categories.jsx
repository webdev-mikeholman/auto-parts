import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img src="https://picsum.photos/1600?random=1" alt="" />
					<button>
						<Link className="link" to="/parts/1">
							Brakes
						</Link>
					</button>
				</div>
				<div className="row">
					<img src="https://picsum.photos/1600?random=2" alt="" />
					<button>
						<Link className="link" to="/parts/1">
							Fluids
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img src="https://picsum.photos/1600?random=3" alt="" />
					<button>
						<Link className="link" to="/parts/1">
							Batteries
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-lg">
				<div className="row">
					<div className="col">
						<div className="row">
							<img src="https://picsum.photos/1600?random=4" alt="" />
							<button>
								<Link className="link" to="/parts/1">
									Wiper Blades
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img src="https://picsum.photos/1600?random=5" alt="" />
							<button>
								<Link className="link" to="/parts/1">
									Tires
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img src="https://picsum.photos/1600?random=6" alt="" />
					<button>
						<Link className="link" to="/parts/1">
							Lights
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Categories
