import { Body, Controller, Post } from '@nestjs/common';
import { SigninRequestDto } from './application/dto/signin-request.dto';

@Controller('auth')
export class AuthController {
    @Post('sigin')
    signIn(@Body() args: SigninRequestDto): Promise<any> {
        return;
    }
}
