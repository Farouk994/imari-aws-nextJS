import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
   padding: 50px;
   display: flex;
`;

const ImgContainer = styled.div`
   flex: 1;
`;

const Image = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;
`;

const Title = styled.h1`
   font-weight: 500;
`;

const Desc = styled.p`
   margin: 20px 0px;
`;

const Price = styled.span`
   font-weight: bold;
   font-size: 40px;
`;

const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
`;

const Filter = styled.div`
   display: flex;
   align-items: center;
`;

const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;

const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   margin: 0px 3px;
   cursor: pointer;
`;

const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 50%;
`;

const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;

const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;

const Button = styled.button`
   background-color: black;
   color: white;
   cursor: pointer;
   padding: 10px;
   border: 1px solid black;
   transition: all 0.5s ease;
   font-weight:500;

   &:hover {
      background-color: white;
      color: black;
      transform: scale(1.1);
   }
`;

const Product = () => {
   return (
      <div>
         <Container>
            {/* <Newsletter /> */}
            <Wrapper>
               <ImgContainer>
                  <Image src="https://i.pinimg.com/564x/f7/5f/62/f75f62757d72a0f6b5a572f520a8b068.jpg" />
               </ImgContainer>
               <InfoContainer>
                  <Title>Peufra Skirt</Title>
                  <Desc>
                     {" "}
                     There are many variations of passages of Lorem Ipsum
                     available, but the majority have suffered alteration in
                     some form, by injected humour, or randomized words which
                     don’t look even slightly believable.
                  </Desc>
                  <Price>$20</Price>
                  <FilterContainer>
                     <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="red" />
                        <FilterColor color="chocolate" />
                        <FilterColor color="beige" />
                     </Filter>
                     <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                           <FilterSizeOption>XS</FilterSizeOption>
                           <FilterSizeOption>S</FilterSizeOption>
                           <FilterSizeOption>M</FilterSizeOption>
                           <FilterSizeOption>L</FilterSizeOption>
                           <FilterSizeOption>XL</FilterSizeOption>
                           <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                     </Filter>
                  </FilterContainer>
                  <AddContainer>
                     <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                     </AmountContainer>
                     <Button>Add To Cart</Button>
                  </AddContainer>
               </InfoContainer>
            </Wrapper>
         </Container>
      </div>
   );
};

export default Product;
