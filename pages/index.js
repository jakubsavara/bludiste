import styles from '../styles/Home.module.css'
import { Screen } from '../utils/utils'

export default function Home() {
  const screen = new Screen();

  screen.writeAt(10, 10, 'A');
  screen.writeAt(10, 11, 'h');
  screen.writeAt(10, 12, 'o');
  screen.writeAt(10, 13, 'j');

  return (
    <div className={styles.container}>
      {screen.render()}
    </div>
  )
}
