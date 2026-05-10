import style from './style.module.scss'; 

export default function BlockIcon({children}) {
  return (
    <>
    <div className={style.display + " text-large"}>
    <p>{children}</p>
    </div>
    </>
  )
}