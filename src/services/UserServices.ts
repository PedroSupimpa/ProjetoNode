import { Repository, getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";
import { User } from "../entities/Users";

class UserService {
  private usersRepository: Repository<User>;
  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    //Verificar se o usuario existe

    const userExists = await this.usersRepository.findOne({
      email,
    });

    //SE nao existir, salvar no DB
    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);
    //Se existir, retornar user

    return user;
  }
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      email,
    });
    return user;
  }
}

export { UserService };
