import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Container, Panel } from '../shared/library/layout'
import Skeleton from '../shared/library/skeleton'
import Item from './item'
import Header from './header'

import useInfiniteScroll from '../shared/hooks/infinite-scroll'

const DIRECT = 'direct'

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

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])

  const [isLoading, setIsLoading] = useInfiniteScroll(() => {
    setTimeout(() => {
      setPage(page + 1)
      fetchResults()
    }, 300)
  })

  const fetchResults = type => {
    fetch(`/api/variants?keyword=${searchTerm}&page=${page}`)
      .then(response => response.json())
      .then(data => {
        type === DIRECT
          ? setResults(data.items)
          : setResults([...results, ...data.items])
        setIsLoading(false)
      })
  }

  const handleOnSubmit = keyword => {
    setIsLoading(true)
    setSearchTerm(keyword)
    setResults([])
    fetchResults(DIRECT)
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
          <List>
            {results.map((result, index) => (
              <Item data={result} shaded={index % 2} />
            ))}
          </List>
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
