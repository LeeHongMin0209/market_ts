import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')


export class UserController {
    constructor(private readonly userService: UserService) {}

    // Post -> 유저 회원가입
    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    // Get -> 이메일 찾기
    @Get('/findEmail')
    async findEmail(@Body() params){
        return this.userService.findEmail(params);
    }

    //Put -> 회원 정보 수정하기
    @Put('/changeUserData')
    async changeUserData(@Body() updateUserDto: UpdateUserDto){
        return this.userService.changeUserData(updateUserDto);
    }
}
