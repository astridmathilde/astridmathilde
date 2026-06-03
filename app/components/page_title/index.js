import style from './style.module.scss'; 

export default function BlockTitle({children}) {
return <h2 className={style.title}>{children}</h2>
}