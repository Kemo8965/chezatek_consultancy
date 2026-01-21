// ChezaTek Logo as a simple React component
export const ChezaTekLogo = ({ className = "", width = 40, height = 40 }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 160 160"
    fill="none"
  >
    <defs>
      <linearGradient id="cpuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    
    {/* CPU Chip Body */}
    <rect x="50" y="50" width="60" height="60" fill="url(#cpuGradient)" rx="6" />
    
    {/* CPU Pins - Top */}
    <circle cx="65" cy="35" r="3" className="fill-blue-400" />
    <circle cx="80" cy="35" r="3" className="fill-blue-400" />
    <circle cx="95" cy="35" r="3" className="fill-blue-400" />
    
    {/* CPU Pins - Right */}
    <circle cx="125" cy="65" r="3" className="fill-blue-400" />
    <circle cx="125" cy="80" r="3" className="fill-blue-400" />
    <circle cx="125" cy="95" r="3" className="fill-blue-400" />
    
    {/* CPU Pins - Bottom */}
    <circle cx="95" cy="125" r="3" className="fill-blue-400" />
    <circle cx="80" cy="125" r="3" className="fill-blue-400" />
    <circle cx="65" cy="125" r="3" className="fill-blue-400" />
    
    {/* CPU Pins - Left */}
    <circle cx="35" cy="95" r="3" className="fill-blue-400" />
    <circle cx="35" cy="80" r="3" className="fill-blue-400" />
    <circle cx="35" cy="65" r="3" className="fill-blue-400" />
    
    {/* Connection lines */}
    <line x1="65" y1="50" x2="65" y2="35" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="80" y1="50" x2="80" y2="35" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="95" y1="50" x2="95" y2="35" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    
    <line x1="110" y1="65" x2="125" y2="65" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="110" y1="80" x2="125" y2="80" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="110" y1="95" x2="125" y2="95" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    
    <line x1="95" y1="110" x2="95" y2="125" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="80" y1="110" x2="80" y2="125" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="65" y1="110" x2="65" y2="125" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    
    <line x1="50" y1="95" x2="35" y2="95" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="50" y1="80" x2="35" y2="80" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    <line x1="50" y1="65" x2="35" y2="65" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
    
    {/* WiFi Symbol */}
    <path 
      d="M 65 85 Q 73 77 80 77 Q 87 77 95 85" 
      fill="none" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M 70 90 Q 75 85 80 85 Q 85 85 90 90" 
      fill="none" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M 75 95 Q 77.5 92.5 80 92.5 Q 82.5 92.5 85 95" 
      fill="none" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <circle cx="80" cy="100" r="3" fill="white" />
  </svg>
);

// Usage Examples
export default function Example() {
  return (
    <div className="p-8 bg-gray-50">
      <div className="space-y-6">
        
        {/* In a navigation bar */}
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
          <ChezaTekLogo width={32} height={32} />
          <span className="font-semibold text-gray-800">ChezaTek Solutions</span>
        </div>
        
        {/* Different sizes */}
        <div className="flex items-center gap-6 bg-white p-4 rounded-lg shadow">
          <ChezaTekLogo width={24} height={24} />
          <ChezaTekLogo width={40} height={40} />
          <ChezaTekLogo width={64} height={64} />
          <ChezaTekLogo width={96} height={96} />
        </div>
        
        {/* On dark background */}
        <div className="bg-gray-900 p-6 rounded-lg flex items-center gap-3">
          <ChezaTekLogo width={48} height={48} />
          <div>
            <div className="text-white font-bold text-xl">ChezaTek Solutions</div>
            <div className="text-gray-400 text-sm">LIMITED</div>
          </div>
        </div>
        
        {/* In a button */}
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <ChezaTekLogo width={20} height={20} />
          <span>Dashboard</span>
        </button>
        
      </div>
    </div>
  );
}