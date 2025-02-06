import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  create(name: string, email: string) {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  async update(id: number, name: string, email: string) {
    await this.userRepository.update(id, { name, email });
    return this.userRepository.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
