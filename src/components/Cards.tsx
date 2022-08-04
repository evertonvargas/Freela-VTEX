import { infoCards } from "./infoCards"
import styles from "../styles/Cards.module.scss"

export function Cards(){
  return(
    <div className={styles.container}>
      {infoCards.map((item, index) => (
        <div key={index}>
          <div className={styles.title}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
          </div>
        <ul>
        {item.list.map((element,index) => (
          <li key={index}>{element}</li>
        ))}
        </ul>
        </div>
      ))}
    </div>
  )
}