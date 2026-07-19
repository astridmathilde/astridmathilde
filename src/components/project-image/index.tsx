import { Image } from 'next-sanity/image';
import { urlFor } from '../../sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import style from '../image/style.module.scss';

export default function BlockProjectImage({value}) {
  const {width, height} = getImageDimensions(value); 
  
  return (
    <figure className={style.image}>
    <Image
    src={urlFor(value).url()} 
    alt={value.alt || ""}
    loading={value.loading || "lazy"}
    width={width}
    height={height}
    />
    </figure>
  );
}