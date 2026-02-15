
import React, { useState } from 'react';
import { PACKAGES, ALACARTE_SERVICES } from '../constants';
import { BookingDetails } from '../types';

interface BookingSystemProps {
  onClose: () => void;
  initialServiceId?: string;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ onClose, initialServiceId }) => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<BookingDetails>({
    serviceId: initialServiceId || '',
    serviceName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: ''
  });

  const allServices = [
    ...PACKAGES.map(p => ({ id: p.id, name: p.name, type: 'Package' })),
    ...ALACARTE_SERVICES.map(s => ({ id: s.id, name: s.name, type: 'A La Carte' })),
    { id: 'free-consultation', name: 'Free Discovery Call (20 min)', type: 'General' }
  ];

  const handleNext = () => {
    if (step === 1 && !details.serviceId) return alert('Please select a service');
    if (step === 2 && (!details.date || !details.time)) return alert('Please select date and time');
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    console.log('Booking submitted:', details);
    alert('Thank you! Your booking request has been received. We will contact you shortly to confirm.');
    onClose();
  };

  const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-brand-purple text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-2xl font-bold">Book Your Consultation</h2>
            <p className="text-purple-100 text-sm">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="hover:text-purple-200 p-2">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Select a Service</h3>
              <div className="grid gap-3">
                {allServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setDetails({ ...details, serviceId: service.id, serviceName: service.name })}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      details.serviceId === service.id
                        ? 'border-brand-purple bg-brand-lightPurple'
                        : 'border-gray-100 hover:border-brand-purple/30'
                    }`}
                  >
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{service.name}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{service.type}</p>
                    </div>
                    {details.serviceId === service.id && <i className="fas fa-check-circle text-brand-purple"></i>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-800">Choose Your Time</h3>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700 font-medium">Date</span>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={details.date}
                    onChange={(e) => setDetails({ ...details, date: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-purple focus:ring focus:ring-brand-purple/20 p-3 bg-gray-50"
                  />
                </label>
                <div>
                  <span className="text-gray-700 font-medium mb-3 block">Available Slots</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setDetails({ ...details, time })}
                        className={`p-2 text-sm rounded-lg border transition-all ${
                          details.time === time
                            ? 'bg-brand-purple text-white border-brand-purple'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Your Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={details.name}
                  onChange={e => setDetails({...details, name: e.target.value})}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-purple/20"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={details.email}
                  onChange={e => setDetails({...details, email: e.target.value})}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-purple/20"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={details.phone}
                  onChange={e => setDetails({...details, phone: e.target.value})}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-purple/20"
                />
                <div className="md:col-span-2">
                  <textarea
                    rows={4}
                    placeholder="Tell us about your agency goals..."
                    value={details.message}
                    onChange={e => setDetails({...details, message: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-purple/20"
                  />
                </div>
              </div>
              <div className="p-4 bg-brand-lightGreen rounded-xl border border-brand-green/20">
                <p className="text-sm text-brand-green flex items-center gap-2">
                  <i className="fas fa-lock"></i>
                  Your data is safe and will only be used to schedule your consultation.
                </p>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-brand-purple text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-brand-purple/20"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        {step < 3 && (
          <div className="p-6 border-t border-gray-100 flex justify-between shrink-0">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 text-gray-600 font-medium hover:text-brand-purple"
              >
                Back
              </button>
            )}
            <div className="flex-1"></div>
            <button
              onClick={handleNext}
              className="px-10 py-3 bg-brand-purple text-white rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              Next Step
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSystem;
