interface IValidationType {
  [key: string]: {
    rules: {
      required: boolean;
      pattern: RegExp;
    };
    message: string;
  };
}
