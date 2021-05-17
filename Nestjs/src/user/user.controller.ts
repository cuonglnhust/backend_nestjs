import { Body, Controller,Request, Get, HttpException,Param, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import {User} from './user.entity'
import { get } from 'http';
import { id } from 'date-fns/locale';
import { UserDto } from './dto/userCreate.dto';
import { error } from 'console';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private userService: UserService, private authService: AuthService) {
    this.userService = userService;
  }
  @Get('/get-user') 
  async getAllUser() : Promise<User>{
      
    const user = await this.userService.getAllUser()
    return user;
    //const user = await UserService
  }
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({ type: UserDto })
  @Post('/create-user')
  async createUser(@Body() user): Promise<User>  {
    console.log('1111111',user.email);
    
    if(!user.email){
      throw new HttpException('invalid email', 401);
    }
    return this.userService.create(user);
  }
  //get by query
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiQuery({name:'id'})
  @Get('/getUser-by-id')
  async getUserById(@Query() query) : Promise<User>{
    const id = Number(query.id);
    console.log('11111',id);
    return this.userService.findById(id)
  }
  // get by param
  //@UseGuards(JwtAuthGuard)
  @ApiParam({name: 'id'})
  @Get('getUser-by-id-param/:id')
  async getUserByParam(@Param('id') userid): Promise<User>{
    console.log('222222', userid);
    return this.userService.findOne(userid)
  }
  @ApiBody({ type: UserDto })
  @Post('/login')
  async login(@Body() req) {
    const data = await this.authService.login(req);
    if(!data)  throw new HttpException('invalid login', 404); 
    return data
  }
  @UseGuards(JwtAuthGuard) 
  @Get('/current-user')
  async GetCurrentUser( @Request() req) {
    console.log('xxxxxxxxx',req.user);
    
    return req.user
  }
}


