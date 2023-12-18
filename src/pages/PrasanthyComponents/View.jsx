import React , {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeaderView from './HeaderView';
import Props from './Props';
import Cart from './Cart';
import "./styleView.css"



const View = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	
	<React.Fragment>
    <Navbar />
		<HeaderView size={cart.length} setShow={setShow} />

		{
			show ? <Props className="props" handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}

		{
			warning && <div className='warning'>Property is already added to your Booked View</div>
		}
		<Footer/>
	</React.Fragment>
	
  )
}

export default View