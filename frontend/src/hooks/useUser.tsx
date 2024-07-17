import { useState } from "react"

const useUser = () => {
  const [isUser, setIsUser] = useState(false)

  return { isUser }
}

export default useUser
