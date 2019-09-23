import { debounce } from '../../../utils/debounce'
import { Input } from '../text'

const DebouncedInput = ({
  onChange,
  wait = 300,
  placeholder,
  onKeyDown,
  setCurrentVal
}) => {
  const doChange = debounce(onChange, wait)
  const handleChange = event => doChange(event.target.value)
  return (
    <Input
      onChange={e => {
        setCurrentVal(e.target.value)
        handleChange(e)
      }}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  )
}

export default DebouncedInput
