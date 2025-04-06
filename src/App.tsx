import { lazy, Suspense } from 'react';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App