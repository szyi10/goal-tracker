import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default App
