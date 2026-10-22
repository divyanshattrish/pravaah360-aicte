import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  ArrowUpRight, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  TrendingUp, 
  Send,
  Building,
  KeyRound,
  Bell
} from 'lucide-react';
import { ApplicationCase, RegionalStats, initialApplications, regionalStats } from '../data/mockData';

interface BureauConsoleProps {
  onAddAuditEntry: (entry: string) => void;
}

export const BureauConsole: React.FC<BureauConsoleProps> = ({ onAddAuditEntry }) => {
  const [applications, setApplications] = useState<ApplicationCase[]>(initialApplications);
  const [filterRegion, setFilterRegion] = useState<string>('All');
  const [filterStage, setFilterStage] = useState<string>('All');
  const [selectedApp, setSelectedApp] = useState<ApplicationCase | null>(null);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);
  const [isSigning, setIsSigning] = useState(false);

  // Filter applications
  const filteredApps = applications.filter(app => {
    const matchRegion = filterRegion === 'All' || app.region.toLowerCase().includes(filterRegion.toLowerCase());
    const matchStage = filterStage === 'All' || 
      (filterStage === 'overdue' && app.daysPending > app.slaDays) ||
      (filterStage === 'scrutiny' && app.stage === 'scrutiny') ||
      (filterStage === 'evc' && app.stage === 'evc_inspection');
    return matchRegion && matchStage;
  });

  const handleSimulateEscalation = (appId: string) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        const nextEscalation = app.escalationLevel === 'none' 
          ? 'officer_warning' 
          : app.escalationLevel === 'officer_warning' 
          ? 'regional_head' 
          : app.escalationLevel === 'regional_head'
          ? 'bureau_head'
          : 'member_secretary';
        
        onAddAuditEntry(`Automated SLA Escalation triggered for ${app.instituteName}. Escalated to: ${nextEscalation.toUpperCase()}`);
        return {
          ...app,
          daysPending: app.daysPending + 3,
          escalationLevel: nextEscalation
        };
      }
      return app;
    }));
  };

  const handleOfficerDecision = (app: ApplicationCase, decision: 'approved' | 'rejected' | 'clarification') => {
    setIsSigning(true);
    setTimeout(() => {
      setIsSigning(false);
      setApplications(prev => prev.map(a => {
        if (a.id === app.id) {
          return {
            ...a,
            stage: decision === 'approved' ? 'approved' : decision === 'rejected' ? 'rejected' : 'scrutiny',
            stageName: decision === 'approved' ? 'Approved (EoA Issued)' : decision === 'rejected' ? 'Rejected' : 'Clarification Requested',
            daysPending: 0,
            escalationLevel: 'none'
          };
        }
        return a;
      }));

      const actionText = decision === 'approved' 
        ? `Final EoA Approval digitally signed by AICTE Regional Officer with DSC Token [SHA256: 8a4f9102c] for ${app.instituteName}`
        : decision === 'rejected'
        ? `Statutory Rejection issued by AICTE Competent Authority for ${app.instituteName}`
        : `7-Day Clarification notice dispatched to ${app.instituteName}`;
      
      onAddAuditEntry(actionText);
      setActionSuccessMessage(actionText);
      setSelectedApp(null);

      setTimeout(() => setActionSuccessMessage(null), 5000);
    }, 1200);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner Alert if Success */}
      {actionSuccessMessage && (
        <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-2xl flex items-center justify-between text-xs text-emerald-900 shadow-sm animate-in fade-in duration-300">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-semibold">{actionSuccessMessage}</span>
          </div>
          <button onClick={() => setActionSuccessMessage(null)} className="font-bold text-emerald-700 hover:text-emerald-900">
            Dismiss
          </button>
        </div>
      )}

      {/* Bureau Command Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-slate-900">AICTE Central Approval Bureau & Pendency Console</h2>
            <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-bold border border-blue-300">
              HQ Dashboard (New Delhi)
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Real-time tracking of 10,500+ technical institutions across 8 Regional Offices with automated SLA countdowns.
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-center">
            <span className="text-slate-400 block text-[10px] font-bold uppercase">Total Ingested</span>
            <span className="text-base font-extrabold text-slate-900">12,530</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl text-center">
            <span className="text-emerald-700 block text-[10px] font-bold uppercase">EoA Issued</span>
            <span className="text-base font-extrabold text-emerald-800">8,940</span>
          </div>
          <div className="bg-red-50 border border-red-200 px-3.5 py-2 rounded-xl text-center">
            <span className="text-red-700 block text-[10px] font-bold uppercase">Overdue Cases</span>
            <span className="text-base font-extrabold text-red-800">108</span>
          </div>
        </div>
      </div>

      {/* Regional Pendency Heatmap (Core PS Requirement) */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Bureau & Regional Office Pendency Heatmap</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Live bottleneck visualization across 8 AICTE regions to monitor scrutiny and EVC delays before Supreme Court deadlines.
            </p>
          </div>
          <span className="text-xs text-slate-400">Target SLA: ≤ 7.0 Days</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {regionalStats.map(reg => {
            const isHighDelay = reg.avgSlaDays > 6.0;
            return (
              <div 
                key={reg.region} 
                className={`p-3 rounded-xl border transition-all text-center ${
                  isHighDelay 
                    ? 'border-red-200 bg-red-50/50 hover:border-red-300' 
                    : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                }`}
              >
                <span className="text-[10px] font-bold text-slate-600 block truncate" title={reg.region}>
                  {reg.region.split(' ')[0]}
                </span>
                <span className="text-lg font-black text-slate-900 block mt-1">
                  {reg.totalApplications}
                </span>
                <div className="mt-2 space-y-0.5 text-[10px]">
                  <div className="flex justify-between text-slate-500">
                    <span>Scrutiny:</span>
                    <span className="font-semibold text-slate-800">{reg.pendingScrutiny}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Overdue:</span>
                    <span className={`font-bold ${reg.overdueCount > 15 ? 'text-red-600' : 'text-amber-600'}`}>
                      {reg.overdueCount}
                    </span>
                  </div>
                </div>
                <div className={`mt-2 text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  isHighDelay ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {reg.avgSlaDays}d Avg SLA
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Application Queue & Auto-Escalation Engine */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span>Active Approval Cases & Hierarchy Escalation Engine</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Files exceeding SLA thresholds auto-escalate from Assigned Officer to Regional Officer, Bureau Head, and Member Secretary.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            {/* Filter buttons */}
            <button
              onClick={() => setFilterStage('All')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                filterStage === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Cases
            </button>
            <button
              onClick={() => setFilterStage('overdue')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center space-x-1 ${
                filterStage === 'overdue' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Overdue Only</span>
            </button>
            <button
              onClick={() => setFilterStage('scrutiny')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                filterStage === 'scrutiny' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              In Scrutiny
            </button>
            <button
              onClick={() => setFilterStage('evc')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                filterStage === 'evc' ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
              }`}
            >
              EVC Inspection
            </button>
          </div>
        </div>

        {/* Applications Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Institute & Application No.</th>
                <th className="py-3 px-4">Region</th>
                <th className="py-3 px-4">Current Stage</th>
                <th className="py-3 px-4">SLA / Pendency</th>
                <th className="py-3 px-4">Escalation Status</th>
                <th className="py-3 px-4">Assigned Officer</th>
                <th className="py-3 px-4 text-right">Officer Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredApps.map(app => {
                const isOverdue = app.daysPending > app.slaDays;
                let escalationBadge = 'None (Within SLA)';
                let escColor = 'bg-slate-100 text-slate-600';

                if (app.escalationLevel === 'officer_warning') {
                  escalationBadge = 'Tier 1: Officer Warning';
                  escColor = 'bg-amber-100 text-amber-800 border border-amber-300';
                } else if (app.escalationLevel === 'regional_head') {
                  escalationBadge = 'Tier 2: Regional Officer Alert';
                  escColor = 'bg-orange-100 text-orange-800 border border-orange-300 font-bold';
                } else if (app.escalationLevel === 'bureau_head') {
                  escalationBadge = 'Tier 3: Bureau Head Escalated';
                  escColor = 'bg-red-100 text-red-800 border border-red-300 font-bold animate-pulse';
                } else if (app.escalationLevel === 'member_secretary') {
                  escalationBadge = 'Tier 4: Member Secretary (HQ)';
                  escColor = 'bg-purple-100 text-purple-800 border border-purple-300 font-black animate-pulse';
                }

                return (
                  <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{app.instituteName}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{app.applicationNo} • ID: {app.instituteId}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-700 font-medium">
                      {app.region} ({app.state})
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-semibold text-[11px] border border-blue-200">
                        {app.stageName}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1.5">
                        <span className={`font-bold ${isOverdue ? 'text-red-600' : 'text-slate-800'}`}>
                          {app.daysPending}d / {app.slaDays}d
                        </span>
                        {isOverdue && (
                          <span className="text-[9px] bg-red-100 text-red-700 font-bold px-1 rounded">
                            OVERDUE
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${escColor}`}>
                        {escalationBadge}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600 text-[11px]">
                      {app.assignedOfficer}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedApp(app)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all"
                      >
                        Review & Action
                      </button>
                      <button
                        onClick={() => handleSimulateEscalation(app.id)}
                        title="Simulate delay to trigger next hierarchy escalation"
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold px-2 py-1.5 rounded-lg border border-slate-300"
                      >
                        +3d Delay
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Human-in-the-Loop Officer Decision Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-md uppercase">
                  Human-in-the-Loop Decision Support
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1">{selectedApp.instituteName}</h4>
                <p className="text-xs text-slate-400 font-mono">App No: {selectedApp.applicationNo}</p>
              </div>
              <button 
                onClick={() => setSelectedApp(null)} 
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Automated Audit & Deficiency Summary */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Automated Scrutiny Findings:</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Land Lease Expiry Status</span>
                  <span className="font-bold text-emerald-700">Valid (30-Year Lease Verified)</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Fire Safety & Stability NOC</span>
                  <span className="font-bold text-emerald-700">Valid Municipal Approvals</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Faculty Cadre (1:2:6)</span>
                  <span className="font-bold text-slate-800">100% Ratified & Validated</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">EVC Campus Visit Score</span>
                  <span className="font-bold text-blue-700">{selectedApp.evcScore ?? 92} / 100 (Recommended)</span>
                </div>
              </div>
            </div>

            {/* Officer Notice */}
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <b>Statutory AICTE Officer Discretion:</b> Automated verification is complete. The authorized AICTE Officer / Regional Director holds final decision authority under Section 10(k) of the AICTE Act.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <button
                onClick={() => handleOfficerDecision(selectedApp, 'clarification')}
                disabled={isSigning}
                className="px-4 py-2 rounded-lg text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 transition-colors"
              >
                Request Clarification (7d)
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleOfficerDecision(selectedApp, 'rejected')}
                  disabled={isSigning}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-red-700 hover:bg-red-50 border border-red-300 transition-colors"
                >
                  Reject Application
                </button>

                <button
                  onClick={() => handleOfficerDecision(selectedApp, 'approved')}
                  disabled={isSigning}
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 flex items-center space-x-2 disabled:opacity-50"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{isSigning ? 'Signing with DSC Token...' : 'Grant EoA Approval (DSC Sign)'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
