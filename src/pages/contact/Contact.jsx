import Navbar from "../../components/navbar/Navbar";
import StyledContact, { Icons, IconsSection } from "./Contact.styled";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-4">
          Please Contact Us For More Delicious Recipes
        </h1>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Message
            </label>

            <textarea
              className="form-control"
              placeholder="Enter your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-danger mb-4">Submit</button>
          </div>
        </form>
      </div>

      <StyledContact>
        <IconsSection>
          <Icons href="https://github.com/Muratbzc" target="_blank">
            <FaGithub />
          </Icons>
          <Icons
            href="https://www.linkedin.com/in/murat-bezci-28256a255/"
            target="_blank"
          >
            <FaLinkedin />
          </Icons>
          <Icons>
            <FaInstagramSquare />
          </Icons>
        </IconsSection>
      </StyledContact>
    </div>
  );
};

export default Contact;
