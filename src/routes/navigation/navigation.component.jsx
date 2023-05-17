import { Fragment, useState } from "react"
import { Outlet, Link } from "react-router-dom"

import {ReactComponent as Logo} from '../../assets/logos/logo.svg'

import './navigation.styles.scss'
import './burger-menu.styles.scss'

const Navigation = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    
    const toggle_hide = () => {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
        setIsMenuClicked(!isMenuClicked)
    }

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            toggle_hide()
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 600 ) {
    return (
        <Fragment>
            <div style={{width:'100%', height:'9vh'}}>
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </nav>

                <div className={menu_class}>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/aboutus'>
                            About us
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/coming-soon'>
                            Coming Soon
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/contact'>
                            Contact
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/signin'>
                            Sign In
                        </Link>
                </div>
            <Outlet/>
            </div>
        </Fragment>
    )
    }
    else{
        return(
          <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/aboutus'>
                        About us
                    </Link>
                    <Link className="nav-link" to='/coming-soon'>
                        Coming Soon
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                    <Link className="nav-link" to='/signin'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
          </Fragment>
        )  
}
    }
    
  

export default Navigation