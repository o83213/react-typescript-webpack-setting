import { useState } from 'react'
const ClickCount = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          setCount((pre) => pre + 1)
        }}
      >
        Count:{count}
      </button>
    </div>
  )
}
export default ClickCount
