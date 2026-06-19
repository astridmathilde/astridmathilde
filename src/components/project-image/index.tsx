import Image from 'next/image';
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
    priority={image.priority == 'true' ? true : false}
    />
    {image.caption ? (
      <figcaption>{image.caption}</figcaption>
    ) : null}
    </figure>
  );
}