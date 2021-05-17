import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Http2SecureServer } from 'http2';
import { UserService } from './user/user.service';
import { LocalAuthGuard } from './auth/local-auth.guard';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get('/ping')
  getPing(): string {
    return this.appService.getPing();
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('1111111111',req.body.user);
    
    return req.body.user;
  }
  // @Post('/webhook')
  // async hook(
  //   @Request() req: FastifyRequest,
  //   @Response() res: FastifyReply<Http2SecureServer>,
  // ) {
  //   try {
  //     const { table } = req.body as any;
  //     switch (table.name) {
  //       case 'import':
  //         await this.importData(req.body as any, res);
  //         break;
  //       case 'bill':
  //         break;
  //       default:
  //         res
  //           .code(400)
  //           .header('Content-Type', 'application/json; charset=utf-8')
  //           .send({ error: true, message: 'ignored event' });
  //         break;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     res
  //       .status(401)
  //       .header('Content-Type', 'application/json; charset=utf-8')
  //       .send({
  //         success: false,
  //         message: error,
  //       });
  //   }
  // }

  // /**
  //  * Import data
  //  * @param body
  //  * @param res
  //  */
  // async importData(body: any, res: FastifyReply<Http2SecureServer>) {
  //   // Get payload
  //   const {
  //     event: { data },
  //   } = body;

  //   const { status, input_link, client_id, id } = data.new;
  //   if ((status !== 'INIT' && !client_id) || !input_link || input_link === '') {
  //     new BadRequestException();
  //   }

  //   try {
  //     await this.importService.importData(id);
  //     res
  //       .status(200)
  //       .header('Content-Type', 'application/json; charset=utf-8')
  //       .send({
  //         success: true,
  //         message: 'Finished processing',
  //       });
  //   } catch (e) {
  //     console.log('========== error importData ==========');
  //     console.log(e);
  //     res
  //       .status(500)
  //       .header('Content-Type', 'application/json; charset=utf-8')
  //       .send();
  //   }
  // }
}
