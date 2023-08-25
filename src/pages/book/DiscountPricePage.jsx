import React from "react";
import BookTitle from "../../components/book/BookTitle";

import "./DiscountPricePage.css";
import LineContainer from "../../components/LineContainer";

const DiscountPricePage = () => {
  return (
    <div className="discountPriceContainer">
      <BookTitle width="100%" isleft>
        티켓할인, 매수 선택
      </BookTitle>
      <table className="bookDiscountTable">
        {/* <caption>예매정보</caption> */}
        <colgroup>
          <col width="70px" />
        </colgroup>
        <tbody>
          <tr>
            <th className="bookDiscountTh">일반할인</th>
            <td className="bookDiscountTd">일반</td>
            <td className="bookDiscountTd">70,000원</td>
            <td className="bookDiscountTd">
              <input type="number" value="0"></input>
            </td>
          </tr>
          <tr>
            <th className="bookDiscountTh" rowSpan={2}>
              청소년할인
            </th>
            <td className="bookDiscountTd">청소년할인</td>
            <td className="bookDiscountTd">70,000원</td>
            <td className="bookDiscountTd">
              <input type="number" value="0"></input>
            </td>
          </tr>
          <tr>
            <td className="bookDiscountTd">&nbsp;</td>
            <td className="bookDiscountTd">&nbsp;</td>
            <td className="bookDiscountTd">
              <input type="number" value="0" disabled={true}></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DiscountPricePage;
