import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{children}</div>
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
