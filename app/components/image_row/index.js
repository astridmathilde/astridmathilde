import style from './style.module.scss'; 

export default function BlockImageRow({children }) {
  return (
    <>
    <div className={style.image_row}>
     { children }
     </div>
    </>
    );
  }