                const team = [
                {
                    name: 'Gias Uddin',
                    role: 'Founder & CEO',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    name: 'Rajib Hasan',
                    role: 'Lead Developer',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    name: 'Sarah Lee',
                    role: 'Marketing Head',
                    image: 'https://via.placeholder.com/150',
                },
                ];
const TeamSection = () => {
    
    return (
         <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default TeamSection;