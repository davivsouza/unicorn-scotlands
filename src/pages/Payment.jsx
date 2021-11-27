import style from '../styles/Payment.module.scss'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
export function Payment() {
  const navigate = useNavigate()
  const [paymentStatus, setPaymentStatus] = useState('address')
  const [carrinho, setCarrinho] = useState([])
  const [subTotal, setSubtotal] = useState(0)
  useEffect(() => {
    if (localStorage.getItem('bagShop')) {
      setCarrinho(JSON.parse(localStorage.getItem('bagShop')))
      setSubtotal(parseFloat(localStorage.getItem('subTotal')).toFixed(2))
    }

  }, [])


  return (
    <>
      <div className={style.container}>
        <div className={style.containerContent}>
          {paymentStatus == "address" && (
            <div className={style.adrressSection}>
              <div className={style.numberSection}>
                <div></div>
                <p><strong>1</strong><span>Detalhes</span></p>
                <div></div>
                <p><strong>2</strong><span>Método De Pagamento</span> </p>
                <div></div>
                <p><strong>3</strong><span>Confirmar</span> </p>
                <div></div>
              </div>
              <div className={style.form}>

                <label htmlFor="Name">
                  Nome:
                  <input type="text" id="Name" name="Name" />
                </label>

                <label htmlFor="Celular">
                  Celular:
                  <input type="text" id="Celular" name="Celular" />
                </label>

                <label htmlFor="CEP">
                  CEP:
                  <input type="text" id="CEP" name="CEP" />
                </label>

                <label htmlFor="CPF">
                  CPF:
                  <input type="text" id="CPF" name="CPF" />
                </label>

                <label htmlFor="Endereço">
                  Endereço:
                  <input type="text" id="Endereço" name="Endereço" />
                </label>

                <label htmlFor="Número">
                  Número:
                  <input type="text" id="Número" name="Número" />
                </label>
              </div>

              <button onClick={() => {
                setPaymentStatus('payment')
              }}>
                Continuar
              </button>
            </div>
          )}
          {paymentStatus == "payment" && (
            <div className={style.paymentSection}>
              <div className={style.numberSection}>
                <div></div>
                <p><strong><img src="/others/completed.svg" alt="Completed" /></strong><span>Detalhes</span></p>
                <div></div>
                <p><strong>2</strong><span>Método De Pagamento</span> </p>
                <div></div>
                <p><strong>3</strong><span>Confirmar</span> </p>
                <div></div>
              </div>

              <div className={style.paymentMethod}>
                <div>
                  <label htmlFor="mastercard">
                    <input type="radio" name="mastercard" id="mastercard" checked />
                    <img src="/others/logos_mastercard.svg" alt="mastercard" />
                  </label>
                  <label htmlFor="visa">
                    <input type="radio" name="visa" id="visa" />
                    <img src="/others/logos_visa.svg" alt="visa" />
                  </label>
                  <label htmlFor="boleto">
                    <input type="radio" name="boleto" id="boleto" />
                    <strong>Boleto</strong>
                  </label>
                </div>



                <div className={style.paymentForm}>
                  <label htmlFor="Número">
                    Número do cartão:
                    <input type="number" id="Número" name="Número" />
                  </label>

                  <label htmlFor="Dono">
                    Dono do cartão:
                    <input type="text" id="Dono" name="Dono" />
                  </label>

                  <label htmlFor="Data" className={style.cardVencimento}>
                    Data de experição:
                    <input type="number" id="Data" name="Data" placeholder="Mês" />
                    <input type="number" id="Data" name="Data" placeholder="Ano" />
                  </label>

                  <label htmlFor="CVC">
                    CVC:
                    <input type="text" id="CVC" name="CVC" />
                  </label>


                </div>
              </div>



              <button onClick={() => {
                setPaymentStatus('confirm')
              }}>
                Continuar
              </button>
            </div>
          )}
          {paymentStatus == "confirm" && (
            <div className={style.confirmSection}>
              <div className={style.numberSection}>
                <div></div>
                <p><strong><img src="/others/completed.svg" alt="Completed" /></strong><span>Detalhes</span></p>
                <div></div>
                <p><strong><img src="/others/completed.svg" alt="Completed" /></strong><span>Método De Pagamento</span> </p>
                <div></div>
                <p><strong>3</strong><span>Confirmar</span> </p>
                <div></div>
              </div>

              <div className={style.confirmedDocument}>
                <div className={style.confirmedDocumentContent}>
                  <strong>Endereço de Envio</strong>
                  <p>
                    Halisson Aparecido Lima <br />
                    Rua Skenara Nakandakare 214 <br />
                    Mauá - SP <br />
                    09361080
                  </p>

                  <strong>Forma de Pagamento</strong>
                  <div className={style.paymentSettings}>
                    {carrinho.map((prd, idx) => (
                      <>
                        <img src="/others/logos_mastercard.svg" alt="" />
                        <span>{prd.name}</span>
                      </>


                    ))}


                  </div>


                  <strong>Resumo do Pedido</strong>
                  <div className={style.resumoPedido}>
                    <p>Subtotal do(s) item(ns): </p>
                    <p>R$ 250.00</p>
                    <p>Frete: </p>
                    <p>Frete Grátis</p>
                    <p>Total: </p>
                    <p>R$ 250.00 </p>
                  </div>

                </div>
              </div>

              <button onClick={() => {
                setPaymentStatus('finish')
              }}>
                Comprar
              </button>
            </div>
          )}
          {paymentStatus == "finish" && (
            <div className={style.finished}>
              <div className={style.numberSection}>
                <div></div>
                <p><strong><img src="/others/completed.svg" alt="Completed" /></strong><span>Detalhes</span></p>
                <div></div>
                <p><strong><img src="/others/completed.svg" alt="Completed" /></strong><span>Método De Pagamento</span> </p>
                <div></div>
                <p><strong><img src="/others/completed.svg" alt="Completed" /></strong><span>Confirmar</span> </p>
                <div></div>
              </div>

              <div className={style.message}>
                <h1>Compra Finalizada <img src="/others/finished.svg" alt="Compra Finalizada" /></h1>

              </div>

              <button onClick={() => {
                navigate('/', {replace:true})
              }}>
                Sair
              </button>
            </div>
          )}
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}
