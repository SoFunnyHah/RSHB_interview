import React, { useEffect } from 'react'
import FileList from '../components/FileList'
import Loader from '../components/Loader'
import { useCurrrentFolderId } from '../hooks/folderId'
import { useAppStore } from '../store/useAppStore'
import styles from '../styles/FileExplorer.module.css'
import FileToolBar from '../components/FileToolBar'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltUp } from "react-icons/fa";
import Breadcrumbs from '../components/Breadcrumbs'
import EmptyStateUFO from '../components/EmptyStateUFO'

const FileExplorer: React.FC = () => {
  const store = useAppStore()
  const navigate = useNavigate()
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
            {currentItem.parentId !== null && (
            <button
                className={styles.upButton}
                onClick={() => {
                navigate(`/folder/${currentItem.parentId}`)
                }}
            >
                <FaLongArrowAltUp size={18}/>
            </button>
            )}
            <h2 className={styles.title}>{currentItem.name}</h2>
        </div>
        <FileToolBar />
      </div>
      <Breadcrumbs />
    {items.length === 0 ? (
        <EmptyStateUFO />
    ) : (
        <FileList />
    )}
    </div>
  )
}

export default FileExplorer
