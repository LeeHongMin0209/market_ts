import { Model } from 'mongoose';
import { Inject, Injectable, Post } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<UserDocument>,
      ) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = await this.userModel.create(createUserDto);
        console.log(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
}
