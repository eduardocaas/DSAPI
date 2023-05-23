import { Repository } from "typeorm";
import { Produto } from "./produto.entity";

export class ProdutoRepository extends Repository<Produto> {}