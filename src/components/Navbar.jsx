import style from '../styles/Navbar.scss'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
export function Navbar() {
  const [scrollY, setScrollY] = useState(0)

  const [isOpenMenu, setIsOpenMenu] = useState("")
  const [active, setActive] = useState(false)

  function toggleMenu() {
    setActive(!active)

    if (active == true) {
      setIsOpenMenu('open')
    } else {
      setIsOpenMenu('closed')
    }

  }
  const animation = useAnimation()
  useEffect(() => {
    function handleScroll() {
      setScrollY(this.scrollY)

      if (window.scrollY >= 10) {
        animation.start({
          background: '#1C202A',
          transition: { duration: 0.5, type: "spring" },
        })
      } else {
        animation.start({
          background: 'none',
        });
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])


  return (
    <motion.header

      animate={animation}
    >
      <nav className="desktopNavbar">
        <Link to="/" className="logoSide">

          <img src="/logo.svg" alt="Unicorn Scotlands" />
        </Link>
        <ul className="ourSide">
          <li><Link to='/'>Home</Link>  </li>
          <li> <Link to='/produtos'>Produtos</Link></li>
          <li><Link to='/nossa-arte'>Nossa Arte</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
        </ul>
        <ul className="clientSide">
          <li><Link to='/minha-conta'>Minha conta</Link></li>

        </ul>


      </nav>
      <nav className="mobileNavbar">
        <Link to="/" className="logoSide">
          <img src="/logo.svg" alt="Unicorn Scotlands" />
        </Link>
        <span onClick={() => {
          toggleMenu()
        }}></span>
        <motion.div

          className={isOpenMenu == "open" ? "lists open" : "lists closed"}>

          <ul className={isOpenMenu == "open" ? "ourSide open" : "ourSide"}>
            <li><Link to='/'>Home</Link>  </li>
            <li> <Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/nossa-arte'>Nossa Arte</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
          </ul>
          <ul className={isOpenMenu == "open" ? "clientSide open" : "clientSide"}>
            <li><Link to='/minha-conta'>Minha conta</Link></li>
          </ul>
          
        </motion.div>


        <Link to="/carrinho">
            <img src="/bag.svg" alt="Sacola de produtos" className="bagShop" />

          </Link>
      </nav>

    </motion.header>


  )
}