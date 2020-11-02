import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('user')


export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Get('/findEmail')
    async findEmail(@Body() params){
        return this.userService.findEmail(params);
    }
}
