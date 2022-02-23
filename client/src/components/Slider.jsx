import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   overflow: hidden;
   position: relative;
`;

const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   margin: auto;
   left: ${(props) => props.direction === "left" && "10px"};
   right: ${(props) => props.direction === "right" && "10px"};
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`;

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transform: translateX(${(props) => props.slideIndex * -100}vw);
   transition: all 1.5s ease;
`;

const Slide = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
   flex: 1;
   height: 100%;
`;

const Image = styled.img`
   height: 80%;
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
`;

const Title = styled.h1`
   font-size: 70px;
`;
const Description = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`;
const Button = styled.button`
   background-color: transparent;
   color: black;
   padding: 10px;
   font-size: 20px;
   cursor: pointer;
   hoover: black;

   transition: all 0.5s ease;

   &:hover {
      background-color: black;
      color: white;
      transform: scale(1.1);
   }
`;

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
      if (direction === "left") {
         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
         setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
   };
   return (
      <div>
         <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
               <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
               {sliderItems.map((item) => (
                  <Slide bg={item.bg}>
                     <ImgContainer>
                        <Image src={item.img} />
                     </ImgContainer>
                     <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                     </InfoContainer>
                  </Slide>
               ))}
               {/* <Slide bg="fcf1ed">
                  <ImgContainer>
                     <Image src="https://images.unsplash.com/photo-1598454444376-77ab9c72b3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                  </ImgContainer>
                  <InfoContainer>
                     <Title>MEN SALE</Title>
                     <Description>
                        DON'T COMPROMISE ON STYLE! THIS SUMMER IS YOURS
                     </Description>
                     <Button>SHOP NOW</Button>
                  </InfoContainer>
               </Slide> */}
               {/* <Slide bg="fbf0f4">
                  <ImgContainer>
                     <Image src="https://images.unsplash.com/photo-1598454444376-77ab9c72b3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                  </ImgContainer>
                  <InfoContainer>
                     <Title>ALL SALE</Title>
                     <Description>
                        DON'T COMPROMISE ON STYLE! THIS SUMMER IS YOURS
                     </Description>
                     <Button>SHOP NOW</Button>
                  </InfoContainer>
               </Slide> */}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
               <ArrowRightOutlined />
            </Arrow>
         </Container>
      </div>
   );
};

export default Slider;
