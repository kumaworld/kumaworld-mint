
import { useEffect, useState } from 'react'
import { useAppSelector } from '../stores/hooks'
import { selectKuma } from '../stores/kuma-slice'
import styles from '../styles/Kuma.module.css'
import Typewriter from 'typewriter-effect';

const Kuma = () => {
  const { texts } = useAppSelector(selectKuma)
  const [ballonVisible, setBallonVisible] = useState(false)
  const [index, setIndex] = useState(0)

  const watchSupply = window.setInterval(watchSupplyFunction, 1000)

  const watchSupplyFunction = async () => {
    let minted = await connectedContract.totalSupply()
    let maxKumas = await connectedContract.MAX_KUMAS()

    if (minted === maxKumas) {
      texts = ['Sold out, buy kumas in opensea']

      clearInterval(watchSupply)
    }
  }

  useEffect(() => {
    setIndex(index)
  }, [texts])

  return (
    <div className={styles.container}>
      <div className={`${styles.ballon} ${styles.visible}`}>
        <Typewriter
          options={{
            strings: texts,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className={styles.bear}>
          <div className={styles.bear__ears}>
            <div className={`${styles.bear__ears__left} ${styles.ear}`}></div>
            <div className={`${styles.bear__ears__right} ${styles.ear}`}></div>
          </div>
          <div className={styles.bear__body}>
            <div className={styles.bear__eyes}>
                <div className={`${styles.bear__eyes__left} ${styles.eye}`}></div>
                <div className={`${styles.bear__eyes__right} ${styles.eye}`}></div>
            </div>
            <div className={styles.bear__nose}>
                <div className={styles.bear__nose__inner}></div>
            </div>
          </div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  )
}

export default Kuma
