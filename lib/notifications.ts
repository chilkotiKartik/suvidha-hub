/**
 * Multi-channel notification dispatcher & localized alert templates for Suvidha.
 */

export interface NotificationPayload {
  recipientContact: string;
  channel: 'sms' | 'email' | 'in_app';
  locale: 'en' | 'hi' | 'mr';
  applicationId: string;
  status: 'submitted' | 'processing' | 'approved' | 'rejected';
}

const TEMPLATES = {
  en: {
    submitted: (id: string) => Your application  + id +  has been received successfully.,
    approved: (id: string) => Congratulations! Application  + id +  has been approved.,
  },
  hi: {
    submitted: (id: string) => Aapka aavedan  + id +  safaltapoorvak prapt ho gaya hai.,
    approved: (id: string) => Badhai ho! Aavedan  + id +  swikrit ho gaya hai.,
  },
};

export class NotificationDispatcher {
  static formatMessage(payload: NotificationPayload): string {
    const lang = payload.locale === 'hi' ? 'hi' : 'en';
    const statusKey = payload.status === 'approved' ? 'approved' : 'submitted';
    return TEMPLATES[lang][statusKey](payload.applicationId);
  }
}