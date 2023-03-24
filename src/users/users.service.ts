import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';

import {
  UsersDocument,
  Users
} from './schema';





@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private readonly UserModel: Model < UsersDocument > ){}

  create(CreateUserDto: CreateUserDto)  {
    const employee = new this.UserModel(CreateUserDto);
    return employee.save() 
  }

  findAll() {
    return this.UserModel.find()
      .exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
