import style from '../styles/Contatos.module.scss'
import { Buy } from '../components/Button'

export function Contato() {
  return (
    <div className={style.container}>
      <div className={style.ImgContainer}>
        <h1>Contato</h1>
        <img src="/contactVectorImg.svg" alt="Contato" />
      </div>
      <div className={style.Form}>
        <form action="">
          <input type="text" placeholder="Nome" className={style.inputName} />
          <input type="text" placeholder="E-mail" className={style.inputEmail} />
          <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem" className={style.inputMsg}></textarea>
          <Buy>
            Enviar
          </Buy>
        </form>

      </div>
    </div>
  )
}