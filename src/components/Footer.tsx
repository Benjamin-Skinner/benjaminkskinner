import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaChessKnight,
  FaGithub,
} from "react-icons/fa";

const Footer: React.FC = ({}) => {
  return (
    <div className="mt-32 py-12 flex justify-center dark:bg-black">
      <a href="https://www.instagram.com/benjamin.k.skinner/">
        <FaInstagram className="h-[50px] w-[50px] mx-2 hover:scale-110 fill-slate-600 dark:fill-white" />
      </a>
      <a href="https://www.linkedin.com/in/ben-skinner-profile/">
        <FaLinkedin className="h-[50px] w-[50px] mx-2 hover:scale-110 fill-slate-600 dark:fill-white" />
      </a>
      <a href="https://twitter.com/Benjmin_skinner">
        <FaTwitter className="h-[50px] w-[50px] mx-2 hover:scale-110 fill-slate-600 dark:fill-white" />
      </a>
      <a href="https://www.chess.com/member/the-skinner">
        <FaChessKnight className="h-[50px] w-[50px] mx-2 hover:scale-110 fill-slate-600 dark:fill-white" />
      </a>
    </div>
  );
};

export default Footer;
