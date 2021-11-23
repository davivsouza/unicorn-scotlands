import style from '../styles/Produtos.module.scss'
import produto from '../products.json'
import { Buy } from '../components/Button'
import { Link } from 'react-router-dom'
export function Produtos() {
  return (
    <>

      <div className={style.Produtos}>
        <div className={style.produtoContainer}>
          {
            produto.map((product, idx) => (
              <div
                className={style.produtoContent}
                key={idx}
              >
                <img src={product.imageURL} alt={product.name} />
                <p>{product.name}</p>
                <div className={style.avaliation}>
                  {product.avaliation.map((star, idx) => (
                    <img src={star} alt={`${product.name} avaliation`} key={idx}/>
                  ))}
                </div>

                <strong>
                  R$ {parseFloat(product.price).toFixed(2)}
                  <span>/{product.un}un</span>
                </strong>
                <Link to={`/produtos/${product.id}`}>
                  <Buy>Comprar</Buy>
                </Link>
                
              </div>
            ))
          }
        </div>

       
      </div>
    </>
  )

}