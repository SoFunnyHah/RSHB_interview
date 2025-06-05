import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCurrrentFolderId } from '../hooks/folderId'
import { useAppStore } from '../store/useAppStore'
import styles from '../styles/Breadcrumbs.module.css'
import { Item } from '../types/Item'


const Breadcrumbs: React.FC = () => {
    
  const navigate = useNavigate()

  const currentId = useCurrrentFolderId()
  const store = useAppStore()
  const currentItem = store.getItemById(currentId)

  const buildBreadcrumbs = () => {
    const path = []
    let node: Item | undefined = currentItem
    while (node) {
      path.unshift(node)
      node = store.getItemById(node.parentId!)
    }
    return path
  }

  const breadcrumbs = buildBreadcrumbs()

return (
    <div className={styles.breadcrumbs}>
        {breadcrumbs.map((item, idx) => {
            const isLast = idx === breadcrumbs.length - 1
            return (
            <span key={item.id}>
                {isLast ? (
                <span className={styles.breadcrumbActive}>{item.name}</span>
                ) : (
                <button
                    className={styles.breadcrumb}
                    onClick={() => {
                    navigate(`/folder/${item.id}`)
                    }}
                >
                    {item.name}
                </button>
                )}
                {idx < breadcrumbs.length - 1 && <span className={styles.separator}> / </span>}
            </span>
            )
        })}
    </div>
)}

export default Breadcrumbs
