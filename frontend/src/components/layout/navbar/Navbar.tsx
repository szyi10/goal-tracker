import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="h-20 w-full">
      <nav className="max-container px-4 w-full h-full flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          GoalTracker
        </Link>
        <button className="aspect-square object-cover rounded-full cursor-pointer flex items-center justify-center overflow-hidden h-10 w-10">
          <img
            src="https://www.zbrushcentral.com/uploads/default/original/4X/3/5/5/355ba83c855cfa50a4e99d85495112738a3071ed.jpeg"
            alt=""
            width={40}
            height={40}
          />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
