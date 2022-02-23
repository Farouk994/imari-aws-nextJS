import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 20px;
   background-color: black;
   display: flex;
   color: white;
   padding-top: 5px;
   font-size: 14px;
   font-weight: 500px;
   justify-content:center;
`;

const Announcement = () => {
   return (
      <div>
         <Container>Super Deal! FREE SHIPPING on orders over $50</Container>
      </div>
   );
};

export default Announcement;
