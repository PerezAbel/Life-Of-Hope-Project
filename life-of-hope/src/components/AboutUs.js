import React from 'react';

const AboutUs = () => {
  const founders = [
    {
      name: "Alex Bohm",
      title: "CEO",
      bio: "Visionary leader focused on driving meaningful change through innovative strategies and compassionate leadership.",
      email: "alex@example.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Eady William Hyman",
      title: "CTO",
      bio: "Technology expert with a deep understanding of systems and scalability, leading our tech evolution.",
      email: "eady@example.com",
      phone: "+1 (555) 987-6543"
    },
    {
      name: "J.A.S. Berman Hyman",
      title: "COO",
      bio: "Operations guru ensuring efficiency, clarity, and organizational excellence at every level.",
      email: "berman@example.com",
      phone: "+1 (555) 456-7890"
    }
  ];

  const [showContacts, setShowContacts] = React.useState(null);

  const toggleContacts = (index) => {
    setShowContacts(showContacts === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-800 px-6 py-16 max-w-7xl mx-auto space-y-20">

      {/* Hero & Mission */}
      <section className="space-y-10 text-center">
        <img 
          src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" 
          alt="Mission" 
          className="w-full h-80 object-cover rounded-3xl shadow-xl"
        />
        <h1 className="text-5xl font-extrabold tracking-tight">Office Voice Editor & Leader</h1>
        <h2 className="text-2xl font-medium text-gray-600">Foster Care – Fostering Hope</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          We believe that <span className="font-semibold text-yellow-600">mothers hold powerful wisdom</span> and that strong families build strong communities. 
          Our work empowers and supports families through community-driven initiatives.
        </p>
      </section>

      {/* Beliefs Section */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-2">We Believe in the Wisdom of Mothers</h3>
          <p className="text-gray-600">
            Mothers often hold the answers their children need. By creating a platform where women define what 
            support looks like, we uplift entire families and communities.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">We Believe in Strong Families</h3>
          <p className="text-gray-600">
            Supportive families are the heart of healthy development. We focus on building stable, nurturing environments 
            through empathy, advocacy, and powerful storytelling.
          </p>
        </div>
      </section>

      {/* Info & Image */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Building a Trusted Reputation</h2>
          <p className="text-gray-600 text-lg">
            In a rapidly changing world, reputation is more than branding — it’s a relationship. We help organizations 
            earn lasting trust through transparency, compassion, and meaningful action.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1531938707045-59f89c579c1d?fit=crop&w=1050&q=80" 
            alt="Reputation Building" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Founders Section */}
      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 space-y-4 text-center">
              <img 
                src={`https://randomuser.me/api/portraits/lego/${index + 1}.jpg`} 
                alt={founder.name} 
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-sm"
              />
              <h3 className="text-xl font-semibold">{founder.name}</h3>
              <p className="text-sm text-gray-500">{founder.title}</p>
              <p className="text-gray-600">{founder.bio}</p>
              <button
                onClick={() => toggleContacts(index)}
                className="mt-2 inline-block px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition"
              >
                {showContacts === index ? 'Hide Contact' : 'Contact'}
              </button>

              {showContacts === index && (
                <div className="text-sm text-gray-700 mt-3 space-y-1">
                  <p><span className="font-medium">Email:</span> {founder.email}</p>
                  <p><span className="font-medium">Phone:</span> {founder.phone}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
