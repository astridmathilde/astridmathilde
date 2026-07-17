import { Image } from 'next-sanity/image';
import { urlFor } from '../../sanity/lib/image';
import style from '../image/style.module.scss';

export default function BlockProjectImage(image) {
  return (
    <figure className={style.image}>
    <Image
    src={urlFor(image.image).url()}
    width={image.width}
    height={image.height}
    alt={image.alt}
    />
    {image.caption ? (
      <figcaption>{image.caption}</figcaption>
    ) : null}
    </figure>
  );
}