// Write your code here

import {ListItem, GradientButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, getDirectionType, isActive} = props
  const {value, displayText} = gradientDetails

  const onClickType = () => {
    getDirectionType(value)
  }

  return (
    <ListItem>
      <GradientButton type="button" onClick={onClickType} isActive={isActive}>
        {displayText}
      </GradientButton>
    </ListItem>
  )
}
export default GradientDirectionItem
