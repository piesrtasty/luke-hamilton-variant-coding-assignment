import React from 'react'
import styled from '@emotion/styled'
import { shine } from '../style/animations'
import { LILAC, ALABASTER, WHITE } from '../style/colors'

const BASE_COLOR = LILAC
const SHINE_COLOR = ALABASTER

const SKELETON_COUNT = 3

const shineGradient = (baseColor, shineColor) =>
  `linear-gradient(90deg, ${baseColor} 0px, ${shineColor} 40px, ${baseColor} 80px)`

const Container = styled('div')({})

const Line = styled('div')({
  backgroundImage: shineGradient(BASE_COLOR, SHINE_COLOR),
  backgroundSize: '600',
  width: '100%',
  height: 16,
  borderRadius: 3,
  marginBottom: 10,
  animation: `${shine(-110, 450)} 1.6s infinite linear`
})

const Item = () => <Line />

const Skeleton = () => {
  const items = []
  for (let i = 0; i < SKELETON_COUNT; i += 1) {
    items.push(<Item />)
  }
  return <Container>{items}</Container>
}

export default Skeleton
