import style from "../styles/NossaArte.module.scss"
import templates from '../templates.json'
import { Buy } from '../components/Button'

export function NossaArte(){
  return(
    <>
      <div className={style.container}>
          <div className={style.templatesContainer}>
            {templates.map((temp, idx)=>(
              <div className={style.templatesContent} key={idx}>
                <img src={temp.imageURL} alt={temp.name} />
                <p>{temp.name}</p>
                <div className={style.avaliation}>
                  {temp.avaliation.map((star, idx) => (
                    <img src={star} alt={`${temp.name} avaliation`} key={idx}/>
                  ))}
                </div>
                <strong>
                  R$ {parseFloat(temp.price).toFixed(2)}
                </strong>
                  <Buy>Comprar</Buy>
              </div>
            ))}
          </div>
          <div className={style.templatesAvaliation}>

          </div>
      </div>
    </>
  )
}