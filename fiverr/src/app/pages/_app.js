import Footer from "../components/Footer";
import "@/styles/globals.css"
export default function App({Components, pageProps}){
    return(
        <div>
            <div className={`mb-auto w-full mx-auto`}>
                <Components {...pageProps}/>;
            </div>
        </div>
    )
}