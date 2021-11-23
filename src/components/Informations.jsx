import {  useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import style from '../styles/Informations.module.scss'

export function Informations() {
  const { ref, inView } = useInView({
    threshold: 0.1
  })
  //{// threshold: 0//
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, type: "spring", bounce: 0.3 }
      })
    }

    if (!inView) {
      animation.start({
        opacity: 0,
        y: 300,
      })
    }
  }, [inView])

  return (
    <div className={style.Container}>
      <motion.div className={style.informationsContent} ref={ref}>

        <motion.div
          animate={animation} >
          <motion.div whileHover={{
            scale: 1.2
          }}
            transition={{ duration: 0.2, type: 'spring' }}
          >

            <img src="/camadas.svg" alt="Designs Criativos" />
          </motion.div>

          <strong>Designs <br />Criativos</strong>
          <p>Nossos designs são criados por especialistas que fazem o melhor para os clientes.</p>
        </motion.div>
        <motion.div animate={animation} >
          <motion.div whileHover={{
            scale: 1.2
          }}
            transition={{ duration: 0.2, type: 'spring' }}>
            <img src="/suporte.svg" alt="Melhor Suporte" />

          </motion.div>
          <strong>Melhor <br />Suporte</strong>
          <p>Nós temos uma equipe desenvolvida somente para atender os clientes e sanar suas dúvidas.</p>
        </motion.div>
        <motion.div animate={animation} >
          <motion.div whileHover={{
            scale: 1.2
          }}
            transition={{ duration: 0.2, type: 'spring' }}>
            <img src="/star.svg" alt="Melhores Avaliações" />

          </motion.div>
          <strong>Melhores<br /> Avaliações</strong>
          <p>Nós temos as melhores notas no ReclameAqui e as mais altas taxas de resposta.</p>
        </motion.div>
        {/* ------------------------------------- */}
        <motion.div animate={animation}>
          <motion.div whileHover={{
            scale: 1.2
          }}
            transition={{ duration: 0.2, type: 'spring' }}>
            <img src="/printer.svg" alt="Impressão Rápida" />

          </motion.div>

          <strong>Impressão <br /> Rápida</strong>
          <p>Usamos as melhores impressoras do mercado e também temos o tempo de entrega mais rápido.</p>
        </motion.div>
        <motion.div animate={animation}>
          <motion.div whileHover={{
            scale: 1.2
          }}
            transition={{ duration: 0.2, type: 'spring' }}>
            <img src="/plant.svg" alt="Produtos Renováveis" />

          </motion.div>
          <strong>Produtos <br />Renováveis</strong>
          <p>Usamos nas nossas impressões produtos de origem legal e renovável.</p>
        </motion.div>
        <motion.div animate={animation}>
          <motion.div whileHover={{
            scale: 1.2
          }}
            transition={{ duration: 0.2, type: 'spring' }}>
            <img src="/cost.svg" alt="Baixo Custo" />

          </motion.div>
          <strong>Baixo <br /> Custo</strong>
          <p>Nós temos os mais baixos custos no balanço de qualidade e preço disponíveis no mercado</p>
        </motion.div>
      </motion.div >

    </div>
  )
}