import { useNavigate } from 'react-router-dom'
import styles from '../styles/FileToolBar.module.css'
import { FaFolderPlus } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";
import { fontAutoColor } from '../utils/fontAutoColor'

const buttons = [
  {
    label: 'Создать папку',
    icon: FaFolderPlus,
    iconSize: 18,
    color: 'rgb(254, 200, 1)',
  },
  {
    label: 'Загрузить',
    icon: MdOutlineFileUpload,
    iconSize: 18,
    color: 'rgb(166, 205, 53)',
  },
  {
    label: 'Создать файл',
    icon: AiOutlineFileAdd,
    iconSize: 18,
    color: 'rgb(29, 133, 67)',
  },
]


const FileToolBar: React.FC = () => {
  const navigate = useNavigate()

  const handleStub = () => {
    navigate('/404')
  }

  return (
    <div className={styles.actions}>
        {buttons.map((btn, index) => {
        const Icon = btn.icon
        const iconSize = btn.iconSize
        const textColor = fontAutoColor(btn.color)

        return (
            <button
            key={index}
            onClick={handleStub}
            className={styles.actionButton}
            style={{
                backgroundColor: btn.color,
                color: textColor,
                fontWeight: 500,
            }}
            title={btn.label}
            >
            <span className={styles.iconWrapper}>
                <Icon size={iconSize}/>
            </span>
            <span className={styles.label}>{btn.label}</span>
            </button>
        )
        })}
    </div>
  )
}

export default FileToolBar
