import React from 'react';
import { LayoutDashboard, ShoppingBag, CreditCard, Bot, Users, Mail, Settings, LogOut, Lock } from 'lucide-react';

export const Sidebar = ({ currentView, setCurrentView }) => {
  
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.href = '/login';
  };

  const menuItems = [
    { id: 'summary', icon: LayoutDashboard, label: 'Resumen General' },
    { id: 'config', icon: Settings, label: 'Configuración Web' },
  ];

  const lockedItems = [
    { icon: ShoppingBag, label: 'Productos & Stock', promo: 'Vende online 24/7' },
    { icon: CreditCard, label: 'Pasarela de Pagos', promo: 'Cobra con tarjeta automático' },
    { icon: Bot, label: 'Agente IA Vantta', promo: 'Atención al cliente autónoma' },
    { icon: Users, label: 'Base de Clientes (CRM)', promo: 'Gestiona tus leads' },
    { icon: Mail, label: 'Marketing Email', promo: 'Campañas automatizadas' },
  ];

  return (
    <div className="w-64 bg-slate-900 h-screen fixed left-0 top-0 border-r border-slate-800 flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-slate-800 shrink-0">
        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">X</div>
        <div>
          <h2 className="text-white font-bold text-lg leading-none">Xmartika</h2>
          <span className="text-xs text-teal-400 font-medium tracking-wider">PANEL ADMIN</span>
        </div>
      </div>

      {/* Menú Activo */}
      <div className="p-4 space-y-2 shrink-0">
        <p className="px-4 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Principal</p>
        {menuItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                currentView === item.id 
                ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>

      {/* Menú Bloqueado (UPSELLING) */}
      <div className="p-4 space-y-2 overflow-y-auto flex-1 custom-scrollbar">
        <p className="px-4 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2 flex justify-between items-center mt-4 border-t border-slate-800 pt-4">
          Potencia tu negocio
          <Lock size={10} />
        </p>
        
        {lockedItems.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Botón base */}
            <button className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-400 rounded-xl hover:bg-slate-800/30 transition-all cursor-not-allowed opacity-70">
              <div className="flex items-center gap-3">
                <item.icon size={18} />
                {item.label}
              </div>
              <Lock size={14} className="text-slate-600" />
            </button>

            {/* TOOLTIP CORREGIDO:
               1. 'fixed left-64' lo pega al borde del sidebar.
               2. 'pl-4' crea el espacio visual sin romper el hover (puente invisible).
               3. 'h-full flex items-center' centra el tooltip verticalmente respecto al item.
            */}
            <div className="fixed left-64 pl-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] flex items-center" style={{ marginTop: '-48px' }}>
              
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-2xl w-64 relative">
                {/* Flechita decorativa */}
                <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-800 border-l border-b border-slate-700 rotate-45"></div>
                
                <h4 className="text-white font-bold mb-1 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                  Función Premium
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  {item.promo}
                </p>
                
                {/* ENLACE A VANTTA CODE */}
                <a 
                  href="https://vanttacode.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center bg-teal-500 text-slate-900 text-xs font-bold py-2 rounded-lg hover:bg-teal-400 transition-colors cursor-pointer relative z-50"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800 shrink-0">
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
          <LogOut size={18} />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};