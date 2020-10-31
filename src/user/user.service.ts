import { Model } from 'mongoose';
import { HttpException, HttpStatus, Inject, Injectable, Post } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<UserDocument>,
      ) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const emailUser: UserDocument | null = await this.userModel.findOne({ email: createUserDto.email });
        if(!emailUser){
          const createdUser = await this.userModel.create(createUserDto);
          console.log(createUserDto);
          return createdUser.save();
        } else {
          throw new HttpException('이미 가입된 유저입니다.', HttpStatus.FORBIDDEN)
      }
    }
}
