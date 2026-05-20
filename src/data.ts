/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, Project, Publication, ArchiveLog } from './types';

export const drLiangChen: TeamMember = {
  id: 'liang-chen',
  name: 'Dr. Liang Chen',
  role: 'Director of CASS Lab. Professor of History of Science and Technology',
  category: 'director',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQAks9MffbQknJ_G9QxaxSIvFpPBv0hfHt0_AnX3Q0sNped8fyo3U39MACf3RquWCsKf98JY1M_GT1kEq7FZLZ3VsKdDzdJ3wnhov-_ykyVVDs3pLvqol3yJn6Pk6G3_VnrwayFrgt1xhxKjersTdIyxkGWVCUY5ptbtxuwnIFv1ljGkBm3LH7ndiJOpwE8y1eveQl8oKyKqNTyg1h8EUpttEhm0wXvFnSru6pSlDOhrnma74jVwWYRgovBzvG7g7nXNxO1wTSj8A',
  email: 'chen.l@casslab.org',
  orcid: '0000-0002-3948-1834',
  office: 'Room 402, North Wing, Science Studies Center',
  bio: 'Dr. Liang Chen is a historian of science and technology specializing in transnational knowledge systems and science policies in 20th-century Asia. His research examines how Western and regional sciences intersected with traditional administration models to shape Asian modernities. With over two decades of academic tenure, his work focuses on institutional history, science policy transitions, and public health campaigns in East and Southeast Asia. He is the author of "Technology and the State: Shaping Healthcare and Science Policy in Greater Asia" (2021, East Asian Studies Series), which outlines geopolitical collaborations and environmental health transformations across the region.',
  taxonomy: [
    'History of Science & Tech',
    'Transnational Policy Flows',
    'History of Medicine & Health',
    'Northeast & Southeast Asia',
    'Environmental Policy Studies'
  ],
  distinctions: [
    'Senior Research Fellowship in Asian Studies',
    'National Archives Digital Preservation Award',
    'Distinguished Scholar in Science Policy History'
  ]
};

