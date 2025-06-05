import React from 'react'
import styles from '../styles/FileExplorer.module.css'

const FileExplorer: React.FC = () => {

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
