import React from 'react'
import './css.css'
import Logo from '../../assets/uni logo.png'

const Header = () =>{
    return(
        <div className="bgColorSet w-100 d-flex justify-content-start align-items-center text-light header-height">
            <div className="d-flex align-items-center">
                <div className="ml-5 d-flex align-items-center">
                    <div className="h4">Lincoln Library</div>
                </div>
                <div>
                    <img src={Logo} className="logo-height ml-5"/>
                </div>
            </div>
        </div>
    )
}

export default Header