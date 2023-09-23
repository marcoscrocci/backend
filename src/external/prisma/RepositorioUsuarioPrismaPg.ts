import { PrismaClient } from "@prisma/client";
import Usuario from "../../core/usuario/model/Usuario";
import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuarios";

export default class RepositorioUsuarioPrismaPg implements RepositorioUsuario {
  
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  consultarTodos(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  consultarPorEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        email
      }
    })
  }

  consultarPorId(id: number): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        id
      }
    })
  }
  
  criar(usuario: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({ data: usuario });
  }

}