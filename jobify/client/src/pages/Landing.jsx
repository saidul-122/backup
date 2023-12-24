import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg'
// import logo from '../assets/images/logo.svg'
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> App
          </h1>
          <p>
          I'm baby blackbird spyplane fanny pack messenger bag slow-carb paleo ascot pork belly keytar sustainable artisan tofu put a bird on it poutine everyday carry chicharrones. Affogato disrupt artisan, intelligentsia single-origin coffee ennui slow-carb DIY prism ethical blue bottle air plant sriracha gatekeep four loko. Sartorial chicharrones pour-over, PBR&B 90's DIY hella leggings neutra portland tote bag deep v. Succulents bicycle rights butcher shabby chic, shaman kitsch gastropub air plant enamel pin migas vape narwhal hoodie blackbird spyplane art party.
          </p>
          <Link to='/register' className='btn register-link'>Register
          </Link>
          <Link to='/login' className='btn'>login / Demo user
          </Link>
        </div>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </Wrapper>
  );
};

  


export default Landing