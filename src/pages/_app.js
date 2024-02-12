import "@/styles/mystyle.css";
import Layout from "./components/Layout";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/heroshape.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
