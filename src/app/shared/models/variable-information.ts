export class VariableInformation {
  type: string;
  value: any|undefined;

  constructor(type: string, value: any|undefined) {
    console.log(value)
    this.type = type;
    this.setValue(value);
  }

  setValue(value: any|undefined) {
    if (value === undefined) {
      this.value = undefined;
      return;
    }
    // bon type ?
    if ((this.type.toLowerCase() === 'entier') && value.toString().includes("'")) {
      throw new ErrorType(`${value} n'est pas un entier`)
    }

    this.value = value;
  }
}
