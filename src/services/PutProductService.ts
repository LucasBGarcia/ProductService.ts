
import ProductRepository from "../repositories/ProductRepository";

export default class ProductPutService {
    private repository: ProductRepository

    constructor(repository: ProductRepository) {
        this.repository = repository
    }

    public execute(codigo: any, parametros: {buyPrice: any, description: string, lovers: any,sellPrice: any,tags: any,id: any, code: any}): typeof codigo {
        const TrueProduct = this.repository.findByCode(codigo)

        if (TrueProduct) {
            this.repository.putProduct(codigo, parametros)

            return parametros
        } else {
            throw Error('Produto inexistente')
        }
    }
}