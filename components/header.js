import React from 'react'
import styled from '@emotion/styled'
import SuggestionInput from './suggestion-input'
import { BASE_TEXT, WEIGHT } from '../shared/style/typography'
import { WHITE, DALI } from '../shared/style/colors'
import { FIELD_LABELS, HEAD_SLUGS } from '../shared/constants/fields'

const Container = styled('div')({
  display: 'flex',
  backgroundColor: WHITE,
  position: 'sticky',
  top: 0,
  margin: -20,
  padding: 20,
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
})

const HeadField = styled('div')({
  ...BASE_TEXT,
  fontWeight: WEIGHT.BOLD,
  width: 100,
  padding: 10,
  borderRight: `1px solid ${WHITE}`,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  justifyContent: 'center',
  textAlign: 'center'
})

const TableHead = styled('div')({
  display: 'flex',
  backgroundColor: DALI,
  marginTop: 20,
  color: WHITE
})

const Header = ({ handleOnSubmit }) => {
  return (
    <Container>
      <SuggestionInput handleOnSubmit={handleOnSubmit} />
      <TableHead>
        {HEAD_SLUGS.map((slug, index) => (
          <HeadField key={`head-field-${slug}-${index}`}>
            {FIELD_LABELS[slug]}
          </HeadField>
        ))}
        <HeadField>More Info</HeadField>
      </TableHead>
    </Container>
  )
}

export default Header
