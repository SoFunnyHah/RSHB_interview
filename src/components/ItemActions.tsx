import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiCommentDetail, BiLink } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/ItemActions.module.css'
import { Item } from '../types/Item'

interface Props {
  item: Item
}

const ItemActions: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate()

  const goToPlaceholder = () => navigate('/404')

  return (
    <div className={styles.actions}>
      <button
        onClick={() => null}
        title={item.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
      >
        {item.isFavorite
          ? <AiFillStar size={18}/>
          : <AiOutlineStar size={18}/>
        }
      </button>

      <button onClick={goToPlaceholder} title="Комментарии">
        <BiCommentDetail size={16}/>
      </button>

      <button onClick={goToPlaceholder} title="Скопировать ссылку">
        <BiLink size={16}/>
      </button>

      <button onClick={goToPlaceholder} title="Дополнительно">
        <BsThreeDotsVertical size={16}/>      
      </button>
    </div>
  )
}

export default ItemActions
