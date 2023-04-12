import {
	createBrowserRouter,
	RouterProvider,
	Outlet
} from "react-router-dom"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//import Typography from '@mui/material/Typography';
import "./App.scss"
import Home from "./pages/Home/Home"
import Parts from "./pages/Parts/Parts"
import Part from "./pages/Part/Part"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

const Layout = () => {
	return (
		<div className="app">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/parts/:id",
				element: <Parts />,
			},
			{
				path: "/part/:id",
				element: <Part />,
			},
		]
	}
])

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
