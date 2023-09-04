import Script from "next/script";
import { useRouter } from 'next/router';
import styles from "../styles/404.module.css"
import Link from "next/link";
export default function Custom404() {
    const router = useRouter();
    return (
        <>
            <div className={styles.errorContainer}>
                <h1 className={styles.errorHeading}>Error - Page Not Found</h1>
                <p className={styles.errorMessage}>
                    The page you are looking for might have been removed or does not exist.
                </p>
                <Link href="/">
                    <div className={styles.backLink}>Redirecting to the homepage</div>
                </Link>
            </div>
            <Script id="redirect">
                {
                    setTimeout(() => {
                        router.push('/')
                    }
                        , 3000)
                }
            </Script>
        </>
    )
}
