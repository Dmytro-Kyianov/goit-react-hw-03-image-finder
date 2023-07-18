import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ data }) => {
  return (
    <ul className={css.imageGallery}>
      {data.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array,
};