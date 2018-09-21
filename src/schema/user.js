export const login = {
  schema: {
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
  },
  uiSchema: {
    email: {
      'ui:widget': 'email',
      'ui:autofocus': true,
      'ui:help': 'Please enter a valid email address',
    },
    password: {
      'ui:widget': 'password',
    },
  },
}

export const forgot = {
  schema: {
    title: 'Forgot your password',
    type: 'object',
    required: ['email'],
    properties: {
      email: {
        type: 'string',
        title: 'Email',
        placeholder: 'Email address',
      },
    },
  },
  uiSchema: {
    email: {
      'ui:widget': 'email',
      'ui:autofocus': true,
      'ui:help': 'Please enter your email address',
    },
  },
}

export const change = {
  schema: {
    title: 'Change your password',
    type: 'object',
    required: ['current_password'],
    properties: {
      current_password: {
        type: 'string',
        title: 'Current password',
        placeholder: 'Current password',
      },
    },
  },
  uiSchema: {
    email: {
      'ui:widget': 'email',
      'ui:autofocus': true,
      'ui:help': 'Please enter your email address',
    },
  },
}
