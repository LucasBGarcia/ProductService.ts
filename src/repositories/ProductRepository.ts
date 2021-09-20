import Product from '../models/Product';


export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(v => v.code === code);
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }

  public deleteproduct(code: number) : Product | undefined {
    let product
    let i = 0

    for (i; i < this.products.length; i++){
      if(code === this.products[i].code){
        product = this.products[i]
        this.products.splice(i,1)
        break;
      }
    }
    return product
  }
  
  public putProduct(codigo: number, parametros: {buyPrice: any, description: string, lovers: any,sellPrice: any,tags: any,id: any, code: any}) : Product | undefined {
    let newProduct
    let i = 0
    
    for (i; i < this.products.length; i++){
      if(codigo === this.products[i].code){
        newProduct = this.products[i]
        this.products.splice(i,1)
        this.products.push(parametros)
        break;
      }
    }
    return newProduct
  }
}
