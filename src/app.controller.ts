import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async sendNotification() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: "Você tem uma nova solicitação de amizade!",
        category: "social",
        recipientId: randomUUID()
      }
    })
  }


}
