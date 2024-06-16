export default function Cell({
  value,
  name,
  editable,
  onChange,
}: {
  value: any
  name: string
  editable: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return editable ? (
    <input type="text" value={value} name={name} onChange={onChange} />
  ) : (
    <>{value}</>
  )
}
