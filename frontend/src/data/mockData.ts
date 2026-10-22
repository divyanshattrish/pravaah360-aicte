export interface ExpiryItem {
  id: string;
  name: string;
  type: 'land_lease' | 'fire_noc' | 'building_stability' | 'fdr';
  issueDate: string;
  expiryDate: string;
  daysRemaining: number;
  status: 'valid' | 'warning' | 'critical' | 'expired';
  documentNumber: string;
  issuingAuthority: string;
  fileSize: string;
}

export interface UndertakingItem {
  id: string;
  title: string;
  clause: string;
  status: 'verified' | 'pending' | 'action_required';
  submittedDate: string;
  signedBy: string;
}

export interface ApplicationCase {
  id: string;
  applicationNo: string;
  instituteId: string;
  instituteName: string;
  region: string;
  state: string;
  program: string;
  stage: 'scrutiny' | 'evc_inspection' | 'regional_committee' | 'sac_appeal' | 'final_decision' | 'approved' | 'rejected';
  stageName: string;
  daysPending: number;
  slaDays: number;
  assignedOfficer: string;
  escalationLevel: 'none' | 'officer_warning' | 'regional_head' | 'bureau_head' | 'member_secretary';
  deficiencyCount: number;
  evcScore?: number;
  leaseStatus: 'valid' | 'warning' | 'critical';
  fireNocStatus: 'valid' | 'warning' | 'critical';
  lastActionDate: string;
}

export interface RegionalStats {
  region: string;
  totalApplications: number;
  pendingScrutiny: number;
  pendingEVC: number;
  overdueCount: number;
  avgSlaDays: number;
}

export const initialExpiries: ExpiryItem[] = [
  {
    id: 'exp-1',
    name: '30-Year Campus Land Lease Deed',
    type: 'land_lease',
    issueDate: '1996-12-05',
    expiryDate: '2026-12-04',
    daysRemaining: 42,
    status: 'warning',
    documentNumber: 'LLD/MH/PUN/89201',
    issuingAuthority: 'Collector Office, Pune District',
    fileSize: '4.8 MB PDF'
  },
  {
    id: 'exp-2',
    name: 'Municipal Fire Safety & Hydrant NOC',
    type: 'fire_noc',
    issueDate: '2025-08-15',
    expiryDate: '2027-08-14',
    daysRemaining: 295,
    status: 'valid',
    documentNumber: 'PMC/FIRE/NOC-2025/1932',
    issuingAuthority: 'Chief Fire Officer, Municipal Corporation',
    fileSize: '2.1 MB PDF'
  },
  {
    id: 'exp-3',
    name: 'Structural Building Stability Certificate',
    type: 'building_stability',
    issueDate: '2021-11-10',
    expiryDate: '2026-11-10',
    daysRemaining: 18,
    status: 'critical',
    documentNumber: 'PWD/STRUC/VAL-8821',
    issuingAuthority: 'Chartered Structural Engineer (PWD Empanelled)',
    fileSize: '3.4 MB PDF'
  },
  {
    id: 'exp-4',
    name: 'FDR Security Deposit (Joint Lien with AICTE)',
    type: 'fdr',
    issueDate: '2021-04-12',
    expiryDate: '2031-04-12',
    daysRemaining: 1632,
    status: 'valid',
    documentNumber: 'SBI/FDR/AICTE/LIEN-40192',
    issuingAuthority: 'State Bank of India, Institutional Banking',
    fileSize: '1.2 MB PDF'
  }
];

export const initialUndertakings: UndertakingItem[] = [
  {
    id: 'und-1',
    title: 'Mandatory Anti-Ragging Undertaking',
    clause: 'APH Clause 6.4 (Supreme Court Guidelines)',
    status: 'verified',
    submittedDate: '2026-10-10',
    signedBy: 'Dr. Ramesh Kulkarni (Principal / Trustee)'
  },
  {
    id: 'und-2',
    title: 'Faculty Cadre Ratio (1:2:6) & 6th/7th Pay Scale Affidavit',
    clause: 'APH Appendix 7 (Faculty Norms)',
    status: 'action_required',
    submittedDate: '2026-10-12',
    signedBy: 'Chairman, Vidya Vikas Educational Trust'
  },
  {
    id: 'und-3',
    title: 'Tuition Fee Regulatory Committee Compliance Affidavit',
    clause: 'APH Clause 4.19 (No Capitation Fee Guarantee)',
    status: 'verified',
    submittedDate: '2026-10-08',
    signedBy: 'Secretary, Governing Body'
  },
  {
    id: 'und-4',
    title: 'Barrier-Free Physical Environment (Ramps & Lifts) Affidavit',
    clause: 'APH Clause 5.3 (Divyangjan Facilities)',
    status: 'verified',
    submittedDate: '2026-10-09',
    signedBy: 'Principal & Campus Estate Officer'
  }
];

