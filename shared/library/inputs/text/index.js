import styled from '@emotion/styled'
import { BASE_TEXT, WEIGHT } from '../../../style/typography'
import {
  ALABASTER,
  DETROIT,
  LILAC,
  POWDER_BLUE,
  FOAM,
  BLUSH
} from '../../../style/colors'

export const Input = styled('input')({
  ...BASE_TEXT,
  outline: 'none',
  padding: 10,
  paddingRight: 50,
  borderRadius: 3,
  boxSizing: 'border-box',
  border: '1px solid',
  height: 50,
  width: '100%',
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: ALABASTER
  },
  borderColor: LILAC,
  '&:hover': {
    borderColor: FOAM
  }
})
