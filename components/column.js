import styles from '../assets/scss/components/column.module.scss';

export default function BlockColumn({width, children }) {
  return (
    <>
    <div className={styles.column} style={{width: width + "vw"}}>
     { children }
     </div>
    </>
    );
  }