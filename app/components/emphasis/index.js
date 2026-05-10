import style from './style.module.scss'; 

export default function BlockEmphasis({children}) {
  return (
    <>
        <div className={style.emphasis}>{children}</div>
    </>
  )
}