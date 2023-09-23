import Usuario from "../../core/usuario/model/Usuario";
import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuarios";

export default class RepositorioUsuarioMemoria implements RepositorioUsuario {
  
  private readonly usuarios: Usuario[] = [];

  async consultarPorEmail(email: string): Promise<Usuario | null> {
    return this.usuarios.find(usuario => usuario.email === email) ?? null;
  }
  
  async criar(usuario: Usuario): Promise<Usuario> {
    const novoUsuario = { ...usuario, id: Math.random() };
    this.usuarios.push(novoUsuario);
    return novoUsuario;
  }

}