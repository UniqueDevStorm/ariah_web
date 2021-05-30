import '../styles/globals.css'
import Header from "@components/Header";
import Footer from "@components/Footer";

function MyApp({Component, pageProps}) {
    return <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <Component {...pageProps} />
        <div className='flex-grow mb-24' />
        <Footer />
    </div>
}

export default MyApp
