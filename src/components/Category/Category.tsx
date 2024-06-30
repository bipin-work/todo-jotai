import React from "react";
import { As } from "@chakra-ui/react";

export interface Category {
  id: string;
  name: string;
  icon: As;
  color: string;
}

interface CategoryProps {}
const Category: React.FC<CategoryProps> = () => {
  return <>Category</>;
};
export default Category;
