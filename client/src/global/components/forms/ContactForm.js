
import WithFormHandling from '../highOrderComponents/WithFormHandling';
import ContactFormBase from './ContactFormBase';

const ContactForm = WithFormHandling(ContactFormBase, '/send-email/contact-form');

export default ContactForm;