
export const Square = ({ children, index, updateBoard, isSelected }) => {
  const className = `square ${isSelected ? 'is-selected' : ""}`




  const handleClick = () => {
    updateBoard({ index })
  }
  return (
    <div
      className={className}
      onClick={handleClick}
      key={index}
    >
      {children}
    </div>
  )
}
