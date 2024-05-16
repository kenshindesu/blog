import Link from "next/link";
import styles from "styles/nav.module.css"

export default function Nav() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        CUBE
                    </Link>
                </li>
            <li>
                <Link href="/about">
                    Abut
                </Link>
            </li>
            <li>
                <Link href="/blog.2">
                    Blog
                </Link>
            </li>
            </ul>
        </nav>
    )
}