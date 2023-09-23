import { Usuario } from "@prisma/client";
import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioUsuario from "./RepositorioUsuarios";

export default class ConsultarUsuarios implements CasoDeUso<void, Usuario[]> {

  constructor(readonly repositorio: RepositorioUsuario) {}
  
  async executar(entrada: void): Promise<Usuario[]> {
    return await this.repositorio.consultarTodos();
  }  

} 