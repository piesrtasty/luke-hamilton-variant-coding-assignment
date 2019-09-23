import styled from '@emotion/styled'
import { WHITE, LILAC } from '../style/colors'

const MAX_WIDTH = 1100
const MIN_WIDTH = 320

export const Container = styled('div')({
  margin: 'auto',
  maxWidth: MAX_WIDTH,
  minWidth: MIN_WIDTH,
  display: 'flex',
  padding: '0px 15px',
  boxSizing: 'border-box'
})

export const Panel = styled('div')({
  backgroundColor: WHITE,
  padding: 20,
  borderRadius: 5,
  boxShadow: '0 1px 2px 0 rgba(0,0,0,.1)'
})

export const Divider = styled('div')({
  borderBottom: `1px solid ${LILAC}`,
  width: '100%'
})
