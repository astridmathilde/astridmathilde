import style from "../assets/scss/components/emphasis.module.scss";

export default function BlockEmphasis({children}) {
  return (
    <>
        <div className={style.emphasis}>{children}</div>
    </>
  )
}