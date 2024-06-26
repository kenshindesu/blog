import Social from "./social"
import styles from "styles/contact.module.css"

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.stack}>Contact</h3>
            <Social iconSize="30px" />
        <address>cube@web.mail.address</address>
        </div>
    )
}