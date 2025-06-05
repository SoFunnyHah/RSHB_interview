import React, { useEffect } from 'react'
import FileList from '../components/FileList'
import Loader from '../components/Loader'
import { useCurrrentFolderId } from '../hooks/folderId'
import { useAppStore } from '../store/useAppStore'
import styles from '../styles/FileExplorer.module.css'
import FileToolBar from '../components/FileToolBar'


const FileExplorer: React.FC = () => {
  const store = useAppStore()
const currentId = useCurrrentFolderId()
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
        <FileToolBar />
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
