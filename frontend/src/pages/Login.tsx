import { Link } from "react-router-dom"
import {
  EmailInput,
  IconButton,
  PasswordInput,
  Separator,
  SubmitButton,
} from "../components/shared"

const Login = () => {
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
          <h2 className="text-3xl font-semibold mb-1">Login</h2>
          <p className="text-neutral-500">Hi, Welcome back 👋</p>
        </div>
        <IconButton icon="/icons/google.svg" label="Login with Google" />
        <Separator label="or Login with Email" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <EmailInput />
          <PasswordInput />
          <div className="flex items-center justify-end">
            {/* TODO: Transfer to `Link` element */}
            <p className="text-sm font-medium cursor-pointer">
              Forgot password?
            </p>
          </div>
          <SubmitButton label="Login" />
        </form>
        <div className="flex items-center justify-center mt-4 text-center">
          <p className="text-sm text-neutral-500">
            Not registered yet?{" "}
            <Link to="/signup" className="font-medium text-neutral-900">
              Create an account
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
