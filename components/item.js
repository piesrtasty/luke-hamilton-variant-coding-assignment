import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { BASE_TEXT, WEIGHT } from '../shared/style/typography'
import { OTHER_SLUGS, FIELD_LABELS } from '../shared/constants/fields'
import { WHITE, FOAM, NIAGRA, ALABASTER } from '../shared/style/colors'
import { Divider } from '../shared/library/layout'

const StyledDivider = styled(Divider)({
  borderColor: WHITE
})

const Container = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      backgroundColor: `${FOAM} !important`
    }
  },
  ({ expanded, shaded }) => ({
    backgroundColor: `${expanded ? FOAM : !shaded ? ALABASTER : WHITE}`
  })
)

const Field = styled('div')({
  ...BASE_TEXT,
  width: 100,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: 10,
  ' > a': {
    color: NIAGRA
  }
})

const Row = styled('div')({
  display: 'flex',
  cursor: 'pointer'
})

const MetaData = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: 10
})

const Label = styled('div')({
  fontWeight: WEIGHT.BOLD
})

const Value = styled('div')({})

const Pair = styled('div')({ ...BASE_TEXT, marginBottom: 10 })

const Item = ({
  shaded,
  data,
  data: {
    gene,
    nucleotideChange,
    proteinChange,
    alias,
    region,
    reportedClassification,
    lastEvaluated,
    lastUpdated,
    url
  }
}) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Container expanded={expanded} shaded={shaded}>
      <Row onClick={() => setExpanded(!expanded)}>
        <Field>{gene}</Field>
        <Field>{nucleotideChange}</Field>
        <Field>{proteinChange}</Field>
        <Field>{alias}</Field>
        <Field>{region}</Field>
        <Field>{reportedClassification}</Field>
        <Field>{lastEvaluated}</Field>
        <Field>{lastUpdated}</Field>
        <Field>
          <a target="_blank" href={url}>
            ClinVar
          </a>
        </Field>
      </Row>
      {expanded && (
        <Fragment>
          <StyledDivider />
          <MetaData>
            {OTHER_SLUGS.map(slug => (
              <Pair>
                <Label>{FIELD_LABELS[slug]}</Label>
                {Array.isArray(data[slug]) ? (
                  data[slug].map(item => <Value>{item}</Value>)
                ) : (
                  <Value>{data[slug]}</Value>
                )}
              </Pair>
            ))}
          </MetaData>
        </Fragment>
      )}
    </Container>
  )
}

export default Item
