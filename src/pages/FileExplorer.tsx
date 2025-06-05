import React, { useEffect } from 'react'
import styles from '../styles/FileExplorer.module.css'
import FileList from '../components/FileList'
import Loader from '../components/Loader'
import { useAppStore } from '../store/useAppStore'
import { useParams } from 'react-router-dom'


const FileExplorer: React.FC = () => {
  const store = useAppStore()
  const {id} = useParams()
  const currentId = parseInt(id ?? "", 10)  
  const currentItem = store.getItemById(currentId)
  const items = store.getChildrenByParentId(currentId)

  useEffect(() => {
    if (store.items.length === 0) {
      store.loadData()
    }
  }, [])

  if (store.isLoading || !currentItem){
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
        <h2 className={styles.title}>{currentItem.name}</h2>
        </div>
      </div>
    {items.length === 0 ? (
        null
    ) : (
        <FileList />
    )}
    </div>
  )
}

export default FileExplorer
