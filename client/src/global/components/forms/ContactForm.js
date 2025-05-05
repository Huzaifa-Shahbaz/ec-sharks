
import WithFormHandling from '../highOrderComponents/WithFormHandling';
import ContactFormBase from './ContactFormBase';

const ContactForm = WithFormHandling(ContactFormBase, '/api/send-email/contact-form');

export default ContactForm;