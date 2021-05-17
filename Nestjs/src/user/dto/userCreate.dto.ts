import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {

//   @IsNotEmpty()
//   @IsEmail()
  @ApiProperty({
  default: "abc@gmail.com",
  type: String})
  email: string;

  //@IsNotEmpty()
  @ApiProperty()
  password: string
}
