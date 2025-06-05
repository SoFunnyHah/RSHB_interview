import styles from '../styles/EmptyStateUFO.module.css'

const EmptyStateUFO: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.beam}></div>
      <div className={styles.text}>
        <div>тут</div>
        <div>пусто</div>
      </div>
      <img src="/ufo.png" alt="UFO" className={styles.ufo} />
    </div>
  )
}

export default EmptyStateUFO