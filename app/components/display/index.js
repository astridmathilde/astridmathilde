import style from './style.module.scss'; 

export default function BlockDisplay({children}) {
  return (
    <>
    <div className={style.display}>
    <p class={"text-large"}>{children}</p>
    </div>
    </>
  )
}