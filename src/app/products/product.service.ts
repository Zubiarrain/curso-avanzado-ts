import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";
import { faker } from "@faker-js/faker";

export const products: Product[] = [];

const getIndexProduct = (id: string | number) => {
  const index = products.findIndex(product => product.id == id)
  index === -1 && throwError('Product not found')

  return index
}
const throwError = (error:string) => new Error(error)

export const addProduct = (data:CreateProductDto): Product => {
  const newProduct = { //-> se haría en la BBDD
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    }

  }
  products.push(newProduct);
  return newProduct;
}

export const getProduct = (id: string | number) => {
  const index = getIndexProduct(id)

  return products[index]
}

export const updateProduct = (id: string | number, changes: Product) => {
  const index = getIndexProduct(id)
  let product = products[index]

  products[index] = {
    ...product,
    ...changes
  }
}

export const deleteProduct = (id: string | number) => {
  const index = getIndexProduct(id)
  products.splice(index,1)
}
