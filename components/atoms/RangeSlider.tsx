'use client'

interface RangeSliderProps {
  min?: number
  max?: number
  start?: number
  end?: number
  onChange?: (start: number, end: number) => void
}

export function RangeSlider({
  min = 0,
  max = 100,
  start = 0,
  end = 100,
  onChange,
}: RangeSliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="range"
        min={min}
        max={max}
        value={start}
        onChange={e => onChange?.(Number(e.target.value), end)}
        className="w-full"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={end}
        onChange={e => onChange?.(start, Number(e.target.value))}
        className="w-full"
      />
    </div>
  )
}
