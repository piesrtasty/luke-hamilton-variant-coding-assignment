import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import DebouncedInput from '../shared/library/inputs/debounced'
import Button from '../shared/library/buttons/simple'
import { BASE_TEXT } from '../shared/style/typography'
import { WHITE, LILAC, FOAM } from '../shared/style/colors'

const Container = styled('div')({
  display: 'flex',
  ' > div': {
    marginRight: 10
  }
})

export const StyledButton = styled(Button)({
  height: 50,
  paddingLeft: 15,
  paddingRight: 15
})

const InputWrapper = styled('div')({
  width: '100%'
})

const Suggestions = styled('div')({
  position: 'absolute',
  backgroundColor: WHITE,
  maxHeight: 300,
  overflow: 'scroll',
  width: 190,
  borderRadius: 5,
  boxShadow: '0 1px 10px 1px rgba(0,0,0,.15)'
})

const Suggestion = styled('div')(
  {
    ...BASE_TEXT,
    padding: 10,
    borderBottom: `1px solid ${LILAC}`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: FOAM
    }
  },
  ({ selected }) => ({
    backgroundColor: selected ? FOAM : WHITE
  })
)

const SuggestionsInput = ({ handleOnSubmit }) => {
  const [suggestions, setSuggestions] = useState([])
  const [keyword, setKeyword] = useState('')
  const [currentVal, setCurrentVal] = useState('')
  const [suggestionsVisible, setSuggestionsVisible] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const inputEl = useRef()
  const suggestionsEl = useRef()

  const fetchSuggestions = keyword => {
    setKeyword(keyword)
    fetch(`/api/genes?keyword=${keyword}`)
      .then(response => response.json())
      .then(({ data }) => {
        setSuggestions(data)
      })
  }

  const handleSelect = item => {
    setCurrentVal(item)
    setSuggestionsVisible(false)
    setKeyword(item)
    inputEl.current.children[0].focus()
    handleOnSubmit(item)
  }

  const handleOnChange = keyword => {
    keyword.length ? setSuggestionsVisible(true) : setSuggestionsVisible(false)
    fetchSuggestions(keyword)
  }

  const updateSelectedIndex = change => {
    if (selectedIndex && suggestionsVisible) {
      const newIndex = selectedIndex + change
      if (newIndex > 0) {
        setSelectedIndex(newIndex)
      }
      const elToScroll = suggestionsEl.current.children[selectedIndex]
      if (elToScroll) {
        elToScroll.scrollIntoViewIfNeeded()
      }
    } else {
      setSelectedIndex(1)
    }
  }

  const handleOnKeyDown = ({ keyCode }) => {
    if (keyCode === 38) {
      updateSelectedIndex(-1)
    } else if (keyCode === 40) {
      updateSelectedIndex(1)
    } else if (keyCode === 13) {
      handleSelect(suggestions[selectedIndex - 1])
    }
  }

  return (
    <Container>
      <InputWrapper ref={inputEl}>
        <DebouncedInput
          value={currentVal}
          placeholder="Search for a gene"
          onKeyDown={handleOnKeyDown}
          setCurrentVal={setCurrentVal}
          onChange={keyword => {
            handleOnChange(keyword)
          }}
        />
        {suggestions.length > 0 && suggestionsVisible && (
          <Suggestions ref={suggestionsEl}>
            {suggestions.map((item, index) => (
              <Suggestion
                selected={index + 1 === selectedIndex}
                onClick={() => handleSelect(item)}
              >
                {item}
              </Suggestion>
            ))}
          </Suggestions>
        )}
      </InputWrapper>
      <StyledButton
        onClick={() => {
          setSuggestionsVisible(false)
          console.log('inside keyword', keyword)
          handleOnSubmit(keyword)
        }}
      >
        Submit
      </StyledButton>
    </Container>
  )
}

export default SuggestionsInput
