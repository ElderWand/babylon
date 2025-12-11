import React from 'react';
import { Calendar, Globe, Hotel, User, Database, Code, Layout, CheckCircle } from 'lucide-react';

export default function ProjectSpecification() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Babylone Travel Platform</h1>
          </div>
          <p className="text-blue-100 text-lg">Custom Travel Booking Engine - MVP Specification</p>
        </div>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-gray-50">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <Calendar className="w-6 h-6 text-blue-600 mb-2" />
            <div className="text-sm text-gray-600">Timeline</div>
            <div className="text-xl font-bold text-gray-800">60 Days (Strict)</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
            <Layout className="w-6 h-6 text-indigo-600 mb-2" />
            <div className="text-sm text-gray-600">Design Status</div>
            <div className="text-xl font-bold text-gray-800">70% Complete</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <Hotel className="w-6 h-6 text-purple-600 mb-2" />
            <div className="text-sm text-gray-600">MVP Focus</div>
            <div className="text-xl font-bold text-gray-800">Hotels Only</div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            Executive Summary
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Building a scalable Online Travel Agency (OTA) platform with long-term vision including Flights, Hotels, Tours, and Car Rentals.
            </p>
            <p className="text-gray-700 font-semibold mb-2">60-Day MVP Scope (Strictly Limited To):</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Marketing/Content Site (Fully dynamic via Headless CMS)</li>
              <li>Hotel Booking Engine (Complete flow: Search → Results → Details → Booking → Payment)</li>
              <li>User Dashboard (Login, Register, View Bookings)</li>
            </ul>
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
              <p className="text-red-800 font-semibold text-sm">⚠️ Out of Scope for Phase 1: Flights, Cars, and Tours</p>
            </div>
          </div>

          {/* Technical Stack */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 mt-8">
            <Code className="w-6 h-6 text-indigo-600" />
            Technical Stack Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-3">Frontend & Core</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono">▸</span>
                  <span><strong>Framework:</strong> Next.js 14+ (App Router)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono">▸</span>
                  <span><strong>Language:</strong> TypeScript (Strict mode)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono">▸</span>
                  <span><strong>Styling:</strong> Tailwind CSS + shadcn/ui</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono">▸</span>
                  <span><strong>CMS:</strong> Strapi or Sanity.io (Headless)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-3">Data & State</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-mono">▸</span>
                  <span><strong>State:</strong> React Query + URL Search Params</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-mono">▸</span>
                  <span><strong>Forms:</strong> React Hook Form + Zod</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-mono">▸</span>
                  <span><strong>Database:</strong> PostgreSQL (Supabase/Neon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-mono">▸</span>
                  <span><strong>Auth:</strong> JWT (Google Auth included)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Scope */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 mt-8">
            <Database className="w-6 h-6 text-purple-600" />
            Detailed Scope of Work
          </h2>

          {/* Module A */}
          <div className="mb-6 border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Module A: Content Engine (CMS)</h3>
            <p className="text-gray-700 mb-3"><strong>Goal:</strong> Marketing team edits pages without developers</p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Pages:</strong> Home, About Us, Contact, Blog Listing, Single Blog Post, Destination Guides</p>
              <p><strong>Dynamic SEO:</strong> Meta tags and OG Images editable from CMS</p>
              <p><strong>Integration:</strong> Hotel Search Widget embeddable inside CMS blog posts</p>
            </div>
          </div>

          {/* Module B */}
          <div className="mb-6 border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">Module B: Hotel Booking Engine (Core)</h3>
            <p className="text-gray-700 mb-3"><strong>Goal:</strong> Seamless booking flow for users</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-indigo-800 mb-1">1. Search Widget</p>
                <p className="text-sm text-gray-700">Destination (Autocomplete), Date Range (DatePicker), Guest/Room Counter</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-800 mb-1">2. Search Results Page (SRP)</p>
                <ul className="text-sm text-gray-700 list-disc list-inside ml-4 space-y-1">
                  <li>List of hotels from API (Mock data first, then Real API)</li>
                  <li>Filters: Price range, Star rating, Amenities</li>
                  <li>Sorting: Lowest Price, Highest Rating</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-indigo-800 mb-1">3. Product Detail Page (PDP)</p>
                <ul className="text-sm text-gray-700 list-disc list-inside ml-4 space-y-1">
                  <li>Image Gallery (Carousel)</li>
                  <li>Description, Amenities, Map View</li>
                  <li>Room Selection (Standard/Deluxe)</li>
                  <li>"Sticky" Booking Summary sidebar</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-indigo-800 mb-1">4. Checkout Flow</p>
                <ul className="text-sm text-gray-700 list-disc list-inside ml-4 space-y-1">
                  <li>Guest Details Form (First Name, Last Name, Email, Phone)</li>
                  <li>Price Breakdown (Base + Tax + Fees)</li>
                  <li>Payment Gateway Integration (Stripe OR Local Gateway)</li>
                  <li>Success Page & Email Confirmation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Module C */}
          <div className="mb-6 border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-3">Module C: User & Admin</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Authentication:</strong> JWT based (Login, Register, Forgot Password, Google Auth)</p>
              <p><strong>User Dashboard:</strong> "My Bookings" list (Upcoming/Past)</p>
              <p><strong>Admin:</strong> Simple view for all booking transactions and status (Confirmed/Failed)</p>
            </div>
          </div>

          {/* Development Strategy */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 mt-8">
            <Calendar className="w-6 h-6 text-green-600" />
            Development Strategy & Timeline
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <p className="text-gray-700 font-semibold mb-4">Mock-First Approach (60 Days Total)</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-gray-800">Phase 1 (Weeks 1-2)</p>
                  <p className="text-sm text-gray-600">Setup Next.js, Integrate CMS, Launch Static Marketing Site</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-gray-800">Phase 2 (Weeks 3-5)</p>
                  <p className="text-sm text-gray-600">Build full Booking UI using JSON Mock Data (Perfect & Responsive)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-gray-800">Phase 3 (Weeks 6-7)</p>
                  <p className="text-sm text-gray-600">Connect Real APIs (HotelBeds/Amadeus) and Payment Gateway</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-gray-800">Phase 4 (Week 8)</p>
                  <p className="text-sm text-gray-600">QA, Testing, and Deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Provide */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 mt-8">
            <User className="w-6 h-6 text-orange-600" />
            What We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <Layout className="w-8 h-8 text-orange-600 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Figma Design</h3>
              <p className="text-sm text-gray-600">High-fidelity designs for Desktop and Mobile (100% ready)</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <Code className="w-8 h-8 text-orange-600 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">API Documentation</h3>
              <p className="text-sm text-gray-600">Keys/docs for Hotel API and Payment Gateway</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <Database className="w-8 h-8 text-orange-600 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Content</h3>
              <p className="text-sm text-gray-600">Text and images for initial CMS setup</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white p-6 text-center">
          <p className="text-sm text-gray-300">Project Specification Document - Babylone Travel Platform</p>
          <p className="text-xs text-gray-400 mt-1">MVP Phase 1: Hotel Booking Engine</p>
        </div>
      </div>
    </div>
  );
}