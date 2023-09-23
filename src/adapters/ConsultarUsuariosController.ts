import Elysia from "elysia";
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario";
import ConsultarUsuarios from "../core/usuario/service/ConsultarUsuarios";

export default class ConsultarUsuariosController {

  constructor(
      readonly servidor: Elysia,
      readonly casoDeUso: ConsultarUsuarios
    ) { 
      servidor.get('/usuarios', async () => {
        return casoDeUso.executar();
      });
    }

}
