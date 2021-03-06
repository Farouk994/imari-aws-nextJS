import React from "react";
import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
   flex: 1;
   margin: 3px;
   height: 70vh;
   position: relative;
`;

const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

const Info = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   flex-direction: column;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Title = styled.h1`
color:white;
margin-bottom:20px;

`;

const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:grey;
cursor:pointer;
font-weight:600;
transition: all 0.5s ease;

&:hover {
   background-color:black;
   color:white;
   transform: scale(1.1);
}
`;

const CategoryItem = ({ item }) => {
   return (
      <div>
         <Container>
            <Image src={item.img} />
            <Info>
               <Title>{item.title}</Title>
               <Button>SHOP NOW</Button>
            </Info>
         </Container>
      </div>
   );
};

export default CategoryItem;
