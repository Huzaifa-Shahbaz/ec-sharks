
import WithFormHandling from '../highOrderComponents/WithFormHandling';
import QueryFormBase from './QueryFormBase';

const QueryForm = WithFormHandling(QueryFormBase, '/api/send-email/query-form');

export default QueryForm;