import React from 'react'
import logo from '../assets/basil_logo.png'
import instagram from '../assets/instagram.png'
import {Link, NavLink} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'

const navigation = [
    {name: 'About', path: '/about'},
    {name: 'Shop', path: '/shop'},
    {name: 'Visuals', path: '/visuals'},
    {name: 'Frequencies', path: '/frequencies'},
]

const Navbar = () => {
  return (
    <div className="section flex justify-between items-center">
        <Link to="/home"><img src={logo} alt="Basil Tweedy logo" /></Link>
        <div className="hidden md:flex gap-x-5 items-center">
            {navigation.map((item) => (
                <NavLink to={item.path} key={item.name} className={({isActive}) => {return (isActive && "border border-black p-1")}}>{item.name}</NavLink>
            ))}
        </div>
        <img src={instagram} alt="Instagram logo" className="hidden md:block"/>
        <AiOutlineMenu className="md:hidden cursor-pointer" size={27}/>
    </div>
  )
}

export default Navbar