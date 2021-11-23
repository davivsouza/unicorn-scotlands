import style from '../styles/Button.module.scss'
import { motion } from 'framer-motion'



export function Buy({ children }) {
  return (
    <div
      className={style.buttonComponent}


    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.95,
        }}

      >{children}</motion.button>

    </div>
  )
}