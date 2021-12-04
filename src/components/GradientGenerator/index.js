import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  GenerateButton,
  MainContainer,
  ButtonsList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    directionId: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,  #014f7b`,
  }

  onClickGenerate = () => {
    const {directionId, firstColor, secondColor} = this.state

    this.setState({
      gradientValue: `to ${directionId}, ${firstColor}, ${secondColor}`,
    })
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  getDirectionType = value => {
    this.setState({directionId: value})
  }

  render() {
    const {firstColor, secondColor, gradientValue, directionId} = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <MainContainer>
          <h1>Generate a CSS Color Gradient</h1>
          <p>choose direction</p>
          <ButtonsList>
            {gradientDirectionsList.map(eachButton => (
              <GradientDirectionItem
                key={eachButton.directionId}
                gradientDetails={eachButton}
                getDirectionType={this.getDirectionType}
                isActive={directionId === eachButton.value}
              />
            ))}
          </ButtonsList>
          <p>Pick the Colors</p>
          <p>{firstColor}</p>
          <input
            type="color"
            onChange={this.onChangeFirstColor}
            value={firstColor}
          />
          <p>{secondColor}</p>
          <input
            type="color"
            onChange={this.onChangeSecondColor}
            value={secondColor}
          />
          <GenerateButton onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
