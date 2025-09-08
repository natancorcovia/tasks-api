import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(username: string, password: string, role: 'user' | 'admin') {
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), username, password: hashed, role };
    this.users.push(user);
    return user;
  }

  async findByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }

  async findById(id: number) {
    return this.users.find((u) => u.id === id);
  }
}
