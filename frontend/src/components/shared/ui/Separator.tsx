type SeparatorProps = {
  label?: string
}

const Separator = ({ label }: SeparatorProps) => {
  return (
    <div className="relative my-6 w-full">
      <div className="absolute left-0 right-0 top-0 w-full h-[1px] bg-neutral-300" />
      {label && (
        <p className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white w-1/2 px-4 text-sm text-center text-neutral-400">
          {label}
        </p>
      )}
    </div>
  )
}

export default Separator
