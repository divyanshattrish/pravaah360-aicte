import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Smartphone, 
  QrCode, 
  FileText, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenAuditLog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onOpenAuditLog }) => {
  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      {/* Top Ministry Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-2 border-b border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-300">
        <div className="flex items-center space-x-3">
          <span className="bg-orange-600 text-white px-2 py-0.5 rounded font-bold tracking-wide">AICTE</span>
          <span className="text-slate-400 font-medium">All India Council for Technical Education • Ministry of Education, Govt. of India</span>
        </div>
        <div className="flex items-center space-x-2 text-amber-400 font-medium bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/50">
          <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Supreme Court Cutoff (Parshvanath Case): </span>
          <span className="font-bold text-amber-300">48 Days Remaining (June 30)</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-3.5 gap-4">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <img 
            src="/favicon.png" 
            alt="PRAVAAH-360 Logo" 
            className="w-10 h-10 rounded-xl shadow-md border border-orange-400/40 object-cover" 
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-white">PRAVAAH<span className="text-orange-500">-360</span></span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                PS: SIH26262
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Integrated AICTE Approval Workflow, Expiry Alerts & Escalation System</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center space-x-1.5 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setCurrentTab('institution')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
              currentTab === 'institution'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Institution Portal</span>
          </button>

          <button
            onClick={() => setCurrentTab('bureau')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
              currentTab === 'bureau'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>AICTE Bureau Console</span>
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">3 Overdue</span>
          </button>

          <button
            onClick={() => setCurrentTab('evc')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
              currentTab === 'evc'
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Native EVC App</span>
          </button>

          <button
            onClick={() => setCurrentTab('verification')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
              currentTab === 'verification'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Public EoA QR</span>
          </button>
        </nav>

        {/* Audit Log Trigger */}
        <button
          onClick={onOpenAuditLog}
          className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700/80 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors"
        >
          <FileText className="w-4 h-4 text-emerald-400" />
          <span>DSC Audit Trail</span>
        </button>
      </div>
    </header>
  );
};
