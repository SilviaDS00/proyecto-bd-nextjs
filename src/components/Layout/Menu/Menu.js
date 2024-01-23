import * as styles from "./Menu.module.scss";
import Link from "next/link";


export function Menu() {
  return (
    <div>
      <div className={styles.categories}>
        <Link href="/">Inicio</Link>
        <Link href="/test">Hacer test</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </div>
  );
}
