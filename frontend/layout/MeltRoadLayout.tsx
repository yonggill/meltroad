import ProfileCard from "@/components/ProfileCard";
import Shape from "@/components/Shape";
import ImageView from "@/components/popup/ImageView";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Fragment } from "react";

const MeltRoadLayout = ({ children, homePage = false }: { children: any, homePage?: boolean }) => {
  return (
    <Fragment>
      <ImageView />
      {/* header part start */}
      <Header />
      {/* header part end */}
      {/* main area part start */}
      <main>
        <section className={homePage ? "home-area" : "content-box-area mt-4"}>
          <div className="container">
            <div className="row g-4">
              {children}
              {homePage ? '' : <div className="col-xl-3"><ProfileCard /></div>}
            </div>
          </div>
        </section>
        {/* background shape area start */}
        <Shape />
        {/* background shape area end */}
      </main>
      {/* main area part end */}
      {/* footer part start */}
      <Footer />
      {/* footer part end */}
    </Fragment>
  );
};
export default MeltRoadLayout;
