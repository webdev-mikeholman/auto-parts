import OnSale from '../../components/OnSale/OnSale'
import Slider from '../../components/Slider/Slider'
import './Home.scss'

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<OnSale type="Sales" />
			<OnSale type="Promotions" />
		</div>
	)
}

export default Home
