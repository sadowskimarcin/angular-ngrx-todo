let autoIncrement = 1;

export class Todo {
  public readonly id: number = autoIncrement++;

  constructor(
    public name: string,
    public isCompleted: boolean = false
  ) { }
}
