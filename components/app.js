import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Container, Panel } from '../shared/library/layout'
import { BASE_TEXT } from '../shared/style/typography'
import Skeleton from '../shared/library/skeleton'
import Item from './item'
import Header from './header'

import useInfiniteScroll from '../shared/hooks/infinite-scroll'

const DIRECT = 'direct'
const INFINITE = 'infinite'

const StyledContainer = styled(Container)({
  minHeight: '100%'
})

const StyledPanel = styled(Panel)({
  width: '100%'
})

const List = styled('div')({
  marginTop: 20
})

const Wrapper = styled('div')({
  height: '100%'
})

const Loading = styled('div')({
  marginTop: 20,
  marginBottom: 20
})

const Placeholder = styled('div')({
  ...BASE_TEXT,
  textAlign: 'center',
  fontSize: 16,
  width: '100%',
  margin: 20
})

const App = () => {
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  const [isLoading, setIsLoading] = useInfiniteScroll(() => {
    setTimeout(() => {
      setPage(page + 1)
      fetchResults(INFINITE)
    }, 300)
  })

  const fetchResults = (type = DIRECT) => {
    if (!hasSearched) {
      setHasSearched(true)
    }
    fetch(`/api/variants?keyword=${query ? query : ''}&page=${page}`)
      .then(response => response.json())
      .then(data => {
        type === INFINITE
          ? setResults([...results, ...data.items])
          : setResults(data.items)
        setIsLoading(false)
      })
  }

  const handleOnSubmit = keyword => {
    setPage(1)
    setQuery(keyword)
    setIsLoading(true)
    setResults([])
    fetchResults()
  }

  useEffect(() => {
    setIsLoading(true)
    fetchResults()
  }, [])

  return (
    <Wrapper>
      <StyledContainer>
        <StyledPanel>
          <Header handleOnSubmit={handleOnSubmit} />
          {results.length > 0 ? (
            <List>
              {results.map((result, index) => (
                <Item data={result} shaded={index % 2} />
              ))}
            </List>
          ) : (
            ''
          )}

          {isLoading ? (
            <Loading>
              <Skeleton />
            </Loading>
          ) : (
            ''
          )}
        </StyledPanel>
      </StyledContainer>
    </Wrapper>
  )
}

export default App
