export interface IFoodItem {
  bestSeller: boolean;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  ratings: number;
  veg: boolean;
}

export interface ICart {
  cart: IFoodItem[];
}

interface RootState {
  cart: ICart;
}
