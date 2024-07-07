import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import LocomotiveScroll from 'locomotive-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  const row1 = [
    "/Client1.png",
    "/Client2.png",
    "/Client3.png",
    "/Client4.png",
    "/Client5.png",
    "/Client6.png",
  ];

  const row2 = [
    "/Client1.png",
    "/Client2.png",
    "/Client3.png",
    "/Client4.png",
    "/Client5.png",
    "/Client6.png",
  ];
  const scroll = new LocomotiveScroll();

  return (
    <div className="flex flex-col justify-center items-center" >
      <AppContainer>
      <Wrapper>
        <Text data-scroll data-scroll-speed="1"  data-aos="fade-up">Our Clients</Text>
        <Note  data-aos="fade-up">Our customers have gotten offers from awesome companies.</Note>
        <Marquee  data-aos="fade-up">
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup  data-aos="fade-up">
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee data-aos="fade-up">
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2 data-aos="fade-up">
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  width: 90vw;
  height: 70vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #02203c;
  overflow-x: hidden;
  padding-left: 100px;
  font-family: 'Poppins', sans-serif;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 350;
  margin-bottom: 40px;
  color: #7c8e9a;
    padding-left: 100px;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow-x : hidden;
  user-select: none;
  

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  overflow-x: hidden;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow-x: hidden;
`;