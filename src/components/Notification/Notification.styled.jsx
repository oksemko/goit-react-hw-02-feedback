import styled from 'styled-components';

export const Span = styled.div`
margin-top: 30px;
  text-align: center;
  color: blue;
  font-size: 25px;
font-weight: 600;
letter-spacing: 0.03em;
text-align: center;

  place-items: center;
  // width: 400px;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
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
