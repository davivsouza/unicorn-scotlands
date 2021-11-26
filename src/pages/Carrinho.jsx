import style from '../styles/Carrinho.module.scss'
import { useEffect, useState, useLayoutEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export function Carrinho() {
  const [carrinho, setCarrinho] = useState([])
  const [quant, setQuant] = useState(0)
  let price = []
  carrinho.forEach(item => {
    price.push(parseFloat(item.price))
  })
  useEffect(() => {
    if (localStorage.getItem('bagShop')) {
      setCarrinho(JSON.parse(localStorage.getItem('bagShop')))
    }
    
  }, [carrinho])


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
                    <p className={style.namePrd}>{bag.name}</p>
                    <select name="" id="">
                      <option value="">P</option>
                      <option value="">M</option>
                      <option value="">G</option>
                    </select>
                    <div className={style.quant}>
                      <p>{bag.quant}</p>
                      <div>
                        <img src="/others/mais.svg" alt="Mais" onClick={()=>{
                          carrinho[idx].quant = bag.quant+=1
                          carrinho[idx].price = parseFloat(bag.normalPrice*bag.quant).toFixed(2)
                          console.log(price);
                          localStorage.setItem('bagShop', JSON.stringify(carrinho))
                        }}/>
                        <img src="/others/menos.svg" alt="Menos" onClick={()=>{
                          if(bag.quant!=1){
                            carrinho[idx].quant = bag.quant-=1
                            carrinho[idx].price = parseFloat(bag.normalPrice*bag.quant).toFixed(2)
                            localStorage.setItem('bagShop', JSON.stringify(carrinho))
                          }
                          
                        }}/>

                      </div>
                    </div>
                    <p className={style.price}>
                      R$ {parseFloat(bag.normalPrice * bag.quant).toFixed(2)}
                    </p>
                    <img src="/others/excluir.svg" alt="Delete" className={style.delete}
                    onClick={()=>{
                      let newCarrinho = carrinho.indexOf(idx)
                      if(newCarrinho){
                        carrinho.splice(newCarrinho, 1)
                      }
                      localStorage.setItem('bagShop', JSON.stringify(carrinho))
                    }}
                    />
                    {/* splice - removes from a specific Array index. */}
                  </div>
                ))}
              </div>

              <div className={style.totalPrice}>
                <strong>Resumo do pedido</strong>
                <div>
                  <strong>Produtos </strong>
<<<<<<< HEAD
                  <p>R$ {parseFloat(price.reduce((total, currentElement) => total += currentElement)).toFixed(2)}</p>
                  <strong>Frete: </strong>
                  <p>Frete Grátis</p>
                </div>
                <strong>Total: <p>R$ {parseFloat(price.reduce((total, currentElement) => total += currentElement)).toFixed(2)}</p></strong>
=======
                  <p>R$ 250.00</p>
                  <strong>Frete: </strong>
                  <p>Frete Grátis</p>
                </div>
                <strong>Total: <p>R$ 250.00</p></strong>
>>>>>>> 1f694a4374aa8db7f8dd3eefb689a6d1b1c8da92

                <Link to="/pagamento">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.95,
                    }}

                    onClick={()=>{
                      localStorage.setItem('subTotal', price.reduce((total, currentElement) => total += currentElement))
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
