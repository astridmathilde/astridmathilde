import Image from 'next/image';
import style from './style.module.scss'; 

export default function BlockImage(meta) {
  return (
    <>
    <figure className={style.image + ' ' + meta.class}>
    <Image src={meta.url} alt={meta.alt} placeholder={meta.placeholder == 'false' ? 'empty' : 'blur'} priority={meta.priority == 'true' ? true : false} sizes={meta.sizes} />
     {meta.caption ? (
        <figcaption> 
          {meta.caption}
        </figcaption>
      ) : (
        null
      )}
    </figure>
    </>
    );
  }