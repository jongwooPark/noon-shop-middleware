import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';


const ProductCard = ({ menu }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showDetail = () => {

    //싱품디테일을 보기전에 이전 스테이트를 초기화한다.
    
    dispatch({type: "SELECT_PRODUCT", payload:{product : null}})

    navigate(`/product/${menu.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={menu?.img} />
      <div>{menu?.choice == true ? "추천제품" : ""}</div>
      <div> {menu?.title}</div>
      <div>{menu?.price}원</div>
      <div>{menu?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
