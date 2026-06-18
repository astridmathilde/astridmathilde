import Image from 'next/image';
import { urlFor } from "../../sanity/lib/image";
import styles from '../../assets/scss/components/image.module.scss';

export default function BlockProjectImage(image) {
  return (
    <figure className={styles.image}>
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