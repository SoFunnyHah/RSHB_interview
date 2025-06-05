import styles from '../styles/NotFound.module.css'

const NotFound: React.FC = () => {
  return (
    <div className={styles.fullscreen}>
      <img src="/NotFound.png" alt="404 Error" className={styles.fullImage} />
    </div>
  )
}

export default NotFound
