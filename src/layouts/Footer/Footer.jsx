import React from 'react'
import { BsSend } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { PiTelegramLogo } from 'react-icons/pi'
import { RiFacebookLine, RiTwitterXLine } from 'react-icons/ri'
import { SlPhone } from 'react-icons/sl'
import { TfiEmail } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<ul className='footer__items'>
					<li className='footer__item'>
						<NavLink className='footer__title' to={'/'}>
							<img src='/images/logo.png' alt='FoodTrove' />
						</NavLink>
						<ul className='footer__links'>
							<li className='footer__link'>
								FoodTrove is the biggest market of grocery products. Get your
								daily needs from our store.
							</li>
							<li className='footer__link'>
								<CiLocationOn />
								<span>
									51 Green St.Huntington ohaio beach ontario, NY
									<br />
									11746 KY 4783, USA.
								</span>
							</li>
							<li className='footer__link'>
								<TfiEmail />
								<span>example@email.com</span>
							</li>
							<li className='footer__link'>
								<SlPhone />
								<span>+91 123 4567890</span>
							</li>
						</ul>
					</li>
					<li className='footer__item'>
						<h4 className='footer__title'>Company</h4>
						<ul className='footer__links'>
							<li className='footer__link'>About Us</li>
							<li className='footer__link'>Delivery Information</li>
							<li className='footer__link'>Privacy Policy</li>
							<li className='footer__link'>Terms & Conditions</li>
							<li className='footer__link'>contact Us</li>
							<li className='footer__link'>Support Center</li>
						</ul>
					</li>
					<li className='footer__item'>
						<h4 className='footer__title'>Category</h4>
						<ul className='footer__links'>
							<li className='footer__link'>Dairy & Bakery</li>
							<li className='footer__link'>Fruits & Vegetable</li>
							<li className='footer__link'>Snack & Spice</li>
							<li className='footer__link'>Juice & Drinks</li>
							<li className='footer__link'>Chicken & Meat</li>
							<li className='footer__link'>Fast Food</li>
						</ul>
					</li>
					<li className='footer__item'>
						<h4 className='footer__title'>Subscribe Our Newsletter</h4>
						<ul className='footer__links'>
							<form className='footer__form'>
								<input
									className='footer__input'
									type='search'
									placeholder='Искать здесь...'
								/>
								<button className='footer__btn'>
									<BsSend />
								</button>
							</form>
							<li className='footer__link'>
								<span>
									<RiFacebookLine />
								</span>
								<span>
									<RiTwitterXLine />
								</span>
								<span>
									<FaInstagram />
								</span>
								<span>
									<PiTelegramLogo />
								</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
