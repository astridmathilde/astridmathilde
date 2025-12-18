import styles from '../assets/scss/components/display.module.scss';

export default function BlockIcon({children}) {
  return (
    <>
    <div className={styles.display + " text-large"}>
    <p>{children}</p>
    </div>
    </>
  )
}