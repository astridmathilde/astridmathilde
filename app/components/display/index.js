import style from './style.module.scss'; 

export default function BlockDisplay({children}) {
  return (
    <>
    <div className={style.display}>
    <p>{children}</p>
    </div>
    </>
  )
}