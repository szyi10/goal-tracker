import { Link } from "react-router-dom"
import {
  EmailInput,
  IconButton,
  PasswordInput,
  Separator,
  SubmitButton,
} from "../components/shared"

const Signup = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="relative h-svh flex items-center justify-center">
      <header className="absolute left-4 top-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight cursor-pointer"
        >
          GoalTracker
        </Link>
      </header>
      <div className="flex flex-col w-full xs:max-w-96 px-4">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold mb-1">Sign Up</h2>
          <p className="text-neutral-500">Welcome to GoalTracker family 👋</p>
        </div>
        <IconButton icon="/icons/google.svg" label="Login with Google" />
        <Separator label="or Signup with Email" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <EmailInput />
          <PasswordInput />
          <div className="flex items-center justify-end">
            {/* TODO: Transfer to `Link` element */}
            <p className="text-sm font-medium cursor-pointer">
              Forgot password?
            </p>
          </div>
          <SubmitButton label="Signup" />
        </form>
        <div className="flex items-center justify-center mt-4 text-center">
          <p className="text-sm text-neutral-500">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-neutral-900">
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
