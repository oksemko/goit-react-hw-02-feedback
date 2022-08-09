import PropTypes from 'prop-types';

import { Container, Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(button => {
        return (
          <Button
            key={button}
            type={button}
            onClick={onLeaveFeedback}
            name={button}
          >
            {button}
          </Button>
        )
      }
      )
      }
    </Container>
  );
};




//   return options.map(button => {
//     return (
//       <button
//         key={button}
//         type={button}
//         onClick={onLeaveFeedback}
//         name={button}
//       >
//         {button}
//       </button>
//     );
//   });
// };


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}
