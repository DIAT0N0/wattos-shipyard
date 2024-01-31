export interface StarshipsResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}

export interface Starship {
  name: string;
  model: string;
  starship_class: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  films: string[];
  pilots: string[];
  url: string;
  create: string;
  edited: string;
}
