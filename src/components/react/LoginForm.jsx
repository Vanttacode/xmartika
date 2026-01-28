import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, ArrowRight } from 'lucide-react';

export const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Limpiar error al escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // VALIDACIÓN SIMPLE (Hardcoded como pediste)
    if (formData.username === 'admin' && formData.password === 'xmartica2026') {
      // Éxito: Guardamos una "sesión" falsa en localStorage para persistencia básica
      localStorage.setItem('isAdminLoggedIn', 'true');
      // Redirigir al Dashboard
      window.location.href = '/dashboard';
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-slate-900 font-bold text-2xl mx-auto mb-4">
            X
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Bienvenido de nuevo</h1>
          <p className="text-slate-500 text-sm mt-2">Panel de Administración Xmartika</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Usuario */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Usuario</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User size={18} />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm"
                placeholder="admin"
                required
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Contraseña</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm"
                placeholder="••••••••"
                required
              />
              {/* Botón Ojito */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Mensaje de Error */}
          {error && (
            <div className="text-red-500 text-xs font-medium bg-red-50 p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all"
          >
            Ingresar al Panel
            <ArrowRight size={16} className="ml-2" />
          </button>
        </form>
      </div>
      
      <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 text-center">
        <a href="/" className="text-xs text-slate-500 hover:text-teal-600 font-medium">
          ← Volver al sitio web
        </a>
      </div>
    </div>
  );
};