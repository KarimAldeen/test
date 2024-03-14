import { ReactElement, LazyExoticComponent, ReactNode } from 'react';

  export type Tchildren = {
    children: ReactNode;
  };



  type TMenuItemBase = {
    icon: JSX.Element;
    text: string;
    header?: string;
    title?: string;
    withOutLayout?: boolean;
  };
  
  type TMenuItemWithDropdown = TMenuItemBase & {
    path?: string;
    element?: ReactElement | LazyExoticComponent<any>;
    children: TMenuItem[];


  };
  
  type TMenuItemWithoutDropdown = TMenuItemBase & {
    path: string;
    element: ReactElement | LazyExoticComponent<any>;
    children?: TMenuItem[];

  };
  
 export type TMenuItem = TMenuItemWithDropdown | TMenuItemWithoutDropdown;
  

 export interface CardData {
  title: string;
  value: string;
  subTitle: string;
  percentage: number;
  Good?: boolean;
}