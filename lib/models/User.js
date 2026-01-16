import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  services: {
    voice: { type: Boolean, default: false },
    sms: { type: Boolean, default: false },
    rcs: { type: Boolean, default: false },
    whatsapp: { type: Boolean, default: false }
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true
  },
  agreeToTerms: {
    type: Boolean,
    required: true,
    default: false
  },
  receiveMarketing: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);