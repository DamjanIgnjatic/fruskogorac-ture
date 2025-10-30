export type Tour = {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  price: number;
  distance: number;
  altitude: number;
};

export type ToursData = {
  data: Tour;
};
