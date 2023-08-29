import React, { useState } from "react";
import utils from "../../utils";
import { useDispatch, useSelector } from "react-redux";

import BookTitle from "../../components/book/BookTitle";

import "./DiscountPricePage.css";
import { setTotalPrice } from "../../store/slice";

const DiscountPricePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);
  const { price } = state.showInfo[0];
  const { youtDiscount } = state;

  const unMarkedPrice = utils.getRemoveMarkThousand(price);
  const youtPrice = utils.getMarkThousand(
    Number(unMarkedPrice) + unMarkedPrice * (youtDiscount / 100)
  );
  const disCountPrice = utils.getMarkThousand(
    unMarkedPrice * (youtDiscount / 100)
  );

  const [values, setValues] = useState({
    aNumber: "0",
    cNumber: "0",
  });

  const handleChange = (e) => {
    if (e.target.value < 0) return;

    setValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [e.target.name]: e.target.value,
      };

      const sumPrice = unMarkedPrice * updatedValues.aNumber;
      const sumYoutPrice =
        utils.getRemoveMarkThousand(youtPrice) * updatedValues.cNumber;
      const sumDiscount =
        utils.getRemoveMarkThousand(disCountPrice) * updatedValues.cNumber;
      const resultTotalPrice = sumPrice + sumYoutPrice;

      dispatch(
        setTotalPrice({
          sumPrice: sumPrice,
          sumDiscount: sumDiscount,
          resultTotalPrice: resultTotalPrice,
        })
      );

      return updatedValues; // 이 값을 반환하여 상태를 업데이트합니다.
    });
  };

  return (
    <div className="discountPriceContainer">
      <BookTitle width="100%" isleft="true">
        티켓할인, 매수 선택
      </BookTitle>
      <table className="bookDiscountTable">
        <colgroup>
          <col width="70px" />
        </colgroup>
        <tbody>
          <tr>
            <th className="bookDiscountTh">일반할인</th>
            <td className="bookDiscountTd">일반</td>
            <td className="bookDiscountTd">{price}</td>
            <td className="bookDiscountTd">
              <input
                type="number"
                max={20}
                name="aNumber"
                value={values.aNumber}
                onChange={handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <th className="bookDiscountTh" rowSpan={2}>
              청소년할인
            </th>
            <td className="bookDiscountTd">청소년할인({youtDiscount}%)</td>
            <td className="bookDiscountTd">
              {utils.getMarkThousand(youtPrice)}
            </td>
            <td className="bookDiscountTd">
              <input
                type="number"
                max={20}
                name="cNumber"
                value={values.cNumber}
                onChange={handleChange}
              ></input>
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
