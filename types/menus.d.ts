export interface Menu {
  menu: {
    id: string;
    name: string;
    items: {
      id: string;
      name: string;
      price: number;
      description: string;
      rating: number;
      ratings: number;
      image: string;
      veg: boolean;
      bestSeller: boolean;
      quantity: number;
    }[];
  };
}

export interface SubMenu {
  subMenu: {
    id: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    ratings: number;
    image: string;
    veg: boolean;
    bestSeller: boolean;
    quantity: number;
  };
}
