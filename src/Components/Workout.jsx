import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "../Components/ExcerciseCard";

export default function Workout(props) {
  const { workout } = props;

  return (
    <SectionWrapper  id={'workout'} header="welcome" title={["The", "DANGER", "zone"]}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => (
          <ExerciseCard  i={i} exercise={exercise} key={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

Workout.propTypes = {
  workout: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // Add other properties here as needed
    })
  ).isRequired,
};
