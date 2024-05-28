import React from 'react';
import PropTypes from 'prop-types';

export default function ExerciseCard(props) {
    const { exercise, i } = props;
    return (
        <div>
            ExerciseCard
        </div>
    );
}

ExerciseCard.propTypes = {
    exercise: PropTypes.object.isRequired // Adjust the type based on the expected shape of the exercise prop
};
