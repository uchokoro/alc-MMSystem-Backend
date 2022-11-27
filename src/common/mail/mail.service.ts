import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { IMailGetData } from './interfaces/mail.interface';

@Injectable()
export class MailService {
    private transporter: nodemailer.transporter;

    constructor(private readonly configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('MAILGUN_API_KEY'),
            port: this.configService.get<int>('MAIL_PORT'),
            secure: false,
            auth: {
                user: this.configService.get<string>('USER_MAIL'),
                pass: this.configService.get<string>('USER_PASSWORD'),
            },
        })   
    }

    send(data: IMailGetData) {
        return new Promise((res, rej) => {
            this.transporter.sendMail(data, function (error, body) {
                if (error) {
                    rej(error);
                }
                res(body);
            });
        });
    }
}
