import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
export class SigninRequestDto {
    @IsEmail({ message: 'Phone number is not valid' })
    email?: string;

    @IsPhoneNumber('VI', { message: 'Phone number is not valid' })
    phoneNumber?: string;

    @IsNotEmpty({ message: 'Password must not be empty' })
    password: string;
}
