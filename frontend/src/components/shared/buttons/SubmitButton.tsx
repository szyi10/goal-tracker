type ButtonProps = {
  label: string
}

const SubmitButton = ({ label }: ButtonProps) => {
  return (
    <button className="bg-neutral-900 text-neutral-100 cursor-pointer rounded-lg flex justify-center text-sm py-3 px-8 border-transparent hover:bg-neutral-700 hover:scale-[98%] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-neutral-900 focus:scale-[98%] transition-all">
      {label}
    </button>
  )
}

export default SubmitButton
