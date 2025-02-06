import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.userService.create(body.name, body.email);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: { name: string; email: string }) {
    return this.userService.update(id, body.name, body.email);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
