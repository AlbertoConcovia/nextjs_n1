
const Footer = () => {
    
    return (
    
    <footer>
      
      <div>

            <div class="row row-cols-1">

            <div class="col-sm-2 col-md-2">
                <a href="Privacy Policy.php">Privacy Policy</a>
            </div>

            <div class="col-sm-2 col-md-2">
                <a href="Privacy Policy.php">Terms & Conditions</a>
            </div>

            <div class="col-sm-2 col-md-2">
                <a href="Privacy Policy.php">Terms of Use</a>
            </div>

            <div class="col-sm-2 col-md-2">
                <a href="Privacy Policy.php">Letter of Authority</a>
            </div>

            <div class="col-sm-2 col-md-2">
                <a href="Privacy Policy.php">Cookie Policy</a>
            </div>

            </div>  

            <br/>                  
            <div class="row row-cols-1">
            <div class="col">
                Alberto Concovia
            </div>
            </div>  
            </div>

      <br/>
      <br/>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
      <br/>
      <br/>
    
            <style jsx>{`
         
      footer {
        width: 100%;
        height: 150px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #4c4c4c;
        color: white ;
        font-size: 0.8rem;
      }
      
      footer img {
        margin-left: 0.2rem;
      }

      img {
        background: #4c4c4c;
      }      
      
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }


      
      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
      
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 800px; 
        margin: 1rem;
        padding: 1rem;
      }
      
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      
      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }
      
      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
      
      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      
      .logo {
        height: 1em;
      }
      
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
      `}</style>
      
      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }
      
      * {
        box-sizing: border-box;
      }
      
      `}</style>
      

      </footer>
    );
  }
   
  export default Footer;