export const teamMembers: TeamMember[] = [
  {
    id: 'elena-rostova',
    name: 'Dr. Elena Rostova',
    role: 'Lead Postdoctoral Researcher, East Asian Science Policy',
    category: 'postdoc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPe9fY1aAil-9a0ypjlCwjH5UvagY0FA5sTiHa-j_24Kgr6TGwvrb077XSjnpKatfxxTp50IoQSjdQTR24wJOPc5VWXUlVOgJAvRvEflySi8lRwzqB8zOWl82AnotZYDMT6pYpLcSilX4lMffKXGic98ApDd5A0UoAzpWGNgHcdO33ljO0_VWHLI4-FPtJmiM2CYtJJou_5Ked26xovrNBmXzZXAjlweay5MWMVawRB2-yw_s_4hceXhS3wFs-XzIyxqcupjx5UY',
    email: 'rostova.e@casslab.org',
    bio: 'Elena specializes in the social history of technology and science policies in mid-20th century China and Northeast Asia. Her research details state-led industrial programs, technology transfers, and public administration developments.'
  },
  {
    id: 'julian-hayes',
    name: 'Dr. Julian Hayes',
    role: 'Senior Postdoctoral Fellow, Environmental History of Southeast Asia',
    category: 'postdoc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8t-0IFlfSxVb9Rd-pR3GPweBGhuzoBKu4788mmVBPCfkrc6KvbRW78qI5eGZMEKW9vi5ptjPd3k7YS-1IhicAbs64JpULEMZhOE_W3UVG4CBF69K8FcZVWwJboDWy6LKjKHuN_adMLcn4s4MP4DACrjI9C4-od7lWGF8wNxWERUS7deKPUQQ0mcCIsLgj6tzceNSy2h0Mq8KsOE7HrFaHLdPygCqDwhFAKGgDODxPgElwSFP-7RlX6sba4MXq_SRiaFGUfGFDi3U',
    email: 'hayes.j@casslab.org',
    bio: 'Julian explores the historical development of environmental infrastructure and hydrologic management in South and Southeast Asia, tracing the colonial and post-colonial transition of water engineering policies.'
  },
  {
    id: 'sarah-lin',
    name: 'Sarah Lin',
    role: 'Ph.D. Candidate, History of Medicine & Traditional Knowledge',
    category: 'phd',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz8xEnHI4w2E2ngkGJRZrrwCikje4RpEAXdAlyrjef3iECM1_PFDOVXFVf4uTECpQrLDCJ5yKMzNr-vAHWSAb0ln-sBs4qcBJyYLnfuR4ymIRpQ7Eo49sSb9UB7CsWOxZMxUFjeA4A5OGY8lmpUfqyUnBC50eOOIz4izAY4y_ea5WdBE9bRSIgz5VTpFgfJRMS7O5C3dWayu6jwEzTrkax3_XeJMNMpWMWzKMgf-wKLsbmd-3rbHUcOM0yIOQN3H9Q_PVzG80ieM0',
    email: 'lin.s@casslab.org',
    bio: 'Sarah’s dissertation documents public health integration campaigns, tracing how traditional medicine collaborated with state-sponsored public health boards in East Asia during post-war modernization.'
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Ph.D. Candidate, Historical Science Archives & Translation',
    category: 'phd',
    image: '',
    email: 'vance.m@casslab.org',
    bio: 'Marcus constructs digital catalogs and translation schemas for Asian science ministries, focusing on correspondence networks during international technology exchange phases of the 1970s.'
  },
  {
    id: 'chloe-adams',
    name: 'Chloe Adams',
    role: 'M.S. Candidate, Industrial Policy & Economic Modernization',
    category: 'master',
    image: '',
    email: 'adams.c@casslab.org',
    bio: 'Chloe’s master thesis analyzes regulatory policies, industrial development zones, and technology transfer schedules in Northeast Asian economic centers.'
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'M.S. Candidate, Forestry & Environmental Administration',
    category: 'master',
    image: '',
    email: 'chen.d@casslab.org',
    bio: 'David works on historical forest protection ordinances, municipal parks, and state conservation policies across Northeast and Southeast Asia.'
  },
  {
    id: 'amina-elsayed',
    name: 'Amina El-Sayed',
    role: 'M.S. Candidate, Medicine & State Organization',
    category: 'master',
    image: '',
    email: 'elsayed.a@casslab.org',
    bio: 'Amina examines historical public health frameworks, specifically focus areas in post-war Southeast Asian sanitary campaigns and sanitary boards.'
  },
  {
    id: 'liam-wright',
    name: 'Liam Wright',
    role: 'Research Assistant, Archival Transcription',
    category: 'intern',
    image: '',
    email: 'wright.l@casslab.org',
    bio: 'Liam assists the lab in digitizing, transcribing, and compiling early Chinese science policy journals and historical bulletins.'
  },
  {
    id: 'sophie-patel',
    name: 'Sophie Patel',
    role: 'Research Assistant, Document Cataloging',
    category: 'intern',
    image: '',
    email: 'patel.s@casslab.org',
    bio: 'Sophie indexes post-colonial technology policy records, optimizing transcription directories for search and retrieval.'
  }
];

