import PacmanLoader from "react-spinners/PacmanLoader";
import css from "../styles/Login.module.css"
import Layout  from "./Layout";
export default function Loader() {
    return (
        <Layout>
        <div className={css.loaderContainer}>
            <PacmanLoader
                className={css.loader}
                color={"#F54748"}
                // loading={loader}
                // cssOverride={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
        </Layout>
    )
}