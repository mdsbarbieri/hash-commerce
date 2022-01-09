import Fastify, { FastifyInstance } from 'fastify';
import fastifyHelmet from 'fastify-helmet';
import { Server } from '../../data/model/server/Server';

export class FastifyAdapter implements Server<FastifyInstance> {
  private readonly server: FastifyInstance;
  private initialized: boolean = false;

  constructor(private readonly port: string, private readonly host = '0.0.0.0') {
    this.server = Fastify({
      logger: true,
    });
    this.server.register(fastifyHelmet, { contentSecurityPolicy: false });
    this.declareHealthCheckRoute();
  }

  declareHealthCheckRoute(): void {
    this.server.get('/health', (request, reply) => {
      reply.send({ status: 'ok' });
    });
  }

  getServer() {
    return this.server;
  }

  async init() {
    if (this.initialized) {
      return;
    }
    try {
      await this.server.listen(this.port, this.host);
      this.initialized = true;
    } catch (e) {
      console.error(`Error on init server on host ${this.host} and port ${this.port}`);
      process.exit(1);
    }
  }

  async stop() {
    if (!this.initialized) {
      return;
    }
    try {
      await this.server.close();
    } catch (e) {
      console.error(`Error on stop server on host ${this.host} and port ${this.port}`);
      process.exit(1);
    }
  }

  get(path: string, handler: any): void {
    this.server.get(path, handler);
  }

  post(path: string, handler: any): void {
    this.server.post(path, handler);
  }
}
