import { useParams } from 'react-router-dom'
import { useState } from 'react'
import List from '../../components/List/List'
import './Parts.scss'

const Parts = () => {
	const catId = parseInt(useParams().id)
	const [maxPrice, setMaxPrice] = useState(1000)
	const [sort, setSort] = useState(null)

	return (
		<div className="parts">
			<div className="left">
				<div className="filterItem">
					<h2>Part Categories</h2>
					<div className="inputPart">
						<input type="checkbox" name="brakes" id="brakes" value={'brakes'} />
						<label htmlFor="brakes">Brakes</label>
					</div>
					<div className="inputPart">
						<input type="checkbox" name="tires" id="tires" value={'tires'} />
						<label htmlFor="tires">Tires</label>
					</div>
					<div className="inputPart">
						<input type="checkbox" name="lights" id="lights" value={'lights'} />
						<label htmlFor="lights">Lights</label>
					</div>
				</div>
				<div className="filterItem">
					<h2>Filter by price</h2>
					<div className="inputItem">
						<span>0</span>
						<input type="range" name="price" id="price" min={0} max={1000} onChange={e => setMaxPrice(e.target.value)} />
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Sort by</h2>
					<div className="inputItem">
						<input type="radio" name="price" id="asc" value={'asc'} onChange={e => setSort(e.target.value)} />
						<label htmlFor="asc">Price (Lowest first)</label>
					</div>
					<div className="inputItem">
						<input type="radio" name="price" id="desc" value={'desc'} onChange={e => setSort(e.target.value)} />
						<label htmlFor="desc">Price (Highest first)</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img className="categoryImage" src="https://picsum.photos/1600/1067?random=3" alt="" />
				<List catId={catId} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	)
}

export default Parts
