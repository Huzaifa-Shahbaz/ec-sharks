
import WithFormHandling from '../highOrderComponents/WithFormHandling';
import SignInFormBase from './SignInFormBase';

const SignInForm = WithFormHandling(SignInFormBase, '/api/users/login', '/dashboard');

export default SignInForm;