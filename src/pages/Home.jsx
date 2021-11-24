import { motion } from 'framer-motion'
import { Informations } from '../components/Informations'
import { Buy } from '../components/Button'
import { Link } from 'react-router-dom'
import { Item } from '../components/Item'
import style from '../styles/Home.module.scss'
import produtoList from '../products.json'
import Carousel from 'react-elastic-carousel'
import '../styles/Slider.scss'


export function Home() {
  const produtos = produtoList.slice(0, 3)
  const breakPoints = [
    { width: 500, itemsToShow: 1, itemsToScroll: 1 },
    { width: 760, itemsToShow: 3, itemsToScroll: 2 },
    { width: 800, itemsToShow: 4, itemsToScroll: 2 },
    { width: 900, itemsToShow: 4, itemsToScroll: 2 }
  ]

  return (

    <>

      <div className={style.Container}>
        <div className={style.animation}>
          <motion.img src="/designer.svg" alt="Designer" />
        </div>
        <div className={style.slogan}>
          <div className={style.sloganText}>
            <motion.h1
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}

            >VENHA TRANSFORMAR SUA ARTE</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -400 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
            >
              A criatividade está no modo de como você enxerga a realidade ao seu redor.
            </motion.p>
            <motion.button

              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
              }}

              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5, type: "spring", bounce: 0.3 } }}

            >

               <Link to ="/produtos">
                  Explorar o desconhecido
                </Link>
              
            </motion.button>
          </div>

          <div className={style.medias}>
            <img src="/instagram.svg" alt="Instagram" />
            <img src="/zap.svg" alt="WhatsApp" />
            <img src="/face.svg" alt="Facebook" />
          </div>
        </div>


      </div>
      <Informations />

      <div className={style.sellerProducts} >
        <strong>Produtos mais vendidos</strong>
        <motion.img drag dragConstraints={{ bottom: -10, top: -50, right: 0, left: 0 }} src="/astronauta.svg" alt="Astronauta" className={style.Astronauta} />
        <motion.div className={style.sellerProductsContent}>

          {produtos.map((product, idx) => (
            <div className={style.productContainer} key={idx} style={{ backgroundImage: `url(${product.imageURL})` }}>
              <motion.p className={style.productName}>{product.name}</motion.p>
              {/* <img src={product.imageURL} alt={product.name} /> */}
              <ul className={style.productDesc} key={idx}>
                {product.description.map((desc, idx) => (

                  <li key={idx}>{desc}</li>

                ))}
              </ul>
              <div className={style.Division}></div>
              <div className={style.price}>
                <p>R$ {parseFloat(product.price).toFixed(2)} <span>/un</span> </p>
              </div>
              <Link to={`/produtos/${product.id}`}>
                  <Buy>Comprar</Buy>
                </Link>
            </div>
          ))}
        </motion.div >

      </div>


      <div className={style.portfolio}>
        <strong>Nosso Portfólio</strong>
        <p>
          Nossa gráfica possui uma variedade de banners, logos, wallpapers e muito mais.Todos são feitos por profissionais que trazem uma extrema qualidade, tudo para agradar você.
        </p>


        <div className={style.templatesContainer}>
          <div className={style.templateIntrodution}>
            <img className={style.templateBg} src="/templatesBg.svg" alt="Template Background" />
            <div className={style.introdutionTxt}>
              <strong>Templates Minimalistas</strong>
              <div className={style.Division}></div>
              <p>
                Template é um modelo pré-moldado que pode ser
                adaptado para diversos usos, colocando sua logo, as suas cores e mudando as formas.
              </p>
              
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={()=>{
                    window.location="/nossa-arte"
                  }}
                  >
                    
                    Ver mais
                  
                </motion.button>
              
            </div>
          </div>
          <div className={style.templatesImg}>
            <Carousel  breakPoints={breakPoints} itemPadding={[0,10]}  itemsToScroll={4} className="stylingExample">
                <Item>
                  <img src="/templates/banner.svg" alt="" />
                </Item>
                <Item>
                  <img src="/templates/banner1.svg" alt="" />
                </Item>
                <Item>
                  <img src="/templates/banner2.svg" alt="" />
                </Item>
                <Item>
                  <img src="/templates/banner3.svg" alt="" />
                </Item>
                <Item>
                  <img src="/templates/banner4.svg" alt="" />
                </Item>
                <Item>
                  <img src="/templates/logo.svg" alt="" />
                </Item>
              
            </Carousel>
          </div>
        </div>

      </div>

    </>


  )
}
