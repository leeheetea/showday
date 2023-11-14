import React, { useEffect, useRef, useState } from "react";
import utils from '../../utils';
import { useDispatch, useSelector } from "react-redux";

import BookTitle from "../../components/book/BookTitle";

import "./DiscountPricePage.css";
import { setTotalPrice } from '../../store/slice'
import LineContainer from "../../components/LineContainer";
import { useParams } from 'react-router-dom';

const DiscountPricePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);
  const { price } = state.showInfo;
  const { bookStep } = state;
  const myseatCnt = state.myBookSeats?.length;

  let youngDiscount = 0.15;

  const unMarkedPrice = price
  const youngPrice = utils.getMarkThousand(
    price - (price * youngDiscount)
  );
  const disCountPrice = utils.getMarkThousand(
    unMarkedPrice * youngDiscount
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

      const sumPrice = unMarkedPrice *
        (parseInt(updatedValues.aNumber, 10) + parseInt(updatedValues.cNumber, 10));
      const sumDiscount = utils.getRemoveMarkThousand(disCountPrice) * updatedValues.cNumber;
      const resultTotalPrice = sumPrice + sumDiscount;

      dispatch(
        setTotalPrice({
          sumPrice: sumPrice,
          sumDiscount: sumDiscount,
          resultTotalPrice: resultTotalPrice,
        })
      );
      return updatedValues;
    });
  };

  function getPriceInfo() {
    return (
      <table className="bookDiscountTable">
        <colgroup>
          <col width="70px" />
        </colgroup>
        <tbody>
          <tr>
            <th className="bookDiscountTh">일반가</th>
            <td className="bookDiscountTd">일반가(정가)</td>
            <td className="bookDiscountTd">{utils.getMarkThousand(price)}</td>
            <td className="bookDiscountTd">
              <input
                type="number"
                max={myseatCnt}
                name="aNumber"
                value={values.aNumber}
                onChange={handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <th className="bookDiscountTh" rowSpan={2}>할인종류</th>
            <td className="bookDiscountTd">청소년할인({youngDiscount * 100}%)</td>
            <td className="bookDiscountTd">
              {youngPrice}
            </td>
            <td className="bookDiscountTd">
              <input
                type="number"
                max={myseatCnt}
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
              <input
                type="number"
                value="0"
                disabled={true}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  function getPriceInfoSimply() {
    return (
      <table className="bookDiscountTable">
        <colgroup>
          <col width="70px" />
        </colgroup>
        <tbody>
          <tr>
            <td className="bookDiscountTd">일반가(정가)</td>
            <td className="bookDiscountTd">{utils.getMarkThousand(price)}</td>
          </tr>
          <tr>
            <td className="bookDiscountTd">청소년할인({youngDiscount}%)</td>
            <td className="bookDiscountTd">
              {utils.getMarkThousand(youngPrice)}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className="discountPriceContainer">
      <BookTitle width="100%" isleft="true">
        티켓금액
      </BookTitle>
      {bookStep !== 5 ?
        getPriceInfo()
        : <div className="paymentInfoContainer">
          {getPriceInfoSimply()}
        </div>}
    </div>
  );
};

export default DiscountPricePage;
