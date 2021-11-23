import style from '../styles/MinhaConta.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { Profile } from '../components/Profile'
export function MinhaConta() {

  const [account, setAccount] = useState({})
  const [hasAccount, setHasAccount] = useState(false)
  const [name, setName] = useState(null)
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [celular, setCelular] = useState(null)


  useEffect(() => {
    if (localStorage.getItem('Account') && localStorage.getItem('Token') == "true") {
      console.log(localStorage.getItem('Token'));
      setHasAccount(true)
      setAccount(JSON.parse(localStorage.getItem('Account')))
    } else {
      setHasAccount(false)
    }
  }, [])

  function createAccount() {
    let account = {
      name: name,
      user: user,
      email: email,
      senha: senha,
      celular: celular
    }

    let newAccount = JSON.stringify(account)
    localStorage.setItem('Account', newAccount)
    localStorage.setItem('Token', true)
    window.location.reload()
  }

  function handleName(ev) {
    setName(ev.target.value)
    console.log(name);
  }
  function handleUser(ev) {
    setUser(ev.target.value)
  }
  function handleEmail(ev) {
    setEmail(ev.target.value)
  }
  function handleSenha(ev) {
    setSenha(ev.target.value)
  }
  function handleCelular(ev) {
    setCelular(ev.target.value)
  }

  return (
    <>
      {!hasAccount ? (
        <div className={style.container}>
          <div className={style.ImgContainer}>
            <h1>Criar Conta</h1>
            <img src="/others/criar-conta.svg" alt="Contato" />
          </div>
          <div className={style.Form}>
            <form action="">
              <input type="text" placeholder="User" className={style.inputUser} onChange={handleUser} />
              <input type="text" placeholder="Nome Completo" className={style.inputName} onChange={handleName} />
              <input type="text" placeholder="E-mail" className={style.inputEmail} onChange={handleEmail} />
              <input type="text" placeholder="Celular" className={style.inputCelular} onChange={handleCelular} />
              <input type="text" placeholder="Senha" className={style.inputCelular} onChange={handleSenha} />
              
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.95,
                  }}

                  onClick={() => {
                    createAccount()
                  }}

                >
                  Criar
                </motion.button>
              

              <span>ja tem uma conta? Então faça seu <Link to="/login">login</Link></span>
            </form>

          </div>
        </div>
      ) : (
        <Profile />
      )}

    </>

  )
}