import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/head';

const Layout = ({ children }) => {
  
  return (

    <div className="content">
    
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>One Financial Adviser - Home Page</title>
          <link rel="icon" href="/ofa.ico" />
      </Head>

      <Navbar />

          { children }
          
      <Footer />
       
       
      <style jsx global>{`
      
      nav {
        line-height: 1.15;
        font-size: 3rem;
        color: white;
        background: #00809c;
        height: 100px;
        width: 100%;
      }

      .logo {
        height: 1em;
      }

      .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: white;
      }

      .title {
        line-height: 1.15;
        font-size: 3rem;
        color: white;
        background: #00809c;
        height: 100px;
        width: 100%;
      }

      
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #00809c;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo {
        height: 1em;
      }

      `}</style>



    </div>
  );
}
 
export default Layout;