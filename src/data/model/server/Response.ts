export interface Response {
  send: (data: any) => void;
  status: (statusCode: number) => Response;
}
