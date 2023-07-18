import { Component } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";
import { IconContext } from 'react-icons';

import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchName } = this.state;
    if (searchName === '') {
      Notiflix.Notify.warning('Please, enter search fetch');
      return;
    }
    this.props.onSubmit(searchName);
    this.setState({ searchName: '' });
  };

  handleInputAdd = e => {
    const { value } = e.target;
    this.setState({ searchName: value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <IconContext.Provider
            value={{
              style: { color: 'black', width: '1.5em', height: '1.5em' },
            }}>
            <button type="submit" className={css.searchFormButton}>
              <CiSearch />
              <span className={css.searchFormButtonLabel}>Search</span>
            </button>
          </IconContext.Provider>
          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleInputAdd}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};