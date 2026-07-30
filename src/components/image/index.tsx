import { Image } from 'next-sanity/image';
import { urlFor } from '../../sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import style from './style.module.scss';

export default function BlockImage({value, caption, alt}) {
   const {width, height} = getImageDimensions(value); 

  return (
    <>
    <figure className={style.image}>
    <Image
    src={urlFor(value).url()}
    alt={alt}
    loading="lazy"
    width={width}
    height={height}
    />
     {caption ? (
        <figcaption> 
          {caption}
        </figcaption>
      ) : (
        null
      )}
    </figure>
    </>
    );
  }