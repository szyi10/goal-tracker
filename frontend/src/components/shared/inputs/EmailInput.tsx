type EmailProps = {
  // TODO: Make it required
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EmailInput = ({ value, onChange }: EmailProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input
        className="input"
        type="email"
        inputMode="email"
        name="email"
        placeholder="E.g. johndoe@email.com"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default EmailInput
