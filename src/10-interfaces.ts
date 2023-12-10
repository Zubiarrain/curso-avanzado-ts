type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
/* type Product = {
  id: string | number
  title: string
  createdAt: Date
  stock: number
  size?: Sizes
} */

interface Product { // --> se puede extender, con type no
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};

const products: Product[] = [];

products.push({
  id: '1',
  title: 'o1',
  createdAt: new Date(),
  stock:90
})

// EJEMPLO DE HERENCIA CON INTERFACES

interface HumanInterface {
  name: string,
  lastName: string
}
interface HeroInterface extends HumanInterface {
  superPower: string
}
