
import WithFormHandling from '../highOrderComponents/WithFormHandling';
import SignUpFormBase from './SignUpFormBase';

const SignUpForm = WithFormHandling(SignUpFormBase, '/users/signup', '/dashboard');

export default SignUpForm;