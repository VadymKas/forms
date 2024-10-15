export const validations: IValidationType = {
  name: {
    rules: {
      required: true,
      pattern: /^(?=.{5,}$)(?:(?:[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё]*)(?:\s[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё]*)*)$/,
    },
    message: 'name field is required',
  },
  surname: {
    rules: {
      required: true,
      pattern: /^(?=.{5,}$)(?:(?:[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё]*)(?:\s[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё]*)*)$/,
    },
    message: 'surname field is required',
  },
  telephone: {
    rules: {
      required: true,
      pattern: /((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))/,
    },
    message: 'This field is required',
  },
  email: {
    rules: {
      required: true,
      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    message: 'This field is required',
  },
  location: {
    rules: {
      required: false,
      pattern: /^[A-Z][a-zA-Z\s-]+$/,
    },
    message: 'This field is required',
  },
};
