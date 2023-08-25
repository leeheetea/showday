import React from "react";
import styled from "styled-components";

const BookHeaderWrapper = styled.div`
  height: 60px;
  width: 80%;
  padding: 0px;
  margin: 0px;
  background-color: "#999999";
`;
const ItemContainer = styled.div`
  /*clip-path: polygon(0% 0%, 92% 0, 100% 50%, 91% 100%, 0% 100%);*/
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%);
  background-color: ${(props) => (props.isAccent ? "#333333" : "#999999")};
`;
const HeaderList = styled.ul`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 60px;
`;

const HeaderListItem = styled.li`
  display: inline-block;
  width: 20%;
  height: 100%;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

const headerList = [
  { step: 1, title: "날짜/회차선택" },
  { step: 2, title: "좌석선택" },
  { step: 3, title: "할인/매수선택" },
  { step: 4, title: "예매확인" },
  { step: 5, title: "결재하기" },
];

const BookHeader = ({ onBookStepClick, id }) => {
  const handleStepClick = (index) => {
    onBookStepClick(index, id);
  };

  return (
    <BookHeaderWrapper>
      <HeaderList>
        {headerList.map((menu, index) => {
          return (
            <HeaderListItem
              key={index + 1}
              onClick={() => handleStepClick(index + 1)}
            >
              <ItemContainer>{menu.title}</ItemContainer>
            </HeaderListItem>
          );
        })}
      </HeaderList>
    </BookHeaderWrapper>
  );
};

export default BookHeader;
