import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  FormTitle,
  FormWrapper,
  FormButton,
  FormInput,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <FormTitle>Create An Account</FormTitle>

      <label>
        <FormInput
          type="text"
          name="name"
          label="Username"
          size="small"
          required
        />
      </label>
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
      <FormButton type="submit">Register</FormButton>
    </FormWrapper>
  );
};

export default RegisterForm;