import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;

  async onModuleInit() {
    this.client = createClient({
      socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
      password: process.env.REDIS_PASSWORD,
    });
  
    this.client.on('error', (err) => console.error('Redis Client Error', err));
    await this.client.connect();
  }  

  async onModuleDestroy() {
    await this.client.disconnect();
  }

  async get<T = any>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) return null;

    try {
      return JSON.parse(data);
    } catch {
      return data as T;
    }
  }

  async set(key: string, value: any, expireSeconds?: number) {
    const data = typeof value === 'string' ? value : JSON.stringify(value);
    if (expireSeconds) {
      await this.client.set(key, data, { EX: expireSeconds });
    } else {
      await this.client.set(key, data);
    }
  }  

  async getBuffer(key: string): Promise<Buffer | null> {
    const base64 = await this.client.get(key);
    if (!base64) return null;
    return Buffer.from(base64, 'base64');
  }

  async del(key: string) {
    await this.client.del(key);
  }
}