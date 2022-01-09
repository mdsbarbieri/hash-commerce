import { loadSync } from '@grpc/proto-loader';
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';

export class GRPCAdapter {
  private readonly client: any;

  constructor(protoPath: string) {
    const proto = loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    this.client = loadPackageDefinition(proto);
  }

  getClient() {
    return this.client;
  }

  getCredentials() {
    return credentials.createInsecure();
  }
}
