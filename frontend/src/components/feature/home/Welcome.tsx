import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="relative h-svh flex flex-col items-center justify-center">
      <header className="absolute left-4 top-4">
        <h3 className="text-lg font-bold tracking-tight cursor-default">
          GoalTracker
        </h3>
      </header>
      <div className="flex flex-col items-center mb-5 text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to GoalTracker
        </h1>
        <p className="text-sm text-neutral-500">
          Join us now and start your journey towards a more productive and
          fulfilling life.
        </p>
      </div>
      <Link
        to="/" // TODO: Change link
        className="bg-neutral-900 text-neutral-100 cursor-pointer rounded-lg flex font-medium text-base py-2.5 px-8 border-transparent hover:bg-neutral-700 hover:scale-[98%] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-neutral-900 focus:scale-[98%] transition-all"
      >
        Explore
      </Link>
      <footer className="absolute bottom-4 text-sm text-neutral-500 text-center">
        <p>&copy; 2024 GoalTracker. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Welcome
