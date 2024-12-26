import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-white dark:bg-black w-full md:w-2/3 m-auto mt-[100px] shadow-[0_0_50px_1px_rgba(0,0,0,.4)] dark:shadow-[0_0_50px_1px_rgba(255,255,255,.2)] mb-32 rounded-xl">
        <Navbar />
        <main className="mx-0 xl:mx-32">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
