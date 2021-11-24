import style from '../styles/Carrinho.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export function Carrinho() {
  const [carrinho, setCarrinho] = useState([])
  const [quant, setQuant] = useState(0)
  const [subtotalPrice, setSubTotalPrice] = useState([])
  let price = []

  useEffect(() => {
    if (localStorage.getItem('bagShop')) {
      setCarrinho(JSON.parse(localStorage.getItem('bagShop')))

    }
    carrinho.forEach(item => {
      price.push(item.price)
      setSubTotalPrice([...price])

    })
  }, [subtotalPrice])

  console.log(subtotalPrice);

  return (
    <>
      <div className={style.container}>
        <div className={style.carrinhoContent}>

          {carrinho.length == 0 ? (
            <div className={style.emptyCart}>
              <h1>Nenhum produto foi adicionado ao carrinho ainda.</h1>

            </div>

          ) : (
            <div className={style.carrinhoContainer}>
              <div>
                {carrinho.map((bag, idx) => (
                  <div className={style.bagShop} key={idx}>
                    <img src={bag.imageURL} alt={bag.name} />
                    <p>{bag.name}</p>
                    <select name="" id="">
                      <option value="">P</option>
                      <option value="">M</option>
                      <option value="">G</option>
                    </select>
                    <div className={style.quant}>
                      <p>{bag.quant}</p>
                      <div>
                        <img src="/others/mais.svg" alt="Mais" />
                        <img src="/others/menos.svg" alt="Menos" />

                      </div>
                    </div>
                    <p className={style.price}>
                      R$ {parseFloat(bag.price).toFixed(2)}
                    </p>
                    <img src="/others/excluir.svg" alt="Delete" className={style.delete}
                    // onClick={()=>{
                    //   // let newCarrinho = carrinho.splice(idx,1)
                    //   // localStorage.setItem('bagShop', JSON.stringify(newCarrinho))
                    // }}
                    />
                    {/* splice - removes from a specific Array index. */}
                  </div>
                ))}
              </div>

              <div className={style.totalPrice}>
                <strong>Resumo do pedido</strong>
                <div>
                  <strong>Produtos </strong>
                  <p>R$ 250.00</p>
                  <strong>Frete: </strong>
                  <p>Frete Grátis</p>
                </div>
                <strong>Total: <p>R$ 250.00</p></strong>

                <Link to="/pagamento">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.95,
                    }}

                    onClick={()=>{
                      localStorage.setItem('subTotal', subtotalPrice.length !== 0 && subtotalPrice.reduce((total, currentElement) => total + currentElement))
                    }}
                  >

                    Continuar
                  </motion.button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  )
}