export const initialApplications: ApplicationCase[] = [
  {
    id: 'app-001',
    applicationNo: 'AICTE/2026-27/1-984210',
    instituteId: '1-459201931',
    instituteName: 'Maharashtra Institute of Technology & Research',
    region: 'Western',
    state: 'Maharashtra',
    program: 'Engineering & Technology (UG/PG)',
    stage: 'scrutiny',
    stageName: 'Automated & Committee Scrutiny',
    daysPending: 8,
    slaDays: 7,
    assignedOfficer: 'Smt. Neha Deshmukh (Scrutiny Officer)',
    escalationLevel: 'regional_head',
    deficiencyCount: 2,
    leaseStatus: 'warning',
    fireNocStatus: 'valid',
    lastActionDate: '2026-10-15'
  },
  {
    id: 'app-002',
    applicationNo: 'AICTE/2026-27/1-881920',
    instituteId: '1-339182011',
    instituteName: 'Kaveri Institute of Technology & Management',
    region: 'Southern',
    state: 'Karnataka',
    program: 'MCA & Management (MBA)',
    stage: 'evc_inspection',
    stageName: 'Expert Visiting Committee (EVC)',
    daysPending: 4,
    slaDays: 10,
    assignedOfficer: 'Dr. C. R. Narayanan (EVC Coordinator)',
    escalationLevel: 'none',
    deficiencyCount: 0,
    evcScore: 88,
    leaseStatus: 'valid',
    fireNocStatus: 'valid',
    lastActionDate: '2026-10-19'
  },
  {
    id: 'app-003',
    applicationNo: 'AICTE/2026-27/1-772190',
    instituteId: '1-209184719',
    instituteName: 'Aryavart Institute of Engineering & Architecture',
    region: 'Northern',
    state: 'Uttar Pradesh',
    program: 'Architecture & Applied Arts',
    stage: 'final_decision',
    stageName: 'Final Officer Decision Support',
    daysPending: 2,
    slaDays: 5,
    assignedOfficer: 'Shri Arvind Saxena (Regional Officer - Kanpur)',
    escalationLevel: 'none',
    deficiencyCount: 0,
    evcScore: 92,
    leaseStatus: 'valid',
    fireNocStatus: 'valid',
    lastActionDate: '2026-10-21'
  },
  {
    id: 'app-004',
    applicationNo: 'AICTE/2026-27/1-662910',
    instituteId: '1-512891022',
    instituteName: 'Brahmaputra Polytechnic & Technology Academy',
    region: 'Eastern',
    state: 'Assam',
    program: 'Diploma in Engineering',
    stage: 'scrutiny',
    stageName: 'Document Scrutiny',
    daysPending: 12,
    slaDays: 7,
    assignedOfficer: 'Shri B. K. Gogoi (Scrutiny Member)',
    escalationLevel: 'bureau_head',
    deficiencyCount: 3,
    leaseStatus: 'critical',
    fireNocStatus: 'warning',
    lastActionDate: '2026-10-11'
  },
  {
    id: 'app-005',
    applicationNo: 'AICTE/2026-27/1-449102',
    instituteId: '1-781920199',
    instituteName: 'Indus Valley Institute of Pharmacy & Research',
    region: 'Central',
    state: 'Madhya Pradesh',
    program: 'Pharmacy (B.Pharm/M.Pharm)',
    stage: 'regional_committee',
    stageName: 'Regional Committee Review',
    daysPending: 5,
    slaDays: 7,
    assignedOfficer: 'Dr. Sunita Sharma (RC Member)',
    escalationLevel: 'officer_warning',
    deficiencyCount: 1,
    leaseStatus: 'valid',
    fireNocStatus: 'valid',
    lastActionDate: '2026-10-18'
  }
];

export const regionalStats: RegionalStats[] = [
  { region: 'Northern (Kanpur)', totalApplications: 1420, pendingScrutiny: 184, pendingEVC: 62, overdueCount: 14, avgSlaDays: 5.2 },
  { region: 'Western (Mumbai)', totalApplications: 2180, pendingScrutiny: 290, pendingEVC: 110, overdueCount: 28, avgSlaDays: 6.8 },
  { region: 'Southern (Chennai)', totalApplications: 2450, pendingScrutiny: 210, pendingEVC: 95, overdueCount: 12, avgSlaDays: 4.9 },
  { region: 'South-Central (Hyderabad)', totalApplications: 1980, pendingScrutiny: 175, pendingEVC: 80, overdueCount: 9, avgSlaDays: 4.1 },
  { region: 'North-Western (Chandigarh)', totalApplications: 1120, pendingScrutiny: 120, pendingEVC: 45, overdueCount: 7, avgSlaDays: 4.6 },
  { region: 'Eastern (Kolkata)', totalApplications: 890, pendingScrutiny: 145, pendingEVC: 54, overdueCount: 22, avgSlaDays: 8.1 },
  { region: 'Central (Bhopal)', totalApplications: 760, pendingScrutiny: 85, pendingEVC: 38, overdueCount: 8, avgSlaDays: 4.8 },
  { region: 'South-Western (Bengaluru)', totalApplications: 1750, pendingScrutiny: 160, pendingEVC: 72, overdueCount: 11, avgSlaDays: 4.4 }
];
