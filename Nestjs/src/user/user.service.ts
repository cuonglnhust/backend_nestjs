import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  Repository,
  UpdateResult,
} from 'typeorm';
import User from './user.entity';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
const iv = randomBytes(16);
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async update(user: Partial<User>): Promise<UpdateResult> {
    return await this.userRepository.update(
      {
        //id: user.id,
        email: user.email,
      },
      user,
    );
  }

  public async delete(user: FindConditions<User>): Promise<DeleteResult> {
    return await this.userRepository.delete(user);
  }
  public async getAllUser(): Promise<User> {
    return await this.userRepository.findOne();
  }

  public async find(criteria: FindManyOptions<User>): Promise<Array<User>> {
    return await this.userRepository.find(criteria);
  }

  public async findOne(criteria: FindOneOptions<User>): Promise<User> {
    return await this.userRepository.findOne(criteria);
  }
  public async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({email: email});
  }

  public async findById(id: number): Promise<User> {
    const users = await this.userRepository.findByIds([id], { take: 1 });
    if (users && users.length > 0) {
      return users[0];
    }
    return null;
  }

  // public async findByEmail(email: string, clientId: number): Promise<User> {
  //   return await this.userRepository.findOne({
  //     where: { email, clientId },
  //   });
  // }

  public async findByPhone(phone: string, clientId: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { phone, clientId },
    });
  }

  public async create(user: Partial<User>): Promise<User> {
    console.log('user',user);
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password,salt);
    const newUser = await this.userRepository.create({
      ...user,
      password: hashPassword
    });
    await newUser.save();
    return newUser;
  }

  public async saveAll(users: Array<Partial<User>>): Promise<Array<User>> {
    try {
      return await this.userRepository.save(users);
    } catch (error) {
      console.log(error);
      return await Promise.reject(error);
    }
  }
 
}
