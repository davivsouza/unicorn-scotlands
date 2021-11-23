import style from '../styles/Profile.module.scss'
import { motion } from 'framer-motion'
import { useState,  useEffect } from 'react'
import {Link} from 'react-router-dom'
export function Profile() {
  const [account, setAccount] = useState({})

  useEffect(() => {
    if (localStorage.getItem('Account')) {
      setAccount(JSON.parse(localStorage.getItem('Account')))
    } 
  }, [])
  return (
    <>
      <div className={style.container}>
        <div className={style.profileContent}>
          <aside>
            <h1>Confingurações</h1>
            <strong>Minha Conta</strong>
            <strong>Notificações</strong>
            <strong>Privacidade</strong>
            <strong>Informações Pessoais</strong>
            <Link to="/login">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                }} className={style.removeBtn}
                onClick={()=>{
                  localStorage.setItem('Token', false)
                }}
                >
                  Sair
                  </motion.button>
                  </Link>
          </aside>
          <div className={style.accountInformation}>
            <strong>Minha Conta</strong>

            <p>Avatar</p>
            <div className={style.avatarSettings}>
              <img src="/others/profile-icon.png" alt="Avatar Profile" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                }} className={style.sendBtn}>Enviar</motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                }} className={style.removeBtn}>Remover</motion.button>
            </div>

            <div className={style.accountData}>
              <label htmlFor="user">
                Nome de Exibição
                <input type="text" readOnly="true" placeholder={account.user} name="user" id="user"/>
              </label>
              <label htmlFor="name">
                Nome Completo
                <input type="text" readOnly="true" placeholder={account.name} name="name" id="name"/>
              </label>
              <label htmlFor="email">
                E-mail
                <input type="text" readOnly="true" placeholder={account.email} name="user" id="email"/>
              </label>
              <label htmlFor="celular">
               Celular
                <input type="text" readOnly="true" placeholder={!account.celular ? "Adicionar celular" :  account.celular} name="celular" id="celular"/>
              </label>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}