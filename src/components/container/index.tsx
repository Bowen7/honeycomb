import React, { useState, useEffect } from "react"
import { Textarea, Button, useToasts, useClipboard } from "@geist-ui/react"
import Item from "../item"
import { calcPoints } from "../../utils"
const COL = 10
const ROW = 5
function Container() {
  const [selectedSet, setSelectedSet] = useState<Set<string>>(new Set())
  const handleSelect = (row: number, col: number) => {
    const id = row + "-" + col
    if (selectedSet.has(id)) {
      selectedSet.delete(id)
    } else {
      selectedSet.add(id)
    }
    setSelectedSet(new Set(selectedSet))
  }
  const items = []
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      const id = i + "-" + j
      items.push(
        <Item
          row={i}
          col={j}
          selected={selectedSet.has(id)}
          key={id}
          onSelect={handleSelect}
        />
      )
    }
  }
  const [, setToast] = useToasts()
  const { copy } = useClipboard()
  const handleCopy = () => {
    const result: number[][][] = []
    selectedSet.forEach(key => {
      const [row, col] = key.split("-")
      const points = calcPoints(parseInt(row), parseInt(col), 20)
      result.push(points)
    })
    copy(JSON.stringify(result))
    setToast({ text: "data copied.", type: "success" })
  }
  return (
    <>
      <div className="svg-container">
        <div className="svg-content">
          <svg
            width={1000}
            height={500}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            {items}
          </svg>
        </div>
      </div>
      <div className="output-container">
        <Button size="small" auto onClick={handleCopy}>
          Copy
        </Button>
      </div>
      <style jsx>{`
        .svg-container {
          width: 100vw;
          height: 100vh;
          display: flex;
          overflow: auto;
        }
        .svg-content {
          margin: auto;
        }
        .output-container {
          padding: 24px;
        }
      `}</style>
    </>
  )
}

export default Container
