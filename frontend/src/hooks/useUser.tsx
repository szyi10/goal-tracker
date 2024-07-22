import { useState } from "react"

const useUser = () => {
  const [isUser, setIsUser] = useState(true)

  return { isUser }
}

export default useUser
