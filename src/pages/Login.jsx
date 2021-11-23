import style from '../styles/Login.module.scss'
import { Buy } from '../components/Button'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Login() {

  const [account, setAccount] = useState({})
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('Account')) {
      setAccount(JSON.parse(localStorage.getItem('Account')))
    }
  }, [])

  function handleEmail(ev) {
    setEmail(ev.target.value)
  }
  function handleSenha(ev) {
    setSenha(ev.target.value)
  }
  return (

    <div className={style.container}>
      <div className={style.ImgContainer}>
        <h1>Entrar na Conta</h1>
        <img src="/others/login.svg" alt="Contato" />
      </div>
      <div className={style.Form}>
        <h1>Bem vindo de volta</h1>
        <form action="">
          <input type="text" placeholder="E-mail" className={style.inputEmail} onChange={handleEmail} />
          <input type="text" placeholder="Senha" className={style.inputSenha} onChange={handleSenha} />
          <Link to="/minha-conta">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
              }}

              onClick={() => {
                if (account.senha === senha && account.email === email) {
                  localStorage.setItem('Token', true)

                } else {
                  alert('Senha ou Email errados')
                }
              }}

            >
              Entrar
            </motion.button>
          </Link>

          <span>não tem conta? Então se <Link to="/minha-conta">Cadastre</Link>.</span>
        </form>

      </div>
    </div>
  )
}