import { useNavigate } from 'react-router-dom'

export const Navigate = ({children, path}) => {
  const navigate = useNavigate()
  
  return (
    <button onClick={() => navigate(path)}>
      {children}
    </button>
  )
}