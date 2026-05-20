/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'director' | 'postdoc' | 'phd' | 'master' | 'intern';
  image: string;
  email: string;
  orcid?: string;
  office?: string;
  bio: string;
  taxonomy?: string[];
  distinctions?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  pi: string;
  period: string;
  description: string;
  image?: string;
  status: 'active' | 'completed' | 'ongoing';
  detailsUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  citation: string;
  abstract?: string;
  year: number;
  doi?: string;
  url?: string;
}

export interface ArchiveLog {
  filename: string;
  timestamp: string;
  size: string;
  hash: string;
  content: string;
  category: string;
}
