import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface FaqInterface {
  id?: string;
  question: string;
  answer: string;
  product_id?: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface FaqGetQueryInterface extends GetQueryInterface {
  id?: string;
  question?: string;
  answer?: string;
  product_id?: string;
}
