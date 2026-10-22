import React, { useState } from 'react';
import { 
  Building, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  FileUp, 
  CheckSquare, 
  FileCheck2, 
  ArrowRight, 
  AlertCircle,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { ExpiryItem, UndertakingItem, initialExpiries, initialUndertakings } from '../data/mockData';

export const InstitutionPortal: React.FC = () => {
  const [expiries, setExpiries] = useState<ExpiryItem[]>(initialExpiries);
  const [undertakings, setUndertakings] = useState<UndertakingItem[]>(initialUndertakings);
  const [deficiencyResolved, setDeficiencyResolved] = useState(false);
  const [isCuring, setIsCuring] = useState(false);
  const [showRenewModal, setShowRenewModal] = useState<ExpiryItem | null>(null);

  const handleCureDeficiency = () => {
    setIsCuring(true);
    setTimeout(() => {
      setDeficiencyResolved(true);
      setIsCuring(false);
      // Also update the undertaking status to verified
      setUndertakings(prev => prev.map(u => u.id === 'und-2' ? { ...u, status: 'verified' } : u));
    }, 1200);
  };

  const handleRenewDocument = (item: ExpiryItem) => {
    setExpiries(prev => prev.map(exp => {
      if (exp.id === item.id) {
        return {
          ...exp,
          daysRemaining: exp.type === 'building_stability' ? 365 : 365 * 10,
          status: 'valid',
          expiryDate: '2027-11-10'
        };
      }
      return exp;
    }));
    setShowRenewModal(null);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Institution Banner Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
            <Building className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold text-slate-900">Delhi Institute of Technology & Management</h2>
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-emerald-300">
                AICTE Approved (EoA Cycle 2026-27)
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-0.5">
              Permanent Institute ID: <span className="font-mono font-semibold text-slate-700">1-459201931</span> • Regional Office: <span className="font-semibold text-slate-700">North-Western (Chandigarh)</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <span className="text-xs text-slate-400 block font-medium">Application Number</span>
            <span className="text-sm font-mono font-bold text-slate-800">AICTE/2026-27/1-984210</span>
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          <div className="bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-xl">
            <span className="text-[11px] text-orange-600 block font-bold uppercase tracking-wider">Current Stage</span>
            <span className="text-sm font-bold text-slate-900">Stage 2: Document Scrutiny</span>
          </div>
        </div>
      </div>

      {/* Stage-Wise Application Progress Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center space-x-2">
          <span>Sequential Stage-Wise Approval Workflow</span>
          <span className="text-xs font-normal text-slate-500">(Mandated by AICTE Approval Process Handbook)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Stage 1 */}
          <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/60 relative">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-emerald-800">Stage 1</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-xs font-bold text-slate-900">Application Ingestion</p>
            <p className="text-[11px] text-slate-500 mt-1">Uploaded & e-Signed</p>
            <span className="text-[10px] text-emerald-700 font-medium block mt-2">Completed on 10 Oct</span>
          </div>

          {/* Stage 2 - Active */}
          <div className="p-3.5 rounded-xl border-2 border-orange-500 bg-orange-50/50 relative shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-orange-700">Stage 2 (In-Progress)</span>
              <RefreshCw className="w-4 h-4 text-orange-600 animate-spin" />
            </div>
            <p className="text-xs font-bold text-slate-900">Document Scrutiny</p>
            <p className="text-[11px] text-slate-600 mt-1">APH Matrix & Expiry Audit</p>
            <span className="text-[10px] text-orange-700 font-semibold block mt-2">SLA: 2 Days Left</span>
          </div>

          {/* Stage 3 */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-400">Stage 3</span>
              <Clock className="w-4 h-4 text-slate-300" />
            </div>
            <p className="text-xs font-bold text-slate-700">EVC Field Inspection</p>
            <p className="text-[11px] text-slate-400 mt-1">Surprise Visiting Committee</p>
            <span className="text-[10px] text-slate-400 font-medium block mt-2">Triggered after Scrutiny</span>
          </div>

          {/* Stage 4 */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-400">Stage 4</span>
              <Clock className="w-4 h-4 text-slate-300" />
            </div>
            <p className="text-xs font-bold text-slate-700">Regional Committee</p>
            <p className="text-[11px] text-slate-400 mt-1">RC Scrutiny & SAC Appeal</p>
            <span className="text-[10px] text-slate-400 font-medium block mt-2">Standing Committee</span>
          </div>

          {/* Stage 5 */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-400">Stage 5</span>
              <Clock className="w-4 h-4 text-slate-300" />
            </div>
            <p className="text-xs font-bold text-slate-700">Final Officer Sign-Off</p>
            <p className="text-[11px] text-slate-400 mt-1">DSC Extension of Approval</p>
            <span className="text-[10px] text-slate-400 font-medium block mt-2">Regional Officer DSC</span>
          </div>
        </div>
      </div>

      {/* Grid: Expiry Tracking (Left) & Mandatory Undertakings (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Statutory Document & Lease Expiry Monitoring */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span>Statutory Document & Lease Expiry Engine</span>
              </h3>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-semibold border border-amber-300">
                Automated 90/60/30-Day Alerts
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Continuous background daemon monitors 30-year land leases, fire safety NOCs, and FDR guarantees to prevent statutory non-compliance.
            </p>

            <div className="space-y-3">
              {expiries.map(item => {
                let badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
                let alertText = `${item.daysRemaining} days left`;
                if (item.status === 'warning') {
                  badgeColor = 'bg-amber-100 text-amber-800 border-amber-300 animate-pulse';
                  alertText = `Expiring in ${item.daysRemaining} days (Renew Alert)`;
                } else if (item.status === 'critical') {
                  badgeColor = 'bg-red-100 text-red-800 border-red-300 animate-pulse';
                  alertText = `CRITICAL: Expiring in ${item.daysRemaining} days`;
                }

                return (
                  <div key={item.id} className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 flex items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-slate-900">{item.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${badgeColor}`}>
                          {alertText}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Doc No: <span className="font-mono text-slate-700">{item.documentNumber}</span> • Issued by: {item.issuingAuthority}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Valid: {item.issueDate} to <span className="font-semibold text-slate-600">{item.expiryDate}</span>
                      </p>
                    </div>

                    {item.status !== 'valid' && (
                      <button
                        onClick={() => setShowRenewModal(item)}
                        className="bg-white hover:bg-orange-50 text-orange-600 border border-orange-300 hover:border-orange-400 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shadow-sm"
                      >
                        Upload Renewal
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              Proactive Alert Dispatcher will send automated SMS/Email reminders to the Institution Chairman and Registrar at <b>T-90, T-60, and T-30 days</b> before expiry.
            </span>
          </div>
        </div>

        {/* Mandatory Institutional Undertakings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <FileCheck2 className="w-5 h-5 text-teal-600" />
                <span>Mandatory Undertakings & Affidavits</span>
              </h3>
              <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-md font-semibold border border-teal-300">
                Statutory Compliance
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Legal affidavits submitted on non-judicial stamp paper verified digitally for regulatory accreditation.
            </p>

            <div className="space-y-3">
              {undertakings.map(item => (
                <div key={item.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-slate-900">{item.title}</span>
                      {item.status === 'verified' ? (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full font-bold flex items-center space-x-1">
                          <CheckSquare className="w-3 h-3 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      ) : (
                        <span className="text-[10px] bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-bold flex items-center space-x-1">
                          <AlertTriangle className="w-3 h-3 text-amber-600" />
                          <span>Action Required</span>
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">{item.clause}</p>
                    <p className="text-[10px] text-slate-400">Signed: {item.signedBy} on {item.submittedDate}</p>
                  </div>

                  {item.status !== 'verified' && (
                    <button
                      onClick={handleCureDeficiency}
                      disabled={isCuring}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shadow-sm disabled:opacity-50"
                    >
                      {isCuring ? 'Verifying...' : 'Rectify'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Anti-Ragging and Divyangjan Ramp Affidavits validated against AICTE APH clauses.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Automated Deficiency Scorecard & Remediation Cure Window */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-orange-600" />
              <span>Automated APH Deficiency Scorecard & Remediation Window</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Live algorithmic comparison between institution infrastructure data and Approval Process Handbook rules.
            </p>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
            deficiencyResolved 
              ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
              : 'bg-amber-100 text-amber-800 border-amber-300 animate-pulse'
          }`}>
            {deficiencyResolved ? 'All Deficiencies Resolved (100% Compliant)' : '1 Deficiency Found (7-Day Cure Window)'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Land Carpet Area */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-bold text-slate-700">Land Area & Built-up FSI</span>
              <span className="text-emerald-700 font-bold">Passed</span>
            </div>
            <div className="text-xl font-black text-slate-900 mt-1">5.2 Acres</div>
            <p className="text-[11px] text-slate-500 mt-1">Norm: 2.5 Acres (Urban Category) • Surplus: +2.7 Acres</p>
          </div>

          {/* Card 2: Faculty Cadre Ratio */}
          <div className={`p-4 rounded-xl border ${deficiencyResolved ? 'border-emerald-200 bg-emerald-50/30' : 'border-amber-200 bg-amber-50/30'}`}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-bold text-slate-700">Faculty Cadre Ratio (1:2:6)</span>
              <span className={`font-bold ${deficiencyResolved ? 'text-emerald-700' : 'text-amber-700'}`}>
                {deficiencyResolved ? 'Deficiency Cured' : 'Shortfall Detected'}
              </span>
            </div>
            <div className="text-xl font-black text-slate-900 mt-1">
              {deficiencyResolved ? 'Ratio 1 : 2.1 : 6.2' : 'Ratio 1 : 1.4 : 5.1'}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              {deficiencyResolved ? 'All 48 cadre positions filled & ratified' : 'Shortfall of 2 Associate Professors in Mechanical Dept'}
            </p>
          </div>

          {/* Card 3: Laboratory Equipment */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-bold text-slate-700">Core Labs & Equipment</span>
              <span className="text-emerald-700 font-bold">100% Compliant</span>
            </div>
            <div className="text-xl font-black text-slate-900 mt-1">36 / 36 Labs</div>
            <p className="text-[11px] text-slate-500 mt-1">All computing & electrical laboratories equipped per syllabus</p>
          </div>
        </div>

        {/* Remediation Action Callout */}
        {!deficiencyResolved && (
          <div className="mt-4 p-4 rounded-xl border border-amber-300 bg-amber-50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-amber-900">
                  Deficiency Notice Issued: 5 Days Left in Remediation Cure Window
                </p>
                <p className="text-[11px] text-amber-700 mt-0.5">
                  AICTE allows the institute to submit recruited faculty appointment orders or re-deployment letters before the file reaches the Regional Committee.
                </p>
              </div>
            </div>

            <button
              onClick={handleCureDeficiency}
              disabled={isCuring}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all flex items-center space-x-2 disabled:opacity-50"
            >
              <FileUp className="w-4 h-4" />
              <span>{isCuring ? 'Simulating Document Rectification...' : 'Upload Recruited Faculty Orders (Cure Deficiency)'}</span>
            </button>
          </div>
        )}

        {deficiencyResolved && (
          <div className="mt-4 p-4 rounded-xl border border-emerald-300 bg-emerald-50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="text-xs font-bold text-emerald-900">
                  Deficiency Resolved Successfully! File Cleaned for Next Stage.
                </p>
                <p className="text-[11px] text-emerald-700 mt-0.5">
                  Appointment orders ratified by Scrutiny Committee. Application automatically queued for EVC Field Inspection dispatch.
                </p>
              </div>
            </div>
            <span className="text-xs bg-emerald-200 text-emerald-900 font-bold px-3 py-1 rounded-lg">
              Ready for EVC
            </span>
          </div>
        )}
      </div>

      {/* Modal: Document Renewal Upload */}
      {showRenewModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-base font-bold text-slate-900">Renew Statutory Document</h4>
              <button 
                onClick={() => setShowRenewModal(null)} 
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-700">{showRenewModal.name}</p>
              <p className="text-[11px] text-slate-500">Current Expiry: {showRenewModal.expiryDate} ({showRenewModal.daysRemaining} days remaining)</p>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-orange-500 transition-colors cursor-pointer bg-slate-50">
              <FileUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-700">Drop renewal certificate PDF here</p>
              <p className="text-[10px] text-slate-400 mt-1">Must be digitally signed by empanelled authority</p>
            </div>

            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setShowRenewModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRenewDocument(showRenewModal)}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/20"
              >
                Simulate Renewal & Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
