import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-blue-500 font-semibold mb-4">What We Do</h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              We are Professional Digital Team
            </h1>
            <p className="text-gray-600 mb-8">
              Start from scratch or choose from over 500 designer-made templates
              that you can fully customize using the drag and drop website builder.
              Make your site come to life with video backgrounds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="text-blue-500 mb-4" size={24} />
                  <h3 className="text-xl font-semibold mb-2">Customize Website</h3>
                  <p className="text-gray-600">
                    Pick a template, customize anything. Answer a few questions and get a website designed just for you.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="text-blue-500 mb-4" size={24} />
                  <h3 className="text-xl font-semibold mb-2">Premium Design</h3>
                  <p className="text-gray-600">
                    Start your own blog, add an online store, and accept bookings online always.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Create Your Website</Button>
              <Button variant="outline" size="lg">
                Watch Videos
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full w-48 h-48 flex items-center justify-center z-10">
              <div className="text-center text-white">
                <div className="text-4xl font-bold">25</div>
                <div className="text-sm">Years Of Web Experience</div>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Web Professional"
              width={400}
              height={400}
              className="rounded-lg object-cover mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 1"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 2"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}