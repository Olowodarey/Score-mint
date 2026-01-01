"use client";

interface BottomNavProps {
  currentView: 'home' | 'leaderboards' | 'create' | 'profile';
  onNavigate: (view: 'home' | 'leaderboards' | 'create' | 'profile') => void;
}

export default function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home' as const, icon: '🏠', label: 'Home' },
    { id: 'leaderboards' as const, icon: '🏆', label: 'Leaderboards' },
    { id: 'create' as const, icon: '➕', label: 'Create' },
    { id: 'profile' as const, icon: '👤', label: 'Profile' },
  ];

  return (
    <nav className=" bg-red-500 fixed bottom-0 left-0 right-0 bg-dark-card border-t border-white/10 px-2 py-2 z-50 backdrop-blur-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
              currentView === item.id
                ? 'text-primary bg-primary/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
