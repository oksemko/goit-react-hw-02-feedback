import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #010101;
  place-items: center;
`

export const Title = styled.a`
font-family: "Work Sans", sans-serif;
font-size: 30px;
font-weight: 600;
letter-spacing: 0.03em;
text-align: center;
border-radius: 10px;
box-shadow: 0 15px 25px rgba(0,0,0,.6);
background-color: rgba(0,0,0,0.5);


  place-items: center;
  width: 400px;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 30px;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
`
