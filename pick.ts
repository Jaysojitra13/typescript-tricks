type Item = {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

// Pick will take only those fields which are mentioned in below syntax
type ItemPreview = Pick<Item, "name" | "image">

const item: Item = {
  "name": "Macbook",
  "description": "desc",
  "price": 234,
  "currency": "USD",
  "image": "https://google.com"
}

const itemPreview: ItemPreview = {
  name: item.name,
  image: item.image
}
