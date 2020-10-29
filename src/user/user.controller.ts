import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('user')

export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        await this.userService.createUser(createUserDto);
    }

    @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
