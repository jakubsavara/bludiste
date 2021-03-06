import styles from '../styles/Home.module.css'
import { Screen } from '../utils/utils'

export default function Home() {
  const screen = new Screen();

  for (let s = 0; s < 80; s = s + 1) {
    screen.writeAt(0, s, '═');
    screen.writeAt(24, s, '═');
  }

  for (let r = 0; r < 25; r = r + 1) {
    screen.writeAt(r, 0, '║');
    screen.writeAt(r, 79, '║');
  }
  screen.writeAt(0, 0, '╔');
  screen.writeAt(0, 79, '╗');
  screen.writeAt(24, 0, '╚');
  screen.writeAt(24, 79, '╝');
  screen.writeAt(0, 1, ' ');
  screen.writeAt(24, 78, ' ');
  screen.writeAt(12, 40, '╬');

  return (
    <div className={styles.container}>
      {screen.render()}
    </div>
  )
}
