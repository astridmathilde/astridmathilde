import style from './style.module.scss';

export default function BlockColumn({width, children, order }) {
  return (
    <>
    <div className={style.column} style={{width: width + "%", order: order}}>
     { children }
     </div>
    </>
    );
  }