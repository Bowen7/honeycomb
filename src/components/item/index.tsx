import React, { useMemo } from "react"
import { useTheme } from "@geist-ui/react"
import { calcPoints } from "../../utils"
type Props = {
  col: number
  row: number
  selected: boolean
  radius?: number
  onSelect: (row: number, col: number) => void
}
const Item: React.FC<Props> = ({
  col,
  row,
  selected,
  radius = 30,
  onSelect,
}) => {
  const points = useMemo(() => {
    const arr = calcPoints(row, col, radius)
    return { arr, str: arr.map(([x, y]) => x + " " + y).join(",") }
  }, [col, row, radius])

  const { palette } = useTheme()
  const handleClick = () => {
    onSelect(row, col)
  }
  return (
    <polygon
      points={points.str}
      fill={selected ? palette.successLight : palette.background}
      stroke={palette.foreground}
      onClick={handleClick}
    />
  )
}

export default Item
