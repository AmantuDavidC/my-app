import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hello from NestJS Version 3.0!";
  }

  @Get('health')
  getHealth(): object {
    return { status: "UP", version: "3.0.0", timestamp: new Date().toISOString() };
  }

  @Get('about')
  getAbout(): object {
    return {
      project: "NestJS Deployment",
      environment: "Huawei Cloud ECS",
      version: "3.0",
      description: "Automated CI/CD Pipeline Success"
    };
  }
}