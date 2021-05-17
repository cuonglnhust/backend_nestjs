import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    console.log('current user',user);
    if(!user){
      return null;
    }
    const isMatch = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const CurrentUser = await this.usersService.findOneByEmail(user.email)
    const checkPass = await this.validateUser(user.email,user.password)
    if(checkPass){
      const payload = { email: user.email, sub: CurrentUser.id };
      return {
        access_token: this.jwtService.sign(payload),
        email: user.email
      };
    }else{
      return null;
    }
    
    
  }
}