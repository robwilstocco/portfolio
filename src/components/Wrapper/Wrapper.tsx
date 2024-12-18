import styles from './Wrapper.module.css';

type Wrapper = {
  children: React.ReactNode,
  direction?: 'row' | 'column',
  animation?: 'animation-revealing-left' | 'animation-revealing-right' | ''
}
const Wrapper = ({ children, direction = 'row', animation = '' }: Wrapper) => {
  return (
    <div className={`${styles.wrapper} ${animation}`} style={{ flexDirection: `${direction}` }}>
      {children}
    </div>
  )
}

export default Wrapper;