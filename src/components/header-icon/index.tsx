import Image from "next/image";
import icon from "../../app/apple-icon.png";
import style from "./style.module.scss";

export default function HeaderIcon() {
  return (
    <Image className={style.icon} src={icon} alt="" />
  )
}