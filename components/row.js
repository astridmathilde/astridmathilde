import styles from '../assets/scss/components/row.module.scss';

export default function BlockRow({align, height, children}) {
  return (
    <>
    <div className={styles.row} style={{alignItems: align, minHeight: height }}>
     { children }
     </div>
    </>
    );
  }