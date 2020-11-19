import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props)  => {
  const [state, setState] = useState({ name: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name } = steps;
    setState({ name });
  }, [props])

    const { name } = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>{name.value} is your most important document</td> 
            </tr>
          </tbody>
        </table>
      </div>
    )
    };


Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;