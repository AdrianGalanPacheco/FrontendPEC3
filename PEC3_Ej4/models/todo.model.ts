/**
 * @class Model
 *
 * Manages the data of the application.
 */

// Interface with TODO structure
interface ITodo {
  text: string;
  complete?: boolean;
}

class Todo {
  // Properties
  id: string;
  text: string;
  complete: boolean;

  // Constructor
  constructor({ text, complete = false }: ITodo) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  // To avoid TypeScript's number[] + number error, I replaced [1e7] + -1e3 + -4e3 + -8e3 + -1e11 with "10000000-1000-4000-8000-100000000000"
  uuidv4(): string {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        parseInt(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> (parseInt(c) / 4)))
      ).toString(16)
    );
  }
}

export default Todo;
