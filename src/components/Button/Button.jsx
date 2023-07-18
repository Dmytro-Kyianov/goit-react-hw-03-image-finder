import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css.wrapper}>
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};