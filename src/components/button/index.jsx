import PropTypes from "prop-types";

function Buttons({ title, btnClass, name, onClickAction }) {
  return (
    <button title={title} className={`${btnClass}`} onClick={onClickAction}>
      {name}
    </button>
  );
}

Buttons.propTypes = {
  title: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClickAction: PropTypes.func,
};

export default Buttons;
