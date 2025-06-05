import { AiOutlineLoading } from 'react-icons/ai'
import styles from '../styles/Loader.module.css'

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
        <AiOutlineLoading className={styles.spinner} size={40} />
    </div>
  )
}

export default Loader
