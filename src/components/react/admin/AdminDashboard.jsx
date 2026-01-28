import React, { useState, useEffect } from 'react';
import { Save, Globe, Users, TrendingUp, Loader2 } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import { Sidebar } from './Sidebar';
import { CLIENT_ID } from '../../../lib/constants';

export const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState('summary');
  
  // Estado inicial
  const [config, setConfig] = useState({
    whatsapp_number: '',
    facebook_url: '',
    instagram_url: '',
    page_views: '0'
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // CARGAR DATOS
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        console.log("Cargando datos para:", CLIENT_ID);
        
        const { data, error } = await supabase
          .from('site_config')
          .select('*')
          .eq('client_id', CLIENT_ID);

        if (error) throw error;

        if (data) {
          const newConfig = { ...config };
          data.forEach(item => {
             // Solo asignamos si la clave existe en nuestro estado
             if (newConfig.hasOwnProperty(item.key)) {
                newConfig[item.key] = item.value;
             }
          });
          setConfig(newConfig);
        }
      } catch (error) {
        console.error("Error cargando configuración:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConfig();
  }, []);

  // GUARDAR DATOS
  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);

    const updates = [
      { client_id: CLIENT_ID, key: 'whatsapp_number', value: config.whatsapp_number },
      { client_id: CLIENT_ID, key: 'facebook_url', value: config.facebook_url },
      { client_id: CLIENT_ID, key: 'instagram_url', value: config.instagram_url },
    ];

    try {
        for (const item of updates) {
            const { error } = await supabase
              .from('site_config')
              .upsert(item, { onConflict: 'client_id, key' });
            
            if (error) throw error;
        }
        alert("¡Guardado correctamente! Los cambios ya están en la web.");
    } catch (error) {
        console.error("Error guardando:", error);
        alert("Error al guardar. Asegúrate de haber ejecutado el script SQL en Supabase para crear el cliente.");
    }
    setSaving(false);
  };

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="animate-spin text-teal-500 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex text-slate-100 font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {currentView === 'summary' ? 'Resumen General' : 'Configuración Web'}
            </h1>
            <p className="text-slate-400 text-sm">Panel Admin - Cliente: {CLIENT_ID}</p>
          </div>
        </div>

        {currentView === 'summary' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-in fade-in duration-500">
            {/* Card Visitas */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-teal-500/50 transition-all">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users size={60} />
               </div>
               <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400 mb-4 border border-slate-700">
                  <Globe size={20} />
               </div>
               <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Visitas Totales</p>
               <h3 className="text-3xl font-bold text-white">{parseInt(config.page_views || 0).toLocaleString()}</h3>
               <span className="text-xs text-green-400 flex items-center gap-1 mt-2">
                  <TrendingUp size={12} /> +12% esta semana
               </span>
            </div>

            {/* Banner Publicidad Interna (CORREGIDO EL LINK) */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-6 rounded-2xl col-span-2 flex items-center justify-between">
               <div>
                 <h3 className="text-lg font-bold text-white mb-2">¿Necesitas reportes más detallados?</h3>
                 <p className="text-slate-400 text-sm max-w-md mb-4">
                   Activa el módulo de <span className="text-teal-400 font-bold">Reportes IA</span> para ver de qué ciudades te visitan y qué productos buscan.
                 </p>
                 {/* BOTÓN CAMBIADO POR ENLACE */}
                 <a 
                   href="https://vanttacode.cl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-block text-xs bg-white text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                 >
                   Consultar precio
                 </a>
               </div>
               <div className="hidden md:block opacity-30">
                  <TrendingUp size={80} />
               </div>
            </div>
          </div>
        )}

        {currentView === 'config' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-in fade-in duration-500">
            <div className="p-6 border-b border-slate-800">
               <h3 className="text-lg font-bold text-white">Redes Sociales</h3>
            </div>
            <div className="p-8">
              <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Número de WhatsApp</label>
                  <input 
                      type="text" 
                      name="whatsapp_number"
                      value={config.whatsapp_number}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:border-teal-500"
                   />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Facebook URL</label>
                    <input 
                      type="text" 
                      name="facebook_url"
                      value={config.facebook_url}
                      onChange={handleChange}
                      placeholder="https://facebook.com/..."
                      className="block w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:border-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Instagram URL</label>
                    <input 
                      type="text" 
                      name="instagram_url"
                      value={config.instagram_url}
                      onChange={handleChange}
                      placeholder="https://instagram.com/..."
                      className="block w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:border-teal-500"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={saving}
                    className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-xl transition-all"
                  >
                    {saving ? 'Guardando...' : 'Guardar y Publicar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};