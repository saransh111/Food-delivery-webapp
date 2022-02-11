import {useEffect} from 'react'
import './homepage.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Beecchwala from './Beecchwala';
import Footer from './Footer';
import Header from './Header';
import Header2 from './Header2';
import Testimonials from './Testimonials';
import {useHistory} from 'react-router-dom';
function Homepage() {
	let history =useHistory();
	useEffect(() => {
		const userInfo =localStorage.getItem("userInfo");
		if(userInfo){
			history.push('/');
		}
	}, [history])
	return (
		<>
		    <Header/>
		    <Header2/>
			<Beecchwala/>
			<Footer/>	
		</>
	)
}

export default Homepage;