import React from 'react'
import "./header.css"
import {Props} from '../../App'
function Header(props: Props) {
  return (
    <div className='header__wrapper'>
    <div className='header__item'><div className='header__item-top'>USD</div><div className='header__item-bottom'>1 USD = {props.store.getCurrency("USD")} UAH</div></div>
    <div className='header__item'><div className='header__item-top'>EUR</div><div className='header__item-bottom'>1 EUR = {props.store.getCurrency("EUR")} EUR</div></div>
    </div>
  )
}

export default Header