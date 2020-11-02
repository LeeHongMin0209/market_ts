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

    async createUser(createUserDto: CreateUserDto) {
        const emailUser: UserDocument | null = await this.userModel.findOne({ email: createUserDto.email });
        const phoneUser: UserDocument | null = await this.userModel.findOne({ phone: createUserDto.phone });
        if(!emailUser){
          if(!createUserDto.phone || !phoneUser){
            const createdUser = await this.userModel.create(createUserDto);
            console.log(createUserDto);
            return createdUser.save(); 
          } else {
            throw new HttpException('전화번호가 이미 가입된 유저입니다.', HttpStatus.FORBIDDEN)
          }
        } else {
          throw new HttpException('이메일이 이미 가입된 유저입니다.', HttpStatus.FORBIDDEN)
      }
    }

    async findEmail(params): Promise<User> {
      const { name, phone } = params
      const user: UserDocument | null = await this.userModel.findOne({ name, phone }).select('_id email');
      if(user){
        console.log(user);
        return user;
      } else {
        throw new HttpException('아이디를 찾지 못했습니다.', HttpStatus.FORBIDDEN)
      }
    }
}
