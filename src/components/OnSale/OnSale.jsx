import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import './OnSale.scss'

const OnSale = ({ type }) => {
	const { data, loading, error } = useFetch(`/autoparts?populate=*&[filters][type][$eq]=${type}`)

	return (
		<div className="discount">
			<div className="top">
				<h1>{type}</h1>
				<p>
					Fromage bavarian bergkase camembert de normandie. Blue castello fromage frais feta pepper jack goat camembert de normandie danish fontina when the cheese comes out everybody's
					happy. Fromage say cheese red leicester camembert de normandie parmesan rubber cheese ricotta st. agur blue cheese. Cauliflower cheese stilton cut the cheese.
				</p>
			</div>
			<div className="bottom">{error ? 'Oops!' : loading ? 'Loading...' : data.map(item => <Card item={item} key={item.id} />)}</div>
		</div>
	)
}

export default OnSale
