const timeline = [
  { year: '2023', event: 'Founded with a vision to simplify e-commerce.' },
  { year: '2024', event: 'Reached 10,000+ happy customers.' },
  { year: '2025', event: 'Launched new mobile app and expanded to global shipping.' },
];

const TimeLine = () => {
    return (
       <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Journey</h2>
      <div className="border-l-4 border-blue-600 pl-6 space-y-6">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[1.2rem] top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
            <h4 className="text-xl font-bold">{item.year}</h4>
            <p className="text-gray-700">{item.event}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default TimeLine;