import { Image } from 'next-sanity/image';
import { urlFor } from '../../sanity/lib/image';
import style from '../image/style.module.scss';

export default function BlockProjectImage({value, width, height, alt}) {
  return (
    <figure className={style.image}>
    <Image
    src={urlFor(value).url()}
    width={width}
    height={height}
    alt={alt}
    />
    </figure>
  );
}