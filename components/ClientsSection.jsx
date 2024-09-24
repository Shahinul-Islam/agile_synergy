import Image from 'next/image'

const clients = [
  { name: 'Gencip', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Audacity Inc', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Hobs', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Fueler', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Client 5', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Client 6', logo: '/placeholder.svg?height=50&width=120' },
]

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-2">
            CLIENTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our friends who love
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            to work with us
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={50}
                className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}