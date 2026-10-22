import React, { useState } from 'react';
import { 
  Smartphone, 
  MapPin, 
  Camera, 
  ShieldCheck, 
  Wifi, 
  WifiOff, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw,
  Send,
  Battery,
  Signal,
  Check
} from 'lucide-react';

interface InspectionItem {
  id: string;
  name: string;
  norm: string;
  photoCaptured: boolean;
  photoUrl?: string;
  gpsTimestamp?: string;
  hashStamp?: string;
}

export const EVCMobileSimulator: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [offlineQueueCount, setOfflineQueueCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [items, setItems] = useState<InspectionItem[]>([
    {
      id: 'item-1',
      name: 'Central Computing Lab & AI Workstations',
      norm: 'APH Norm: Min 120 Terminals + Dual 1 Gbps Leased Line',
      photoCaptured: true,
      gpsTimestamp: 'Lat: 18.5204 N, Long: 73.8567 E • 10:42 AM',
      hashStamp: 'SHA256: 8a7f9c2e01b...'
    },
    {
      id: 'item-2',
      name: 'Municipal Fire Hydrant & Hose Reel Station',
      norm: 'National Building Code (NBC) Part 4 Compliance',
      photoCaptured: false
    },
    {
      id: 'item-3',
      name: 'Divyangjan Barrier-Free Ramps & Braille Lifts',
      norm: 'APH Clause 5.3: Mandatory Accessible Access',
      photoCaptured: false
    }
  ]);

  const handleCapturePhoto = (id: string) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          photoCaptured: true,
          gpsTimestamp: 'Lat: 18.5204 N, Long: 73.8567 E • Just Now',
          hashStamp: `SHA256: ${Math.random().toString(36).substring(2, 12)}...`
        };
      }
      return item;
    }));
  };

  const handleSubmitEVC = () => {
    if (isOffline) {
      setOfflineQueueCount(prev => prev + 1);
      setSubmitted(true);
    } else {
      setSubmitted(true);
    }
  };

  const handleSyncQueue = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setOfflineQueueCount(0);
    }, 1500);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Simulation Notice Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-slate-900">Native Android EVC Mobile Inspection Companion</h2>
            <span className="bg-teal-100 text-teal-800 text-xs px-2.5 py-0.5 rounded-full font-bold border border-teal-300">
              Field Mobility Simulator (APK)
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Demonstrating native Android hardware security: mock GPS rejection, live camera sensor capture, and offline rural caching.
          </p>
        </div>

        {/* Offline Mode Switcher */}
        <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
          <span className="text-xs font-bold text-slate-700">Simulate Rural Connectivity:</span>
          <button
            onClick={() => setIsOffline(!isOffline)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
              isOffline 
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30' 
                : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
            }`}
          >
            {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            <span>{isOffline ? 'Offline Mode (No 4G)' : 'Online (4G / 5G)'}</span>
          </button>
        </div>
      </div>

      {/* Main Container with Centered Phone Frame */}
      <div className="flex justify-center">
        {/* Smartphone Device Shell */}
        <div className="w-full max-w-[420px] bg-slate-900 rounded-[44px] p-4 shadow-2xl border-4 border-slate-800 relative">
          {/* Inner Phone Screen */}
          <div className="bg-slate-50 rounded-[36px] overflow-hidden flex flex-col h-[740px] border border-slate-700/50 relative text-slate-800">
            {/* Top Phone Status Bar */}
            <div className="bg-slate-900 text-white px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-semibold">
              <span>10:45 AM</span>
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto -mt-1"></div>
              <div className="flex items-center space-x-1.5">
                <Signal className="w-3.5 h-3.5" />
                {isOffline ? <WifiOff className="w-3.5 h-3.5 text-amber-400" /> : <Wifi className="w-3.5 h-3.5 text-emerald-400" />}
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* App Header */}
            <div className="bg-gradient-to-r from-teal-700 to-slate-800 text-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] bg-teal-500/30 border border-teal-400/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    AICTE EVC Inspector
                  </span>
                  <h3 className="text-sm font-bold mt-1">Apex Engineering College, Pune</h3>
                  <p className="text-[11px] text-teal-200">Surprise Visit • ID: 1-459201931</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-300 block">Inspector</span>
                  <span className="text-xs font-bold text-white">Dr. A. K. Sundaram</span>
                </div>
              </div>
            </div>

            {/* Hardware Attestation & Anti-Spoofing Status Panel */}
            <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2.5 text-[11px] space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-900">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hardware Root-of-Trust Attestation</span>
                </span>
                <span className="bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded text-[10px]">
                  VERIFIED
                </span>
              </div>
              <div className="text-[10px] text-emerald-800 space-y-0.5 font-mono">
                <div>• Location.isFromMockProvider(): <b className="text-emerald-900">FALSE (Real GPS)</b></div>
                <div>• Campus Geofence: <b>Inside Boundary (± 3.8m accuracy)</b></div>
                <div>• Network Beacon: <b>Cell-Tower eNodeB: 404-45-128</b></div>
              </div>
            </div>

            {/* Offline Alert Strip if Offline */}
            {isOffline && (
              <div className="bg-amber-100 text-amber-900 px-4 py-1.5 text-[11px] flex items-center justify-between font-semibold border-b border-amber-200">
                <div className="flex items-center space-x-1.5">
                  <WifiOff className="w-3.5 h-3.5 text-amber-700" />
                  <span>Offline Mode: Caching in SQLite DB</span>
                </div>
                {offlineQueueCount > 0 && (
                  <span className="bg-amber-200 text-amber-900 text-[10px] px-1.5 rounded font-bold">
                    {offlineQueueCount} queued
                  </span>
                )}
              </div>
            )}

            {/* Scrollable Inspection Checklist */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-500 font-bold text-[11px]">
                <span>MANDATORY INFRASTRUCTURE VERIFICATION:</span>
                <span className="text-teal-700">
                  {items.filter(i => i.photoCaptured).length} / {items.length} Verified
                </span>
              </div>

              {items.map(item => (
                <div key={item.id} className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">{item.name}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{item.norm}</p>
                    </div>
                    {item.photoCaptured ? (
                      <span className="bg-emerald-100 text-emerald-800 p-1 rounded-full shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="bg-amber-100 text-amber-800 p-1 rounded-full shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  {item.photoCaptured ? (
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-[10px] font-mono text-slate-600 space-y-0.5">
                      <div className="text-emerald-700 font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Live Sensor Photo Attached (Gallery Upload Disabled)</span>
                      </div>
                      <div>{item.gpsTimestamp}</div>
                      <div className="text-slate-400">{item.hashStamp}</div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCapturePhoto(item.id)}
                      className="w-full bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-300 font-bold py-2 rounded-lg flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Capture Live Camera Photo</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-white border-t border-slate-200 space-y-2">
              {submitted ? (
                <div className="text-center p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="font-bold text-emerald-900 text-xs">
                    {isOffline ? 'EVC Report Cached Locally in Offline DB' : 'EVC Inspection Dossier Dispatched to AICTE!'}
                  </p>
                  <p className="text-[10px] text-emerald-700">
                    Inspection Score: <b>94 / 100</b> • Signed by Visiting Expert
                  </p>
                  {isOffline && (
                    <button
                      onClick={handleSyncQueue}
                      disabled={isSyncing}
                      className="mt-2 bg-emerald-600 text-white font-bold text-[11px] px-3 py-1 rounded-lg w-full flex items-center justify-center space-x-1"
                    >
                      <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                      <span>{isSyncing ? 'Syncing...' : 'Sync Queued Report Now'}</span>
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleSubmitEVC}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Final EVC Inspection Dossier</span>
                </button>
              )}

              <p className="text-[9px] text-center text-slate-400 font-medium">
                Mandatory under AICTE Approval Process Handbook Clause 3.12
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
