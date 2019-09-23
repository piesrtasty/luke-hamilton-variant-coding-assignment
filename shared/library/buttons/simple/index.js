import styled from '@emotion/styled'
import { WHITE, LILAC, FOAM, NIAGRA } from '../../../style/colors'
import { BASE_TEXT } from '../../../style/typography'

export default styled('button')({
  ...BASE_TEXT,
  outline: 0,
  borderRadius: 3,
  height: 34,
  border: `1px solid ${LILAC}`,
  backgroundColor: WHITE,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: FOAM,
    borderColor: NIAGRA
  },
  '&:disabled': {
    cursor: 'not-allowed'
  }
})
