import styled from 'styled-components'

const ActiveLi = styled.li`
  color: ${props => (props.active ? '#0284C7' : '#64748B')};
  margin-left: 10px;
  font-weight: 600;
`
export default ActiveLi
