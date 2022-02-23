import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

const Title = styled.h1`
   margin: 20px;
`;

const Filter = styled.div`
   margin: 20px;
`;

const FilterText = styled.div`
   font-size: 20px;
   font-weight: bold;
   margin-right: 20px;
`;

const Select = styled.select`
   padding: 10px;
   margin-right: 10px;
   cursor:pointer;
   transition: all 0.5s ease;

   &:hover {
      background-color: black;
      color: white;
      transform: scale(1.1)
   }
`;
//    margin-top: 5px;

const Option = styled.option`

`;
// background-color: transparent;
// color:black;
// color: white;

const ProductList = () => {
   return (
      <div>
         <Container>
            <Title>Dresses</Title>
            <FilterContainer>
               <Filter>
                  <FilterText>Filter Products:</FilterText>
                  <Select>
                     <Option disabled selected>
                        Color
                     </Option>
                     <Option>White</Option>
                     <Option>Black</Option>
                     <Option>Red</Option>
                     <Option>Blue</Option>
                     <Option>Yellow</Option>
                     <Option>Green</Option>
                  </Select>
                  <Select>
                     <Option disabled selected>
                        Size
                     </Option>
                     <Option>XS</Option>
                     <Option>S</Option>
                     <Option>M</Option>
                     <Option>L</Option>
                     <Option>XL</Option>
                  </Select>
               </Filter>
               <Filter>
                  <FilterText>Sort Products:</FilterText>
                  <Select>
                     <Option selected>Newest</Option>
                     <Option>Price (asc)</Option>
                     <Option>Price (desc)</Option>
                  </Select>
               </Filter>
            </FilterContainer>
            <Products />
         </Container>
      </div>
   );
};

export default ProductList;
