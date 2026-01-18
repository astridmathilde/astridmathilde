import styles from '../assets/scss/components/container.module.scss';

export default function Container({children }) {
  return (
    <>
    <div className={styles.container}>
     { children }
     </div>
    </>
    );
  }