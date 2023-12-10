import {faker} from '@faker-js/faker';
import { addProduct,products } from "./products/product.service";


for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(),10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['winter','cold','sale', 'inStock']),
    size: faker.helpers.arrayElement(['S','M','L','XL']),
    title: faker.commerce.productName(),
    stock:faker.number.int({min:10, max:100}),
    categoryId: faker.string.uuid(),
  })
}

console.log(products)