export const projects: Project[] = [
  {
    id: 'algorithmic-governance',
    number: '01',
    title: 'Transnational Technology Transfer & Asian Modernity',
    pi: 'Dr. Elena Rostova',
    period: '2024 - Active',
    status: 'active',
    description: 'Examining how science and technology arrived in the greater Asia and how they helped shape the region’s industrial and post-industrial modernities. We map institutional exchanges, policy adjustments, and transnational knowledge flows in Northeast and Southeast Asia to understand where they are leading Asian societies today.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhJ6e_r4UiRPZSN6IMmMoDpZK5BiTbntmWSMcPRdQdZdr-_pyW-5KPd5etlzzQHF8zsC13nlM2uzLzooM9idF59VF3BoTuNPhEmTcP-o6SjhXTmQFiUyr7c8-i3nDMrCcK50NBefWUCVLIkx-q98mW39FF-nVdLLZMX_FoKac5nnP2g16Gb1vDrM5aCeNCpLEAmaaG3pMqTnYWaN3BaJP1HWeBrG5rheQtpYtZsEsf42oe2KRqSI1Hqgy4'
  },
  {
    id: 'colonial-water-systems',
    number: '02',
    title: 'Environmental History & Hydrological Governance',
    pi: 'Dr. Julian Hayes',
    period: '2023 - 2025',
    status: 'ongoing',
    description: 'Investigating the historical development of environmental infrastructure and regulatory networks across Southeast Asia. This initiative maps colonial cartography and post-colonial water systems to understand how state engineering policies transformed regional ecology and resource access.'
  },
  {
    id: 'digital-archiving-science',
    number: '03',
    title: 'Archives of Science and Public Health Policy',
    pi: 'Dr. Liang Chen',
    period: '2022 - Active',
    status: 'active',
    description: 'Preserving and digitizing high-value archival records from science, technology, and health ministries. Through advanced transcription models and metadata indexing, we restore degraded historical letters, policies, and charts to document 20th-century geopolitical budgets and healthcare reforms.'
  }
];

export const publications: Publication[] = [
  {
    id: 'pub-2024-01',
    title: 'Science, Statecraft, and Public Health: Campaigns in Post-War China',
    authors: 'Liang Chen, Sarah Lin',
    citation: 'Chen, L., & Lin, S. (2024). Science, Statecraft, and Public Health: Campaigns in Post-War China. Journal of Asian Science Studies, 12(3), 145–168.',
    abstract: 'This paper historical documents the institutional cooperation between modern medical boards and traditional medicine campaigns in post-war China, exploring how traditional expertise integrated with municipal public health programs.',
    year: 2024,
    doi: '10.1162/jass.2024.12.3.145',
    url: '#'
  },
  {
    id: 'pub-2024-02',
    title: 'Technological Transfer and the Shaping of Southeast Asian Industrialization',
    authors: 'Elena Rostova, Liang Chen',
    citation: 'Rostova, E., & Chen, L. (2024). Technological Transfer and the Shaping of Southeast Asian Industrialization. Academic Policy & History, 8(2), 210–224.',
    abstract: 'An investigation of transnational manufacturing transfers and technology policy developments. We map the policy frameworks that dictated municipal manufacturing setups across Southeast Asia during the mid-20th century.',
    year: 2024,
    doi: '10.3390/aph8020210',
    url: '#'
  },
  {
    id: 'pub-2023-01',
    title: 'Environmental Engineering and State Control: Hydrosocial Systems in Colonial Southeast Asia',
    authors: 'Liang Chen, Julian Hayes',
    citation: 'Chen, L., & Hayes, J. (2023). Environmental Engineering and State Control: Hydrosocial Systems in Colonial Southeast Asia. History of Environment Quarterly, 19(4), 302–319.',
    abstract: 'Analyzing how hydraulic engineering served state control systems under colonial and transitional administrative regimes, examining how municipal drainage and irrigation programs directed water access.',
    year: 2023,
    doi: '10.1201/heq.2023.19.4',
    url: '#'
  },
  {
    id: 'pub-2023-02',
    title: 'Forestry Governance and Environmental Control in Coastal Northeast Asia',
    authors: 'Julian Hayes',
    citation: 'Hayes, J. (2023). Forestry Governance and Environmental Control in Coastal Northeast Asia. Asian Conservation Review, 31(1), 44–59.',
    abstract: 'Investigating historical forest conservation programs, tracing how regional state boundaries and state forestry boards dictated wood preservation across maritime borders.',
    year: 2023,
    doi: '10.1080/acr.2023.44',
    url: '#'
  },
  {
    id: 'pub-2022-01',
    title: 'Public Health Networks: Integrating Traditional Medicine in China',
    authors: 'Liang Chen, Sarah Lin, David Chen',
    citation: 'Chen, L., Lin, S., & Chen, D. (2022). Public Health Networks: Integrating Traditional Medicine in China. Greater Asia Public Health Policy, 44(8), 1012–1025.',
    abstract: 'Fusing statecraft with healthcare organization. This study reviews local archives of sanitization campaigns, showcasing how combined therapies formed the baseline for modern rural healthcare schemes.',
    year: 2022,
    doi: '10.1109/gahp.2022.1012',
    url: '#'
  },
  {
    id: 'pub-2021-01',
    title: 'Technology and the State: Shaping Healthcare and Science Policy in Greater Asia',
    authors: 'Liang Chen',
    citation: 'Chen, L. (2021). Technology and the State: Shaping Healthcare and Science Policy in Greater Asia. Academic Press, London. ISBN 978-0-262-54215-6.',
    abstract: 'Seminal monograph detailing scientific advisory committees, state budgets, and policy transfers across East and Southeast Asian nations. Chapters cover early modern maritime sanitation, nuclear policy dialogues, and agricultural cooperatives.',
    year: 2021,
    doi: '10.7551/apress.12948',
    url: '#'
  }
];

