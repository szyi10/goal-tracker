import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Login, Signup } from "./pages"

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
  )
}

export default App
