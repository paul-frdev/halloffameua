type InputProps = {
  id: string;
  type: 'email' | 'text' | 'password';
  inputType: 'select' | 'input';
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder?: string;
  name: string;
};

export const USER_REGISTRATION_FORM: InputProps[] = [
  {
    id: '1',
    inputType: 'input',
    placeholder: 'Full name',
    name: 'fullname',
    type: 'text',
  },
  {
    id: '2',
    inputType: 'input',
    placeholder: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    id: '3',
    inputType: 'input',
    placeholder: 'Confirm Email',
    name: 'confirmEmail',
    type: 'email',
  },
  {
    id: '4',
    inputType: 'input',
    placeholder: 'Password',
    name: 'password',
    type: 'password',
  },
  {
    id: '5',
    inputType: 'input',
    placeholder: 'Confrim Password',
    name: 'confirmPassword',
    type: 'password',
  },
];

export const USER_LOGIN_FORM: InputProps[] = [
  {
    id: '1',
    inputType: 'input',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
  },
  {
    id: '2',
    inputType: 'input',
    placeholder: 'Password',
    name: 'password',
    type: 'password',
  },
];


export const SUBSCRIBE_USER: InputProps[] = [
  {
    id: '1',
    inputType: 'input',
    placeholder: 'Full name',
    name: 'fullname',
    type: 'text',
    label: 'Full Name'
  },
  {
    id: '2',
    inputType: 'input',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
    label: 'Email'
  }
]

export const PRODUCT_COLORS: InputProps[] = [
  {
    id: '1',
    inputType: 'select',
    name: 'color',
    type: 'text',
    label: 'Color'
  }
]


export const PRODUCT_SIZES: InputProps[] = [
  {
    id: '1',
    inputType: 'select',
    name: 'size',
    type: 'text',
    label: 'Size'
  }
]

