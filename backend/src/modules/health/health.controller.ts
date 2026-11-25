import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import type { Connection } from 'mongoose';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get()
  @ApiOperation({ summary: 'Check API and MongoDB readiness' })
  async getHealth(): Promise<{ status: 'ok'; service: string; timestamp: string }> {
    const db = this.connection.db;
    if (this.connection.readyState !== 1 || !db) {
      throw new ServiceUnavailableException({ status: 'unavailable', dependency: 'mongodb' });
    }

    try {
      await db.admin().ping();
    } catch {
      throw new ServiceUnavailableException({ status: 'unavailable', dependency: 'mongodb' });
    }

    return { status: 'ok', service: 'hbn-backend', timestamp: new Date().toISOString() };
  }
}
