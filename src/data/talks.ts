export type Talk = {
  date: string;   // ISO month, e.g. 2026-07
  title: string;
  venue: string;
  kind: 'Invited' | 'Contributed';
  slides?: string;
};

export const talks: Talk[] = [
  { date: '2026-07', title: 'Diffusion map based forecasting from eDNA abundance time series', venue: 'MMEE26, Cork, Ireland', kind: 'Contributed', slides: '/assets/presentations/diffusion_map_mmee_compressed.pdf' },
  { date: '2026-06', title: 'Bridging Matrix Profiles and Empirical Dynamic Modelling in Predictions for Environmental Data', venue: 'Nordstat 2026, Helsinki, Finland', kind: 'Contributed', slides: '/assets/presentations/matrix_profile-nordstat_compressed.pdf' },
  { date: '2026-05', title: 'Footprints in time series', venue: 'Department of Earth and Environmental Sciences, Lund University, Sweden', kind: 'Invited' },
  { date: '2026-01', title: 'Empirical modeling perspective to ecosystem change', venue: 'Arctic Meeting for Adaptive Mechanisms in Biological Systems, Abisko, Sweden', kind: 'Contributed' },
  { date: '2021-10', title: 'Methods for barcode analysis in optical DNA mapping', venue: 'Nordic Computational Biology', kind: 'Invited' },
  { date: '2021-08', title: 'Using Statistical Averages to Improve Similarity Search of Large DNA Molecules to the Human Genome', venue: 'Joint Statistical Meetings 2021', kind: 'Contributed' },
  { date: '2019-12', title: 'Matricos profilių paremtas motyvų atradimas laiko eilutėse', venue: 'LJMS 9, Lithuania', kind: 'Contributed' },
  { date: '2017-04', title: 'DNA melting: theory vs. experiments', venue: 'Symposium Nanoconfined DNA, University of Gothenburg, Sweden', kind: 'Invited' },
  { date: '2014-07', title: 'Braid Group Cryptography', venue: 'YTM 2014, Copenhagen, Denmark', kind: 'Contributed' },
];

export function monthLabel(iso: string) {
  const [y, m] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
