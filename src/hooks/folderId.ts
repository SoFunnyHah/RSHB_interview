import { useParams } from "react-router-dom"

export const useCurrrentFolderId = () => {
  const {id} = useParams()

  const numberId = Number(id) 
        return isNaN(numberId) ? null : numberId
}