import { useUser } from "../hooks"
import { Start, Welcome } from "../components/feature"

const Home = () => {
  const { isUser } = useUser()

  return isUser ? <Start /> : <Welcome />
}

export default Home
