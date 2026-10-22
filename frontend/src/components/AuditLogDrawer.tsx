import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  X, 
  Lock, 
  ExternalLink 
} from 'lucide-react';

interface AuditLogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  logs: string[];
}

export const AuditLogDrawer: React.FC<AuditLogDrawerProps> = ({ isOpen, onClose, logs }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-full max-w-xl h-full shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Append-Only Statutory Audit Ledger</h3>
              <p className="text-xs text-slate-400 font-mono">MeitY Compliant • Digital Signature Verified (DSC)</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-emerald-50 border-b border-emerald-200 p-4 text-xs text-emerald-900 flex items-start space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            Every stage transition, deficiency notice, inspector score, and officer sign-off is logged with cryptographic hash non-repudiation, defending AICTE against High Court delay petitions.
          </span>
        </div>

        {/* Log Entries */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs font-mono">
          {logs.map((log, index) => (
            <div key={index} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-bold text-emerald-700">LOG_RECORD #{logs.length - index}</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>21 Oct 2026 • 20:30:12 IST</span>
                </span>
              </div>
              <p className="text-slate-800 font-semibold">{log}</p>
              <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-200/60 flex items-center justify-between">
                <span>Actor: AICTE System Daemon</span>
                <span className="text-emerald-700 font-semibold">DSC Stamped [OK]</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>PostgreSQL Append-Only Tables</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-xs"
          >
            Close Audit Log
          </button>
        </div>
      </div>
    </div>
  );
};
