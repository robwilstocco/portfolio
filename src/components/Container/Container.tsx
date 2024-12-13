import styles from './Container.module.css';

interface ContainerType {
  id: string,
  children: React.ReactNode
}

const Container = ({ id, children }: ContainerType) => {
  return (
    <section id={id} className={styles.sectionContainer}>
      {children}
    </section>
  )
}

export default Container;