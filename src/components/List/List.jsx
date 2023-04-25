import Card from '../Card/Card'
import './List.scss'
import useFetch from '../../hooks/useFetch'

const List = ({ subCats, maxPrice, sort, catId }) => {
	const { data, loading, error } = useFetch(
		`/autoparts?populate=*&[filters][categories][id]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][newPrice][$lte]=${maxPrice}&sort=newPrice:${sort}`
	)
	return <div className="list">{error ? 'Oops!' : loading ? 'Loading...' : data?.map(item => <Card item={item} key={item.id} />)}</div>
}

export default List
