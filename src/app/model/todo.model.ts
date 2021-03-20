let autoIncrement = 1;

export class Todo {
  id: number = autoIncrement++;

  constructor(
    public name: string,
  ) { }
}
