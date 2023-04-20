import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import OnSale from '../../components/OnSale/OnSale'
import Slider from '../../components/Slider/Slider'
import './Home.scss'

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<OnSale type="Sales" />
			<Categories />
			<OnSale type="Promotions" />
			<Contact />
		</div>
	)
}

export default Home
