export interface Request {
  params: {
    [key: string]: string;
  };
  body: any;
}
