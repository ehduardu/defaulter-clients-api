import { mongoose } from '../database';

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
  },
  total: {
    type: Number
  },
  date: {
    type: Date,
  }
});

const ClientDefaulter = mongoose.model('ClientDefaulter', ClientSchema, 'Defaulters');

export { ClientDefaulter }
