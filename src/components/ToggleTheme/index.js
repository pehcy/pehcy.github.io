import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ToggleContainer = styled.div`
  width: 68px;
  background-color: #c4c4c4;
  cursor: pointer;
  user-select: none;
  border-radius: 2em;
  position: relative;
  padding: 2px;
  height: 28px;
`

const Tick = styled.div`
  cursor: pointer;
  background-color: white;
  padding: 8px 12px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`

export default class ToggleTheme extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { selected, toggleSelected } = this.props
    return (
      <ToggleContainer onClick={toggleSelected}>
        <Tick />
      </ToggleContainer>
    )
  }
}

ToggleTheme.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
}



/*
export default class ToggleTheme extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textDisplay: false
    }
  }

  toggleButton() {
    this.setState((currentState) => ({
      textDisplay: currentState.textDisplay
    }))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleButton()}>Toggle</button>
        { !this.state.textDisplay && this.props.text }
      </div>
    )
  }
}
*/