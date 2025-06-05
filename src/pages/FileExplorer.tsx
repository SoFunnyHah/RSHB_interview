import React, { useEffect } from 'react'
import styles from '../styles/FileExplorer.module.css'
import { useAppStore } from '../store/useAppStore'
import Loader from '../components/Loader'


const FileExplorer: React.FC = () => {
   const store = useAppStore()


  useEffect(() => {
    if (store.items.length === 0) {
      store.loadData()
    }
  }, [])

  if (store.isLoading){
    return (
        <div className={styles.container}>
            <Loader />
        </div>
  )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftGroup}>
        <h2 className={styles.title}>Ваши файлы</h2>
        </div>
      </div>
    </div>
  )
}

export default FileExplorer
