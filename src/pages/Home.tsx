import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // 추가
import './Home.scss';
import '../common.scss';
import MainBanner from '../components/MainBanner';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HomeAni from '../Animation/HomeAni';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderAni from '../Animation/HeaderAni';

SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

export default function Home() {
  const mainImgRef = useRef<HTMLDivElement>(null);
  const [numb, setNumb] = useState<number>(1);
  useEffect(() => {
    HeaderAni();
    const timer = setTimeout(() => {
      if (numb === 1) {
        mainImgRef.current!.className = 'top_main_img1';
        setNumb(numb + 1);
      } else if (numb === 2) {
        mainImgRef.current!.className = 'top_main_img2';
        setNumb(numb + 1);
      } else if (numb === 3) {
        mainImgRef.current!.className = 'top_main_img3';
        setNumb(1);
      }
    }, 5000);
  }, [numb]);
  useEffect(() => {
    HomeAni();
  }, []);
  return (
    <>
      <HeaderContainer />
      <div className="page_loading">
        <h3>JPerfume</h3>
        <h4>Botancial Beauty Life</h4>
      </div>
      <div className="main_cover">
        <div ref={mainImgRef} className="top_main_img3"></div>
        <h3>JPerfume</h3>
        <h4>Botancial Beauty Life</h4>
      </div>
      <div className="inner">
        <section>
          <div className="main_about">
            <img
              className="main_about_img"
              src="/images/main_about.jpeg"
              alt=""
            />
            <div className="main_about_content">
              <h3 className="main_about_h3">About</h3>
              <h4 className="main_about_h4">
                향수의 시작은
                <br />
                JPerfume에서.
              </h4>
              <p className="main_about_p">
                아름다움과 멋짐을 주는 Jperfume의 향수. <br />
                매력적인 JPerfume 프로젝트의 탄생과 제작 배경.
                <br />
                프로젝트에 대한 정보를 제공하고 있습니다.
                <br />
                이곳에서 자세히 경험하는 행복을 시작하지 않겠습니까?
              </p>
              <div className="btn_wrap">
                <a className="btn" href="/about">
                  <h1>More</h1>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="main_slide">
            <img
              className="slide_img1"
              src="/images/main_slide_img1.jpeg"
              alt=""
            />
            <img
              className="slide_img2"
              src="/images/main_slide_img2.jpeg"
              alt=""
            />
            <img
              className="slide_img3"
              src="/images/main_slide_img3.jpeg"
              alt=""
            />
            <img
              className="slide_img4"
              src="/images/main_slide_img4.jpeg"
              alt=""
            />
          </div>
        </section>
        <section>
          <div className="natural_perfume">
            <h4>자연을 품은 향수</h4>
            <h3>naturality</h3>
            <p>Perfume Menu</p>
            <ul>
              <li className="natural_li">
                <a href="/mainpage">
                  <MainBanner
                    url="banner_img1.jpeg"
                    title="First Step<br/>Main"
                    mcontent="자연과도 같은 산뜻한 홈페이지 설명"
                    scontent="홈페이지를 자세히 들어가기전 듣는 목차,<br/>이곳을 통하여 개요를 확인해주세요."
                  />
                </a>
              </li>
              <li>
                <a href="/subpage">
                  <MainBanner
                    url="banner_img2.jpeg"
                    title="First Step<br/>Sub"
                    mcontent="타입스크립트와 리액트"
                    scontent="어떤 언어와 라이브러리로 되어있을까,<br/>전체적인 맥락에 대하여 알려드립니다."
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="rest_perfume">
            <h4>편하게 쉴 수 잇는 쉼터</h4>
            <h3>natulabo</h3>
            <p>Rest Menu</p>
            <ul>
              <li className="rest_li">
                <MainBanner
                  url="banner_img3.jpg"
                  title="Botanical<br/>Formulator Course"
                  mcontent="자연스러운 식물과의 화합"
                  scontent="과하지 않고 자연스럽게 풍겨오는,<br/>향기로운 식물의 내음을 몸에 품어보세요."
                />
              </li>
              <li>
                <MainBanner
                  url="banner_img4.jpg"
                  title="Natural<br/>Flavor"
                  mcontent="나의 몸에 맞는 향수 상담"
                  scontent="자신에게 어울리는 향기가 무엇인지,<br/>맞춤형 향수를 제공해 드립니다."
                />
              </li>
            </ul>
          </div>
          <div className="rest_perfume2">
            <ul>
              <li className="rest_li2">
                <MainBanner
                  url="banner_img5.jpg"
                  title="Botanical<br/>Formulator Course"
                  mcontent="자연스러운 식물과의 화합"
                  scontent="과하지 않고 자연스럽게 풍겨오는,<br/>향기로운 식물의 내음을 몸에 품어보세요."
                />
              </li>
              <li>
                <MainBanner
                  url="banner_img6.jpg"
                  title="Natural<br/>Flavor"
                  mcontent="나의 몸에 맞는 향수 상담"
                  scontent="자신에게 어울리는 향기가 무엇인지,<br/>맞춤형 향수를 제공해 드립니다."
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
