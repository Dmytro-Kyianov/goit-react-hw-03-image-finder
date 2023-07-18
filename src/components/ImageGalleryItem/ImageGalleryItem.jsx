import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li className={css.imageGalleryItem} onClick={this.showModal}>
          <img
            src={webformatURL}
            alt={tags}
            className={css.imageGalleryItemImage}
          />
        </li>
      
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.showModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};