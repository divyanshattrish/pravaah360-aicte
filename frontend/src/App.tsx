import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InstitutionPortal } from './components/InstitutionPortal';
import { BureauConsole } from './components/BureauConsole';
import { EVCMobileSimulator } from './components/EVCMobileSimulator';
import { PublicVerification } from './components/PublicVerification';
import { AuditLogDrawer } from './components/AuditLogDrawer';
import { ShieldCheck, HeartHandshake, BookOpen } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('institution');
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [auditLogs, setAuditLogs] = useState<string[]>([
    "Application AICTE/2026-27/1-984210 ingested with Aadhaar e-Sign verification.",
    "Statutory 30-Year Land Lease Deed (Doc # LLD/MH/PUN/89201) scanned: 42 days remaining. Automated Alert T-60 dispatched to Registrar.",
    "Building Stability Certificate scanned: 18 days remaining. CRITICAL Alert dispatched.",
    "Automated APH Cadre Engine flagged shortfall in Associate Professors for Mechanical Dept. 7-Day Cure Window initialized.",
    "Initial Scrutiny completed for 12,530 technical applications across 8 AICTE Regional Offices."
  ]);

  const handleAddAuditEntry = (entry: string) => {
    setAuditLogs(prev => [entry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onOpenAuditLog={() => setIsAuditOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {currentTab === 'institution' && <InstitutionPortal />}
        {currentTab === 'bureau' && <BureauConsole onAddAuditEntry={handleAddAuditEntry} />}
        {currentTab === 'evc' && <EVCMobileSimulator />}
        {currentTab === 'verification' && <PublicVerification />}
      </main>

      {/* Audit Log Drawer */}
      <AuditLogDrawer 
        isOpen={isAuditOpen} 
        onClose={() => setIsAuditOpen(false)} 
        logs={auditLogs} 
      />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6 text-xs mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-bold text-slate-200">
              PRAVAAH-360 • Smart India Hackathon (SIH 2026) Prototype
            </p>
            <p className="text-[11px] text-slate-500">
              Problem Statement SIH26262: Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Supreme Court Mandate (Parshvanath Case 2013)</span>
            </span>
            <span className="flex items-center space-x-1">
              <BookOpen className="w-3.5 h-3.5 text-orange-400" />
              <span>APH 2024-2027 Compliant</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
