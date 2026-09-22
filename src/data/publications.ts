export type Pub = {
  title: string;          // may contain <em> for species names
  authors: string;        // "Dvirnas A." is highlighted automatically
  venue?: string;
  year: number | 'in-prep' | 'thesis';
  status?: 'In preparation' | 'Submitted';
  doi?: string;
  links?: { label: string; href: string }[];
  top5?: boolean;
  postPhd?: boolean;
};

export const stats = { articles: 14, citations: 145, inPrep: 3 };

export const publications: Pub[] = [
  { year: 'in-prep', status: 'In preparation', title: 'Benchmarking dynamical and neural forecasting for compositional ecological time series', authors: 'Dvirnas A., Stenberg P., Brännström Å.' },
  { year: 'in-prep', status: 'Submitted', title: 'Rapid analysis of toxin-encoding ETEC plasmids using a basic optical DNA mapping setup suitable for low-resource settings', authors: 'Frykholm K., Wranne M.S., Zachrisson H., Wrande M., Sriram K.K., Dvirnas A., Garcias Puigserver B., Leal-Garza L.M., Sandegren L., Sjöling Å., von Mentzer A., & Westerlund F.' },
  { year: 'in-prep', status: 'Submitted', title: 'Complete de novo assembly of yeast genomes using enzyme-free, dense optical genome mapping', authors: 'Westerlund F., Leal-Garza L., Zachrisson H., Dvirnas A., Goyal G., Obi I., Sabouri N., Ambjörnsson T.' },

  { year: 2025, top5: true, postPhd: true, title: 'DOGMA: de novo assembly of densely labelled optical DNA maps using a matrix profile approach', authors: 'Dvirnas A., Leal-Garza L.M., Abbaspour Z., Fröbrant E., Frykholm K., Wrande M., Sandegren L., Westerlund F., Ambjörnsson T.', venue: 'PLOS ONE, 20(12): e0335633', doi: '10.1371/journal.pone.0335633', links: [{ label: 'Code', href: 'https://github.com/dnadevcode/dogma' }] },
  { year: 2025, title: 'High-throughput single molecule nanofluidic studies on <em>B. subtilis</em> Rok protein interaction with DNA', authors: 'Pavlova E., Kunnath R.N., van Erp B., Dvirnas A., Sriram K., Dame R., Westerlund F.', venue: 'QRB Discovery, Cambridge Core', doi: '10.1017/qrd.2025.2' },
  { year: 2025, title: 'Stained DNA Dot Detection (SD3): An automated tool for quantifying fluorescent features along single stretched DNA molecules', authors: 'Aning O.A., Dvirnas A., Nyblom M., Krog J., Carlson J., Johansson P., Ambjörnsson T., Westerlund F.', venue: 'DNA Repair, 149:103836', doi: '10.1016/j.dnarep.2025.103836' },
  // The old site linked a placeholder DOI (10.1021/acsinfecdis.5c00XXX); add the real one when known.
  { year: 2025, title: 'Strain-level typing of <em>Streptococcus pyogenes</em> using optical DNA mapping', authors: 'Kunnath R.N., Abbaspour Z., Johnning A., Frykholm K., Wrande M., Dvirnas A., Kök S., Giske C.G., Ambjörnsson T., Sandegren L., Kristiansson E.', venue: 'ACS Infectious Diseases, 11(11):3085–3092' },
  { year: 2025, title: 'Photophysical image analysis for sCMOS cameras: Noise modelling and estimation of background parameters in fluorescence-microscopy images', authors: 'Mohanta D., Kunnath R.N., Clarkson E., Dvirnas A., Westerlund F., Ambjörnsson T.', venue: 'PLOS ONE, 20(11): e0335310', doi: '10.1371/journal.pone.0335310' },
  { year: 2025, title: 'Random sampling of ligand arrangements on a one-dimensional lattice', authors: 'Mohanta D., Dvirnas A., Ambjörnsson T.', venue: 'Physical Review E, 111(1):014412', doi: '10.1103/PhysRevE.111.014412' },

  { year: 2024, top5: true, title: 'Photophysical image analysis: Unsupervised probabilistic thresholding for images from electron-multiplying charge-coupled devices', authors: 'Krog J., Dvirnas A., Ström O.E., Beech J.P., Tegenfeldt J.O., Müller V., Westerlund F., Ambjörnsson T.', venue: 'PLOS ONE', doi: '10.1371/journal.pone.0300122' },

  { year: 2023, title: 'Equilibrium melting probabilities of a DNA molecule with a defect: An exact solution of the Poland–Scheraga model', authors: 'Genthon A., Dvirnas A., Ambjörnsson T.', venue: 'The Journal of Chemical Physics, 159(14)', doi: '10.1063/5.0168685' },
  { year: 2023, title: 'Strain-level bacterial typing directly from patient samples using optical DNA mapping', authors: 'Nyblom M., Johnning A., Frykholm K., Wrande M., Müller V., Goyal G., Robertsson M., Dvirnas A., Sewunet T., Kök S., Ambjörnsson T.', venue: 'Communications Medicine, 3(1):31', doi: '10.1038/s43856-023-00257-3' },

  { year: 2021, top5: true, title: 'Detection of structural variations in densely-labelled optical DNA barcodes: A hidden Markov model approach', authors: 'Dvirnas A., Stewart C., Müller V., Bikkarolla S.K., Frykholm K., Sandegren L., Kristiansson E., Westerlund F., Ambjörnsson T.', venue: 'PLOS ONE, 16(11): e0259670', doi: '10.1371/journal.pone.0259670' },

  { year: 2020, title: 'Cultivation-free typing of bacteria using optical DNA mapping', authors: 'Müller V., Nyblom M., Johnning A., Wrande M., Dvirnas A., Kök S., Giske C.G., Ambjörnsson T., Sandegren L., Kristiansson E., Westerlund F.', venue: 'ACS Infectious Diseases, 6(5):1076–1084', doi: '10.1021/acsinfecdis.9b00464' },

  { year: 2019, top5: true, title: 'Enzyme-free optical DNA mapping of the human genome using competitive binding', authors: 'Müller V., Dvirnas A., Andersson J., Singh V., Kök S., Johansson P., Ebenstein Y., Ambjörnsson T., Westerlund F.', venue: 'Nucleic Acids Research, 47(15): e89', doi: '10.1093/nar/gkz489' },
  { year: 2019, title: 'Optical DNA mapping combined with Cas9-targeted resistance gene identification for rapid tracking of resistance plasmids in a neonatal intensive care unit outbreak', authors: 'Bikkarolla S.K., Nordberg V., Rajer F., Müller V., Kabir M.H., Kök S., Dvirnas A., Ambjörnsson T., Giske C.G., Navér L., Sandegren L.', venue: 'mBio, 10(4): e00347-19', doi: '10.1128/mBio.00347-19' },

  { year: 2018, top5: true, title: 'Facilitated sequence assembly using densely labeled optical DNA barcodes: A combinatorial auction approach', authors: 'Dvirnas A., Pichler C., Stewart C.L., Quaderi S., Nyberg L.K., Müller V., Kumar Bikkarolla S., Kristiansson E., Sandegren L., Westerlund F., Ambjörnsson T.', venue: 'PLOS ONE, 13(3): e0193900', doi: '10.1371/journal.pone.0193900' },

  { year: 'thesis', title: 'Methods for barcode analysis in optical DNA mapping', authors: 'Dvirnas A.', venue: 'PhD thesis, Lund University · ISBN 978-91-8039-125-2 · defended 25 Jan 2022', links: [{ label: 'PDF', href: 'https://portal.research.lu.se/files/110913095/Albertas_Dvirnas_WEBB.pdf' }] },
];
