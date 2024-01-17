import Header from '../assets/header.jpeg'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Header} alt="logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar