import { FaqInterface } from 'interfaces/faq';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  faq?: FaqInterface[];
  organization?: OrganizationInterface;
  _count?: {
    faq?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  status?: string;
  organization_id?: string;
}
