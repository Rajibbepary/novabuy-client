

const testimonials = [
  {
    name: 'Emily Stone',
    feedback: 'Amazing service! Got my laptop in 2 days and it works perfectly.',
  },
  {
    name: 'John Carter',
    feedback: 'Very responsive support team. Helped me track my order in minutes.',
  },
  {
    name: 'Linda Park',
    feedback: 'The smartwatch I bought is exactly as described. Great quality!',
  },
];

const Testminal = () => {
    return (
         <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-gray-600 mb-4">"{item.feedback}"</p>
            <p className="text-sm font-semibold text-right">– {item.name}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Testminal;