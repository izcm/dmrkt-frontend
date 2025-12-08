'use client'

interface RangeSliderProps {
  min?: number
  max?: number
  value?: number
  onChange?: (value: number) => void
}

export function RangeSlider({ min = 0, max = 100, value, onChange }: RangeSliderProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={e => onChange?.(Number(e.target.value))}
      className="w-full"
    />
  )
}
