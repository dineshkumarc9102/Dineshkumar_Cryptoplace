import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow-up.svg'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value){
      case 'inr':{
        setCurrency({name: 'inr', symbol: '₹'})
        break;
      }

      case 'usd':{
        setCurrency({name: 'usd', symbol: '$'})
        break;
      }

      case 'eur':{
        setCurrency({name: 'eur', symbol: '€'})
        break;
      }

      default: {
        setCurrency({name: 'inr', symbol: '₹'})
        break;
      }
    }
  }


  return (
    <div className='navbar'>
        <Link to={'/'}><img src={logo} alt="" className='logo' /></Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className="nav-right">
            <select onChange={currencyHandler}> 
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
            </select>
            <button>Sign Up <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar
