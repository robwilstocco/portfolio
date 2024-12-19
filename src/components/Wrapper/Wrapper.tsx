import styles from './Wrapper.module.css';

interface WrapperType {
  children: React.ReactNode,
  direction?: 'row' | 'column',
  animation?: 'animation-revealing-left' | 'animation-revealing-right' | ''
}
const Wrapper = ({ children, direction = 'row', animation = '' }: WrapperType) => {
  return (
    <div className={`${styles.wrapper} ${animation}`} style={{ flexDirection: `${direction}` }}>
      {children}
    </div>
  )
}

export default Wrapper;