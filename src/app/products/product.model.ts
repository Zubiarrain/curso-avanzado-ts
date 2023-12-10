import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel { // --> se puede extender, con type no
  title: string;
  image:string;
  description:string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  color:string;
  price:number;
  category: Category;
  isNew: boolean;
  tags: string[];
};

