import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Globe, Users, CheckCircle, Play } from 'lucide-react'

const StatCard = ({ icon: Icon, value, label }) => (
  <Card className="bg-white shadow-lg">
    <CardContent className="p-6 flex flex-col items-center">
      <Icon className="text-blue-500 mb-2" size={24} />
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </CardContent>
  </Card>
)

const FeatureItem = ({ children }) => (
  <div className="flex items-center mb-2">
    <CheckCircle className="text-orange-500 mr-2" size={16} />
    <span className="text-white">{children}</span>
  </div>
)

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard icon={Rocket} value="2,365+" label="Projects complete" />
          <StatCard icon={Globe} value="9,632+" label="Trusted Global Clients" />
          <StatCard icon={Users} value="2,365+" label="Expert Team Member" />
          <StatCard icon={CheckCircle} value="6,763+" label="Projects complete" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-blue-500 rounded-full p-4 cursor-pointer">
                <Play className="text-white" size={24} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4">
              25 years of experience in this world, being the first and foremost choice of business people.
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <FeatureItem>An abundance of resources</FeatureItem>
              <FeatureItem>Add advanced features</FeatureItem>
              <FeatureItem>Support that helps</FeatureItem>
              <FeatureItem>Edit your mobile view</FeatureItem>
              <FeatureItem>State of the art security</FeatureItem>
              <FeatureItem>Optimize search engines</FeatureItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}