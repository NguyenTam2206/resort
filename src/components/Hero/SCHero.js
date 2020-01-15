import styled from 'styled-components';
import defaultBcg from '../../images/room-1.jpeg';

const SCHero = styled.header`
  min-height: calc(100vh - 66px);
  background: url(${props => props.image ? props.image : defaultBcg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
export default SCHero;