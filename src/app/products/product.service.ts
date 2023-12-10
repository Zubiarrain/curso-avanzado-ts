import { Product } from "./product.model";

export const products: Product[] = [];
const getIndexProduct = (id: string | number) => {
  const index = products.findIndex(product => product.id == id)
  index === -1 && throwError('Product not found')

  return index
}
const throwError = (error:string) => new Error(error)

export const addProduct = (data:Product) => {
  products.push(data);
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
