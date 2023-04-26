import axios from 'axios'
export const makeRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'content-type': 'application/json',
		Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN
	}
})