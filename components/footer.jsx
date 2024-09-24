import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">DigiMarkPro</h2>
            <p className="text-sm text-gray-400">© 2024 DigiMarkPro. All rights reserved.</p>
            <p className="text-sm text-gray-400">Designed & Developed by Softnio</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
              <li><Link href="/why-genox" className="hover:text-gray-300">Why Genox?</Link></li>
              <li><Link href="/team" className="hover:text-gray-300">Meet the team</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/digital-media" className="hover:text-gray-300">Digital Media</Link></li>
              <li><Link href="/services/strategy" className="hover:text-gray-300">Strategy</Link></li>
              <li><Link href="/services/development" className="hover:text-gray-300">Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get our staff</h3>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-l-md"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}