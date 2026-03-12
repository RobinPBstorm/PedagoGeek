class ErrorType extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ErrorType';
    // Restore prototype chain
    Object.setPrototypeOf(this, Error.prototype);
  }
}
