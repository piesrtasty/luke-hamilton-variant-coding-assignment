import { debounce } from '../../../utils/debounce'
import { Input } from '../text'

const DebouncedInput = ({
  onChange,
  wait = 300,
  placeholder,
  value,
  onKeyDown
}) => {
  const doChange = debounce(onChange, wait)
  const handleChange = event => doChange(event.target.value)
  return (
    <Input
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      onKeyDown={onKeyDown}
    />
  )
}

export default DebouncedInput
