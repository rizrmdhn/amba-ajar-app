import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import TitleSVG from "../assets/amba-ajar.svg";
import BackgroundIcon from "../assets/Group.svg";
import WicidaLogo1 from "../assets/STMIK-WICIDA-1.svg";
import IconPage2 from "../assets/Frame.svg";
import ZigZagIcon from "../assets/zigzag.svg";
import Icon3 from "../assets/OrangDuduk.svg";
import BookIcon from "../assets/Book.svg";
import BrainIcon from "../assets/Brain.svg";
import ChartIcon from "../assets/Chart.svg";
import FacebookIcon from "../assets/Facebook.svg";
import InstagramIcon from "../assets/Instagram.svg";
import LinkedinIcon from "../assets/Linkedin.svg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="LandingPage">
      <div id="page1" className="flex justify-center">
        <div className="container mt-6">
          <div className="col-1 flex">
            <div className="row flex-initial w-96 m-auto">
              <img className="w-44" src={TitleSVG} alt="Title" />
            </div>
            <div className="row w-96 m-auto">
              <Buttons
                title="Register"
                btnClass="register landing-page-register w-32 h-8 rounded text-black text-xl font-bold"
                name="Register"
                onClickAction={() => {
                  navigate("/register");
                }}
              />
              <Buttons
                title="Login"
                btnClass="login w-32 h-8 bg-blue-900 rounded-full text-white text-xl font-bold"
                name="Login"
                onClickAction={() => {
                  navigate("/login");
                }}
              />
            </div>
          </div>
          <div className="col-2 flex m-auto mt-6">
            <div className="row flex-initial w-96 m-auto">
              <div className="row font-bold text-5xl">
                Tracking Belajar mu! Bersama Kami
              </div>
              <div className="row font-bold text-xl">
                Belajar mudah dengan adanya fitur - fitur yang dapat membantu-mu
                memahami bagaimana progress belajar mu selama ini
              </div>
              <div className="row w-96">
                <Buttons
                  title="Get-Started"
                  name="Get Started"
                  btnClass="Get-Started w-72 h-24 bg-black text-white rounded-2xl mt-5 text-2xl font-bold"
                  onClickAction={() => {
                    navigate("/login");
                  }}
                />
              </div>
            </div>
            <div className="row m-auto">
              <img
                className="landingPage-bg-1 w-96"
                src={BackgroundIcon}
                alt="BackgroundIcon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="breaker mt-2 flex justify-center">
        <div className="container">
          <div className="col-1 flex m-auto">
            <div className="row flex-initial w-96 m-auto">
              <div className="row font-bold text-4xl">
                <h1 className="text-center">Partnership</h1>
              </div>
              <div className="row font-bold text-xl mt-10 mb-10">
                <img className="m-auto" src={WicidaLogo1} alt="Wicida-logo-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="page2" className="flex justify-center">
        <div className="container">
          <div className="col-1 flex m-auto">
            <div className="row flex-initial w-96 m-auto">
              <img
                className="landingPage-bg-2 w-96"
                src={IconPage2}
                alt="IconPage2"
              />
            </div>
            <div className="row flex-initial w-96 m-auto">
              <div className="row font-bold text-5xl">
                Liat Keseharian Anda Dalam Belajar.
              </div>
              <div className="row font-bold text-base mt-5">
                Proses belajar yang dapat di lacak adalah proses yang tentu akan
                membuat bagaimana pandagan pelajar sangatlah menarik dan menjadi
                sebuah kebangaan tertentu dalam melihat peroses belajarnya.
              </div>
            </div>
          </div>
          <img
            className="landingPage-bg-3 w-screen mt-5"
            src={ZigZagIcon}
            alt="ZigZagIcon"
          />
          <div className="col-2 text-center">
            <div className="mt-10 font-bold text-3xl">
              Apa saja manfaat Tracking proses belajar?
            </div>
          </div>
          <div className="col-3 flex m-auto">
            <div className="row flex-initial w-96 m-auto">
              <div className="col-1 flex flex-row">
                <div className="icon-img m-auto mr-5">
                  <img
                    className="landingPage-bg-5 w-32"
                    src={BookIcon}
                    alt="BookIcon"
                  />
                </div>
                <div className="text font-bold m-auto">
                  Progres yang tersusun dengan segala fitur yang ada untuk
                  memudahkan dalam peroses selama belajar
                </div>
              </div>
              <div className="col-2 flex flex-row mt-5">
                <div className="icon-img m-auto mr-5">
                  <img
                    className="landingPage-bg-6 w-32"
                    src={BrainIcon}
                    alt="BrainIcon"
                  />
                </div>
                <div className="text font-bold m-auto">
                  Membantu sistem ingatan dalam proses belajar dengan merangsang
                  memori dengan konsep reward dan kemajuan
                </div>
              </div>
              <div className="col-3 flex flex-row mt-5">
                <div className="icon-img m-auto mr-5">
                  <img
                    className="landingPage-bg-7 w-40"
                    src={ChartIcon}
                    alt="ChartIcon"
                  />
                </div>
                <div className="text font-bold m-auto">
                  Menjadikan data statistik yang ada selama proses belajar
                  menjadi bahan acuan untuk mengetahui sebagus apa pembeljaran
                  yang telah dilakukan
                </div>
              </div>
            </div>
            <div className="row flex-initial w-96 m-auto">
              <img
                className="landingPage-bg-4 w-full mt-5"
                src={Icon3}
                alt="Icon3"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="page3" className="flex justify-center">
        <div className="container">
          <div className="col m-10">
            <div className="row font-bold text-center text-5xl">
              Mulai Tracking Proses Belajarmu Sekarang
            </div>
            <div className="row mt-20 mb-20 text-center">
              <Buttons
                title="Gabung-Sekarang"
                btnClass="Gabung-Sekarang w-46 h-20 p-5 rounded text-white text-3xl font-bold bg-black rounded-3xl"
                name="Gabung Sekarang"
                onClickAction={() => {
                  navigate("/login");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="page4" className="flex justify-center">
        <div className="container flex flex-col items-center">
          <div className="col-1 text-center font-bold text-white m-auto text-5xl mt-24">
            LOGO
          </div>
          <div className="col-2 flex flex-row mt-5">
            <img
              className="landingPage-bg-5 w-16 mr-5"
              src={FacebookIcon}
              alt="FacebookIcon"
            />
            <img
              className="landingPage-bg-5 w-16 mr-5"
              src={InstagramIcon}
              alt="InstagramIcon"
            />
            <img
              className="landingPage-bg-5 w-16"
              src={LinkedinIcon}
              alt="LinkedinIcon"
            />
          </div>
          <div className="col-3 text-center font-bold text-white text-lg mt-5">
            @copyright by Wipro
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
