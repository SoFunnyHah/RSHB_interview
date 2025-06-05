import React from 'react'
import styles from '../styles/FileList.module.css'
import { useNavigate } from 'react-router-dom'
import { useCurrrentFolderId } from '../hooks/folderId'
import { useAppStore } from '../store/useAppStore'
import { FcFolder } from "react-icons/fc";
import { FcFile } from "react-icons/fc";

const FileList: React.FC = () => {
  const navigate = useNavigate()
  const store = useAppStore()
  const currentId = useCurrrentFolderId()
  const items = store.getChildrenByParentId(currentId)


return (
    <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            {item.type === 'dir' ? (
              <button
                className={styles.name}
                onClick={() => {
                  navigate(`/folder/${item.id}`)
                }}
              >
                <FcFolder /> {item.name}
              </button>
            ) : (
              <span className={styles.name}>
                <FcFile /> {item.name} {item.isImage() && '(img)'}
              </span>
            )}
            Набор кнопок
          </li>
        ))}
    </ul>
)}

export default FileList
