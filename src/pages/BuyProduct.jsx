import '../styles/BuyProduct.scss'
import { Link, useParams } from 'react-router-dom'
import produtoList from '../products.json'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export function BuyProduct() {
  const { id } = useParams()
  const [produto, setProduto] = useState({})
  const [cont, setCont] = useState(1)




  useEffect(() => {
    setProduto(produtoList.find(product => product.id === id))
  }, [])

  return (
    <>
      <div className="buy-container">
        <div className="product-image">
          <img src={produto.imageURL} alt={produto.name} />
        </div>
        <div className="buy-details">
          <p className="product-name">
            {produto.name}
          </p>
          <div className="prazo">
            <div>
              <span>Selecione o prazo de entrega: </span>
            </div>
            <div className="prazo-opts">
              <motion.input type="button" value="Normal" whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                }} />
              <motion.input type="button" value="Ninja" whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                }} />
              <motion.input type="button" value="Retirar na Loja" whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                }} />
            </div>

          </div>
          <div className="art-client">
            <strong>Enviar minha arte</strong>
            <p>O seu arquivo será impresso
              conforme você enviou</p>
            <input type="file" name="file" id="file" />
            <label htmlFor="file" class="designAdd">
              <img src="/others/mais.svg" alt="Adicionar Design" />
            </label>
          </div>

          <div className="price">
            <p>por apenas: </p>
            <strong className="price-txt">
              R$ {parseFloat(produto.price * cont).toFixed(2)}
              <span>/{cont * produto.un}un.</span>
              <span className="frete"> Frete Grátis!</span>
            </strong>
          </div>
          <div className="pay-container">
            <p>Quantidade:</p>
            <div className="div-flex">
              <div className="quants">
                <button className="quantLess" onClick={() => {
                  if (cont <= 1) {
                    setCont(1)
                  } else {
                    setCont(cont - 1)

                  }

                }}>-</button>
                <div className="quants-span">{cont}</div>
                <button className="quantMore" onClick={() => {
                  setCont(cont + 1)

                }}>+</button>
              </div>
              <div className="pay-btn">

                <Link to={`/carrinho`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => {
                      let productsStorage = {
                        name: produto.name,
                        quant: cont,
                        price: produto.price * cont,
                        imageURL: produto.imageURL
                      }

                      let storage = JSON.parse(localStorage.getItem('bagShop')) || []
                      storage.push(productsStorage)
                      localStorage.setItem('bagShop', JSON.stringify(storage))
                    }}
                  >
                    Adicionar ao carrinho
                  </motion.button>

                </Link>

              </div>


            </div>
          </div>

        </div>
      </div>

    </>
  )
}