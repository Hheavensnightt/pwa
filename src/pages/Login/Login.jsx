import React from 'react'
import '../../css/reset.css'
import '../Login/login.css'
import Ctivo from '../../logo.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="main-page">
            <div className="main-container">
                <picture className="logo-container">
                    <img src={Ctivo} className="logo" alt="logo"/>
                </picture>
                
                <h1>CONSTRUTIVO</h1>
                <input
                    type="text"
                    className="ambient"
                    placeholder="Choose Your Workspace"
                />
                <input
                    type="text"
                    className="login"
                    placeholder="Insert Your User ID"
                />
                <input
                    type="password"
                    className="password"
                    placeholder="Insert Your Password"
                />
                <h3>Esqueci Minha Senha</h3>
                <Link to="/formularios"><p className="acessarForms">Acessar Formulários</p></Link>
                <p>Politica de Privacidade</p>
            </div>
        </div>
        
    )
}

export default Login
