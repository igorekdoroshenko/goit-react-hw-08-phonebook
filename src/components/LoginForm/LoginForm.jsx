import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  FormTitle,
  FormWrapper,
  FormButton,
  FormInput,
} from '../RegisterForm/RegisterForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <FormTitle>Log In</FormTitle>

      <label>
        <FormInput
          type="email"
          name="email"
          label="Email"
          size="small"
          required
        />
      </label>
      <label>
        <FormInput
          type="password"
          name="password"
          label="Password"
          size="small"
          required
        />
      </label>
      <FormButton type="submit">Log In</FormButton>
    </FormWrapper>
  );
};

export default LoginForm;