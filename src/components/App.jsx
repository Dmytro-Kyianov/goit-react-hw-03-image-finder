import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getData } from '../utils/getPhotos';
import { Spinner } from './Loader/Loader';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    isLoading: false,
    showBtnLoad: false,
    isEmpty: false,
    error: null,
  };

  componentDidUpdate(p_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }

  setQueryValue = name => {
    if (name !== this.state.query)
      this.setState({
        query: name,
        photos: [],
        isEmpty: false,
        page: 1,
        showBtnLoad: false,
      });
  };

  getPhotos = async (query, page) => {
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await getData(query, page);
      const currentPage = this.state.page;
      const per_page = 15;
      this.setState(({ photos }) => ({
        photos: [...photos, ...hits],
        showBtnLoad: currentPage < Math.ceil(totalHits / per_page),
      }));

      if (hits.length === 0) {
        this.setState({ isEmpty: true });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleAddPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showBtnLoad, isEmpty, isLoading, error, photos } = this.state;
    const show = photos.length > 0;
    return (
      <>
        <div className={css.app}>
          <Searchbar onSubmit={this.setQueryValue} />
          {show && <ImageGallery data={this.state.photos} />}
          {isLoading && <Spinner />}
          {showBtnLoad && <Button onClick={this.handleAddPage} />}
          {error && <p>{error}</p>}
          {isEmpty && (
            <p textalign="center" className={css.warning}>
              Nothing was found for your request! Please try another fech.
            </p>
          )}
        </div>
      </>
    );
  }
}