export interface Hotels {
  hotel: {
    id: string;
    featured_image: string;
    name: string;
    cuisines: string;
    time: string;
    average_cost_for_two: number;
    aggregate_rating: number;
    address: string;
    small_address: string;
    offer: string;
    no_of_delivery: number;
    latitude: number;
    longitude: number;
  };
}

export interface Hotel {
  id: string;
  featured_image: string;
  name: string;
  cuisines: string;
  time: string;
  average_cost_for_two: number;
  aggregate_rating: number;
  address: string;
  small_address: string;
  offer: string;
  no_of_delivery: number;
  latitude: number;
  longitude: number;
}
