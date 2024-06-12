import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const Contact = () => {
    return ( 
      <>
        <Navigation />
          <div className="pageContainer">
            <p>
              <ul>
                <li>Phone: +353 87 947 7278</li>
                <li>Email: jolmcn@gmail.com</li>
                <li><a href="https://github.com/jolmcn" target="_blank" rel="noreferrer" >Github</a></li>
                <li><a href="https://www.linkedin.com/in/jack-o-leary-mcneice-b9a73139/" target="_blank" rel="noreferrer" >LinkedIn</a></li>
                <li><a href="https://www.instagram.com/jolmcn/" target="_blank" rel="noreferrer" >Instagram</a></li>
                <li><a href="https://drive.google.com/file/d/1CVh0U3X7VjVMlswtsPOFpNnXWeZ1dgb1/view?usp=sharing" target="_blank" rel="noreferrer" >CV</a></li>
              </ul>
            </p>
          </div>
        <Footer />
      </>
    )
  };
  
  export default Contact;