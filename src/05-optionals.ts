export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?:number,
) => {
  return {
    id,
    //isNew: isNew || true, // el problema de el operador || es que si isNew es false pasará a true
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

const p1 = createProduct(1,true,12)
console.log(p1)

const p2 = createProduct(1)
console.log(p2)

const p3 = createProduct(1, false, 0)
console.log(p3)
