export class SimpleQueryBuilder {
  private readonly defaultEndpoint = "http://localhost:3001/developers";

  private query = "";

  public get Query() {
    return this.query;
  }

  public developers() {
    this.query += this.defaultEndpoint;
    return this;
  }

  public pagination(page: number, limit: number) {
    this.query += `?_page=${page}&_limit=${limit}`;
    return this;
  }

  public getTypes(arg: string) {
    if (arg.length < 1) return this;
    this.query += `&type=${arg}`;
    return this;
  }

  public byID(id: number) {
    this.query += `/${id}`;
    return this;
  }
}
