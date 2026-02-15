
export interface ServicePackage {
  id: string;
  name: string;
  headline: string;
  price: number;
  description: string;
  features: string[];
  color: 'green' | 'purple';
}

export interface ALaCarteService {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface BookingDetails {
  serviceId: string;
  serviceName: string;
  date?: string;
  time?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
