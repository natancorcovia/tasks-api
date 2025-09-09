import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // ✅ agora o TS sabe que é um array de User

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...createUserDto,
      role: 'user', // default
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User | undefined {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, updateUserDto);
    }
    return user;
  }

  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return { deleted: true };
  }
}
