// Style your elements here
import Styled from 'styled-components'

export const ListItem = Styled.li`
    margin-right:5px;
`

export const GradientButton = Styled.button`
    opacity:${props => (props.isActive ? 1 : 0.5)};
    text-align:center;
    border:none;
    cursor:pointer;
    outline:none;
    color: ${props => (props.isActive ? '#334155' : '#1e293b')};
`
