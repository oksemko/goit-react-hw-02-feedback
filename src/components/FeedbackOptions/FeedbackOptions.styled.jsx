import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
// min-width: 215px;
  margin: 0 auto;
  transform: rotatex(30deg);
	animation: rotateAngle 6s linear infinite;
  margin-top: 30px;
`

export const Button = styled.button`
color: blue;
border: 1px solid grey;
// background-image: linear-gradient(45deg, #f79520, #f37050, #ef4e7b);

 display: block;
	position: relative;
	margin: 0.5em 0;
	padding: 12px 14px;
	cursor: pointer;

	background-image: linear-gradient(55deg, #f79520, #f37050, #ef4e7b);
	border: none;
	border-radius: .8em;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);


	text-transform: uppercase;
  width: 180px;
	font-size: 14px;
	font-family: "Work Sans", sans-serif;
	font-weight: 500;
	letter-spacing: 0.08em;

	mix-blend-mode: color-dodge;
	perspective: 500px;
	transform-style: preserve-3d;

	&:before, &:after {
		--z: 0px;
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		content: '';
		width: 100%;
		height: 100%;
		opacity: 0;
		mix-blend-mode: inherit;
		border-radius: inherit;
		transform-style: preserve-3d;
		transform: translate3d(
			calc(var(--z) * 0px),
			calc(var(--z) * 0px),
			calc(var(--z) * 0px)
		);
	}

	// span {
	// 	mix-blend-mode: none;
	// 	display: block;
	// }

	&:after {
		background-color: #5D00FF;
	}

	&:before {
		background-color: #FF1731;
	}

	&:hover {
		background-color: #FFF65B;
		transition: background .3s 0.1s;
	}

	&:hover:before {
		--z: 0.04;
		animation: translateWobble 2.2s ease forwards;
	}

	&:hover:after {
		--z: -0.06;
		animation: translateWobble 2.2s ease forwards;
	}
}

@keyframes rotateAngle {
	0% {
		transform: rotateY(0deg) rotateX(10deg);
		animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
	}
	25% {
		transform: rotateY(20deg) rotateX(10deg);
	}
	50% {
		transform: rotateY(0deg) rotateX(10deg);
		animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
	}
	75% {
		transform: rotateY(-20deg) rotateX(10deg);
	}
	100% {
		transform: rotateY(0deg) rotateX(10deg);
	}
}

// @keyframes translateWobble {
//   0% {
// 		opacity: 0;
// 		transform: translate3d(
// 			calc(var(--z) * 0px),
// 			calc(var(--z) * 0px),
// 			calc(var(--z) * 0px)
// 		);
//   }
//   16% {
// 		transform: translate3d(
// 			calc(var(--z) * 160px),
// 			calc(var(--z) * 160px),
// 			calc(var(--z) * 160px)
// 		);
//   }
//   28% {
// 		opacity: 1;
// 		transform: translate3d(
// 			calc(var(--z) * 70px),
// 			calc(var(--z) * 70px),
// 			calc(var(--z) * 70px)
// 		);
//   }
//   44% {
// 		transform: translate3d(
// 			calc(var(--z) * 130px),
// 			calc(var(--z) * 130px),
// 			calc(var(--z) * 130px)
// 		);
//   }
//   59% {
// 		transform: translate3d(
// 			calc(var(--z) * 85px),
// 			calc(var(--z) * 85px),
// 			calc(var(--z) * 85px)
// 		);
//   }
//   73% {
// 		transform: translate3d(
// 			calc(var(--z) * 110px),
// 			calc(var(--z) * 110px),
// 			calc(var(--z) * 110px)
// 		);
//   }
// 	88% {
// 		opacity: 1;
// 		transform: translate3d(
// 			calc(var(--z) * 90px),
// 			calc(var(--z) * 90px),
// 			calc(var(--z) * 90px)
// 		);
//   }
//   100% {
// 		opacity: 1;
// 		transform: translate3d(
// 			calc(var(--z) * 100px),
// 			calc(var(--z) * 100px),
// 			calc(var(--z) * 100px)
// 		);
  }

`
