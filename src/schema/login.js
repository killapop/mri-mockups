export const schema = {
  title: 'Login',
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      title: 'Email',
      placeholder: 'Email address',
    },
    password: { type: 'string', title: 'Password' },
  },
}

export const uiSchema = {
  email: {
    'ui:widget': 'email',
    'ui:help': 'Please enter a valid email address',
  },
  password: {
    'ui:widget': 'password',
  },
}
