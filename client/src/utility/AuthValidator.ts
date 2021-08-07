export const emailValidator = (email: string): string => {
  const re = /\S+@\S+\.\S+/;
  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Need a valid email address.';

  return '';
};

export const passwordValidator = (password: string): string => {
  if (!password || password.length < 6)
    return 'Password must be at least 6 characters.';

  return '';
};

export const nameValidator = (name: string): string => {
  if (!name || name.length < 4) return 'User name need at least 4 characters.';

  return '';
};
