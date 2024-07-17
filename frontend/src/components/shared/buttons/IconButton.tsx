type ButtonProps = {
  label: string
  icon: string
  size?: number
  className?: string
}

const IconButton = ({
  label,
  icon,
  size = 24,
  className = "relative icon-button",
}: ButtonProps) => {
  return (
    <button className={className}>
      <img
        src={icon}
        alt={label}
        width={size}
        height={size}
        className="absolute left-4 xs:left-20"
      />
      <p>{label}</p>
    </button>
  )
}

export default IconButton
