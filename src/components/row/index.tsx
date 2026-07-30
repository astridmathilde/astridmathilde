import style from './style.module.scss';

export default function BlockRow({align, height, children}) {
  return (
    <>
    <div className={style.row} style={{alignItems: align, minHeight: height }}>
     { children }
     </div>
    </>
    );
  }