
import styled from "styled-components";

function App() {
  return (
    <Container>
      welcome to React
      <CityComponent>City Component</CityComponent>
      <WeatherComponent>Weather Component</WeatherComponent>
    </Container>
  );
}

export default App;

const Container=styled.div`
display: flex,
flex-direction: coloumn
`
const CityComponent=styled.div`
display: flex,
flex-direction: coloumn
`
const WeatherComponent=styled.div`
display: flex,
flex-direction: coloumn
`
