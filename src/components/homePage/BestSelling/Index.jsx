import React from "react";
import ProductCommonLayout from "../../CommonCoponents/ProductCommonLayout";
import ProductCard from "../../CommonCoponents/ProductCard";
import { useGetAllFlashSaleQuery } from "../../../Features/Api/exclusiveApi";
const BestSellilng = () => {
  const { data, error, isLoading } = useGetAllFlashSaleQuery();
const BestSellilng = data?.data?.map((item)=> item.product);


  return (
    <div className="container border-t-[1.5px] border-gray-300">
      <ProductCommonLayout
        heading="This Month's"
        description="Best Selling Products"
        ProductCard={ProductCard}
        partialItemShow={6}
        componentData={BestSellilng}
        isLoading={isLoading}
        viewButton={true}
      />
    </div>
  );
};

export default BestSellilng;
