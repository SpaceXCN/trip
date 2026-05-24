import { Outlet, Link } from "react-router";
import { Compass, Search, User, MapPin, Menu } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors">
                <Compass className="w-8 h-8" />
                <span className="text-xl font-bold tracking-tight">Roam China</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex gap-8">
              <Link to="/" className="text-sm font-medium text-slate-700 hover:text-red-600">Home</Link>
              <Link to="/destinations" className="text-sm font-medium text-slate-700 hover:text-red-600">Destinations</Link>
              <Link to="/itineraries" className="text-sm font-medium text-slate-700 hover:text-red-600">Itineraries</Link>
              <Link to="/cuisines" className="text-sm font-medium text-slate-700 hover:text-red-600">Cuisines</Link>
              <Link to="/guides" className="text-sm font-medium text-slate-700 hover:text-red-600">Tips & Guides</Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="md:hidden p-2 text-slate-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Compass className="w-6 h-6 text-red-500" />
              <span className="text-lg font-bold">Roam China</span>
            </div>
            <p className="text-sm text-slate-400">
              Your ultimate companion for exploring the wonders of China. Discover destinations, plan your trip, and get authentic travel tips.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guides" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Help Center</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guides" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors">Visa Guide</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} Roam China. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
