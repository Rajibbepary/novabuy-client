
import { CheckCircle } from 'lucide-react';
const features = [
  'Free & Fast Delivery',
  '24/7 Customer Support',
  'Secure Payments',
  'Top Quality Products',
  'Easy Return Policy',
  'Exclusive Member Discounts',
  'Hassle-Free Checkout',
  'Real-Time Order Tracking',
  'Multiple Payment Options',
  'Verified Customer Reviews',
];

const ChooseUs = () => {
    return (
          <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us</h2>
      <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1" />
            <p className="text-gray-700 text-lg">{feature}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default ChooseUs;