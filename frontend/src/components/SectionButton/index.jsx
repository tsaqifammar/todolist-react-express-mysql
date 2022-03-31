import PropTypes from 'prop-types';

function SectionButton({ className, icon, onClickHandler }) {
  return (
    <button
      className={`text-xl text-white bg-slate-500 p-2 rounded hover:bg-blend-color transition-all ${className}`}
      onClick={(e) => onClickHandler(e)}
    >
      {icon}
    </button>
  );
}

SectionButton.defaultProps = {
  className: '',
  onClickHandler: () => {}
};

SectionButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  onClickHandler: PropTypes.func
};

export default SectionButton;
