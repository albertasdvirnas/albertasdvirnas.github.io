export type Project = {
  name: string;
  code: string;
  desc: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  { code: 'DOGMA', name: 'DNA Map Assembler', desc: 'De novo assembly of densely labelled optical DNA maps using a matrix profile approach. Assembles DNA intensity barcodes into genome-scale maps without a reference sequence.', tags: ['MATLAB', 'Genome assembly', 'Matrix profile', 'Time series'], links: [{ label: 'GitHub', href: 'https://github.com/dnadevcode/dogma' }, { label: 'Zenodo', href: 'https://zenodo.org/search?q=DOGMA+optical+DNA' }] },
  { code: 'EMCCD-PIA', name: 'Single-Molecule Camera Analyser', desc: 'Photon-optimal image analysis for EMCCD cameras used in single-molecule fluorescence microscopy. Extracts maximum signal from low-light biological imaging experiments.', tags: ['MATLAB', 'Microscopy', 'Image analysis'], links: [{ label: 'GitHub', href: 'https://github.com/albertasdvirnas/emccd-pia' }, { label: 'Zenodo', href: 'https://zenodo.org/search?q=EMCCD-PIA' }] },
  { code: 'HCA', name: 'Chromosome Alignment Tool', desc: 'Aligns optical DNA mapping barcodes against reference chromosome sequences to identify and localise genomic regions with high accuracy.', tags: ['MATLAB', 'DNA mapping', 'Sequence alignment'], links: [{ label: 'GitHub', href: 'https://github.com/albertasdvirnas/hca' }, { label: 'Zenodo', href: 'https://zenodo.org/search?q=HCA+chromosome' }] },
  { code: 'LLDEV', name: 'Optical Mapping Image Processor', desc: 'Image processing pipeline for optical DNA mapping experiments. Handles raw microscopy images through to extracted intensity barcodes ready for downstream analysis.', tags: ['MATLAB', 'Image processing', 'Optical DNA mapping'], links: [{ label: 'GitHub', href: 'https://github.com/albertasdvirnas/lldev' }, { label: 'Zenodo', href: 'https://zenodo.org/search?q=LLDEV+optical' }] },
  { code: 'SD3', name: 'DNA Fluorescent Spot Detector', desc: 'Detects and localises fluorescently stained DNA dots in microscopy images. Used to identify labelling positions along DNA molecules for barcode construction.', tags: ['MATLAB', 'Spot detection', 'Fluorescence microscopy'], links: [{ label: 'GitHub', href: 'https://github.com/albertasdvirnas/sd3' }, { label: 'Zenodo', href: 'https://zenodo.org/search?q=SD3+DNA' }] },
  { code: 'HMMSV', name: 'Structural Variation Detector', desc: 'Hidden Markov model for detecting structural variations in DNA sequences from optical mapping data. Identifies large-scale genomic rearrangements such as insertions, deletions, and inversions.', tags: ['Hidden Markov models', 'Structural variants', 'Genomics'], links: [{ label: 'GitLab', href: 'https://gitlab.com/albertasdvirnas/hmmsv' }] },
];