export const archiveLogs: ArchiveLog[] = [
  {
    filename: 'ministry_tech_policy_1985.pdf',
    timestamp: '2026-05-20 10:24:12',
    size: '14.2 MB',
    hash: 'SHA256:7B8F9A...',
    content: 'CHINESE MINISTRY OF SCIENCE AND TECHNOLOGY [1985 POLICY ACTION]\n--------------------------------------------------------------\nSECTION I: REGIONAL RESEARCH ALLOCATIONS\nSub-paragraph 14a: Technological development priorities in Northeast economic zones.\nSub-paragraph 14b: Funding distributions for post-war industrial laboratories.\n\nSTATUS: VERIFIED ACADEMIC TRANSCRIPT (92% OCR RECONSTRUCTION)\nSOURCE MICROFICHE: FILE-MT-1985-A',
    category: 'Governance'
  },
  {
    filename: 'dr_chen_symposium_report.txt',
    timestamp: '2026-05-20 11:13:02',
    size: '124 KB',
    hash: 'SHA256:4C9D2E...',
    content: 'INTERNATIONAL SYMPOSIUM ON ASIAN SCIENCE AND MODERNITY [2018]\n--------------------------------------------------------------\nKEYNOTE CONTEXT: Dr. Liang Chen\'s opening paper on "Technology and the State".\nPRESENTATION DIRECTIVE: Discussing how Western technology transfer arrived in Northeast Asia, transformed regional medicine networks, and shaped environmental policy outlines during the 20th century.\n\nPROCEEDINGS RECORD: CONFIRMED DIRECTORY ENTRY',
    category: 'Biographical'
  },
  {
    filename: 'asia_health_campaign_1974.json',
    timestamp: '2026-05-20 12:45:59',
    size: '18 KB',
    hash: 'SHA256:9A1B8C...',
    content: '{\n  "publicHealthCampaign": {\n    "year": 1974,\n    "region": "Southeast Asian Coastal Provinces",\n    "focusAreas": [\n      {"district": "Coastal Kelantan", "program": "Sanitary Infrastructure Expansion", "effectiveness": "HIGH"},\n      {"district": "Kedah Estuary", "program": "Water Purification & Malaria Vector Suppression", "effectiveness": "MODERATE"}\n    ],\n    "primaryMinistries": ["Ministry of Health", "Public Works Department"],\n    "archivalSourceBox": "SEA-PH-BOX-24"\n  }\n}',
    category: 'Medicine Policy'
  },
  {
    filename: 'colonial_hydro_blueprint_1922_data.txt',
    timestamp: '2026-05-19 18:22:15',
    size: '2.4 MB',
    hash: 'SHA256:1C2D4E...',
    content: 'ENVIRONMENTAL INFRASTRUCTURE & HYDROLOGICAL BLUEPRINTS [1922]\n--------------------------------------------------------------\nCOORDINATE FOCUS: [99.243°E, 104.598°E] / [1.293°N, 5.122°N]\nARCHIVAL BLUEPRINT: Keppel Estuary drainage system modifications.\nTRANSCRIPTION NOTES: Tracing how early colonial water engineering models laid the foundations for post-colonial urban development and regional state administration.\nSURVEY INDEX: RECONSTRUCTED FROM BRITISH MARITIME RECORDS V3.0',
    category: 'Cartography'
  }
];
