'use client'

interface CheckboxProps {
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange?.(e.target.checked)}
        className="rounded"
      />
      {label}
    </label>
  )
}
