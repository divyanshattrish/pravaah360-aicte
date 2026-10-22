import React, { useState } from 'react';
import { 
  QrCode, 
  Search, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Download, 
  Share2, 
  FileCheck,
  Building2,
  ExternalLink
} from 'lucide-react';

export const PublicVerification: React.FC = () => {
  const [instituteIdInput, setInstituteIdInput] = useState('1-459201931');
  const [isSearching, setIsSearching] = useState(false);
  const [verified, setVerified] = useState(true);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setVerified(true);
    }, 800);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Search Header Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-slate-900">Public Extension of Approval (EoA) QR Verifier</h2>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2.5 py-0.5 rounded-full font-bold border border-indigo-300">
              Student & Citizen Transparency Portal
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Instant tamper-proof verification of approved courses and sanctioned seat intake to eliminate fake colleges.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleVerify} className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={instituteIdInput}
              onChange={(e) => setInstituteIdInput(e.target.value)}
              placeholder="Enter AICTE Permanent Institute ID"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition-all flex items-center space-x-1.5 whitespace-nowrap"
          >
            <QrCode className="w-4 h-4" />
            <span>{isSearching ? 'Verifying...' : 'Verify Credential'}</span>
          </button>
        </form>
      </div>

      {/* Verified Official EoA Certificate Document */}
      {verified && (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-slate-200 relative overflow-hidden">
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <Building2 className="w-[500px] h-[500px] text-slate-900" />
          </div>

          {/* Top Certificate Header */}
          <div className="text-center border-b-2 border-slate-900/80 pb-6 mb-6">
            <div className="inline-block bg-orange-600 text-white font-black text-xs px-3 py-1 rounded tracking-widest uppercase mb-2">
              Government of India • Ministry of Education
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              ALL INDIA COUNCIL FOR TECHNICAL EDUCATION
            </h1>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Nelson Mandela Marg, Vasant Kunj, New Delhi - 110070 • www.aicte-india.org
            </p>
            <div className="mt-3 inline-block bg-emerald-50 border border-emerald-300 px-4 py-1.5 rounded-full">
              <span className="text-xs font-bold text-emerald-800 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>OFFICIAL EXTENSION OF APPROVAL (EoA) LETTER • ACADEMIC YEAR 2026-27</span>
              </span>
            </div>
          </div>

          {/* Letter Metadata */}
          <div className="grid grid-cols-2 text-xs mb-6 gap-y-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-slate-400 block text-[11px]">Approval Letter Order No:</span>
              <span className="font-mono font-bold text-slate-800">AICTE/NWRO/1-459201931/2026/EOA</span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[11px]">Date of Competent Sign-Off:</span>
              <span className="font-bold text-slate-800">21st October 2026</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Institution Name:</span>
              <span className="font-bold text-slate-900 text-sm">Delhi Institute of Technology & Management</span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[11px]">Permanent Institute ID:</span>
              <span className="font-mono font-bold text-indigo-700 text-sm">1-459201931</span>
            </div>
          </div>

          {/* Body Preamble */}
          <p className="text-xs text-slate-700 leading-relaxed mb-6 text-justify">
            In terms of the provisions under the <b>All India Council for Technical Education (Grant of Approvals for Technical Institutions) Regulations</b> and the Approval Process Handbook (APH 2024-2027), the Council hereby conveys the approval to the following courses with the approved intake indicated below for the Academic Year 2026-2027:
          </p>

          {/* Approved Intake Table */}
          <div className="rounded-xl border border-slate-300 overflow-hidden mb-6">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300 text-[11px]">
                <tr>
                  <th className="py-2.5 px-3">Program</th>
                  <th className="py-2.5 px-3">Level</th>
                  <th className="py-2.5 px-3">Course / Specialization</th>
                  <th className="py-2.5 px-3">Affiliating University</th>
                  <th className="py-2.5 px-3 text-right">Approved Intake</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr>
                  <td className="py-2 px-3 font-semibold">Engg & Tech</td>
                  <td className="py-2 px-3">Under Graduate</td>
                  <td className="py-2 px-3 font-bold">Computer Science & Engineering</td>
                  <td className="py-2 px-3 text-slate-600">GGSIPU, Delhi</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-indigo-700">180</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold">Engg & Tech</td>
                  <td className="py-2 px-3">Under Graduate</td>
                  <td className="py-2 px-3 font-bold">Artificial Intelligence & Data Science</td>
                  <td className="py-2 px-3 text-slate-600">GGSIPU, Delhi</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-indigo-700">60</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold">Engg & Tech</td>
                  <td className="py-2 px-3">Under Graduate</td>
                  <td className="py-2 px-3 font-bold">Electronics & Communication Engg</td>
                  <td className="py-2 px-3 text-slate-600">GGSIPU, Delhi</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-indigo-700">120</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold">Management</td>
                  <td className="py-2 px-3">Post Graduate</td>
                  <td className="py-2 px-3 font-bold">Master in Business Administration (MBA)</td>
                  <td className="py-2 px-3 text-slate-600">GGSIPU, Delhi</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-indigo-700">60</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Statutory Conditions Box */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1 mb-8">
            <span className="font-bold text-slate-800 block">Mandatory Regulatory Conditions Complied:</span>
            <div>1. 30-Year Land lease deed verified under Revenue Records of NCT Delhi.</div>
            <div>2. Municipal Fire Safety NOC and Structural Stability Certificate verified by empanelled authority.</div>
            <div>3. Faculty-to-Student Cadre Ratio strictly maintained as 1:2:6 per APH 2024-2027 norms.</div>
            <div>4. Mandatory compliance with the Supreme Court Judgment in <i>Parshvanath Charitable Trust (2013)</i>.</div>
          </div>

          {/* Footer Signatures & QR Section */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t-2 border-slate-900/80">
            {/* Left QR Code representation */}
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-slate-900 rounded-lg p-2 flex items-center justify-center text-white">
                <QrCode className="w-16 h-16 text-white" />
              </div>
              <div className="text-[11px] text-slate-500 space-y-0.5">
                <span className="font-bold text-slate-800 block">Cryptographic QR Verification</span>
                <span className="text-[10px] font-mono block">Hash: a8f9c0218b3...</span>
                <span className="text-[10px] text-emerald-700 font-semibold block">Signed with National Root CA</span>
              </div>
            </div>

            {/* Right Officer Digital Signature */}
            <div className="text-right space-y-1">
              <div className="inline-block bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg text-left">
                <span className="text-[10px] text-blue-800 font-bold block flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 inline" />
                  <span>Digitally Signed with DSC Token</span>
                </span>
                <span className="text-[11px] font-bold text-slate-900 block mt-0.5">Prof. (Dr.) Rajive Kumar</span>
                <span className="text-[10px] text-slate-500 block">Member Secretary, AICTE New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
