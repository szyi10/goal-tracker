import { useState } from "react"
import { Show, Hide } from "../icons"

type PasswordProps = {
  // TODO: Make it required
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput = ({ value, onChange }: PasswordProps) => {
  const [hidden, setHidden] = useState(true)

  const toggleMode = () => {
    setHidden((prevState) => !prevState)
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="password">Password</label>
      <div className="relative w-full">
        <input
          className="input w-full"
          type={hidden ? "password" : "text"}
          name="password"
          placeholder="Enter your password"
          required
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={toggleMode}
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {hidden ? <Show /> : <Hide />}
        </button>
      </div>
    </div>
  )
}

export default PasswordInput
