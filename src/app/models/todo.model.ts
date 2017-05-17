export class Todo {
  public content: string;
  public id: number;
  public isComplete: boolean;

  constructor(content: string, id: number, isComplete: boolean) {
    this.content = content;
    this.id = id;
    this.isComplete = isComplete;
  }
}