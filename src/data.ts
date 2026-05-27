/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, Project, Publication, ArchiveLog } from './types';

export const drJongsikChristianYi: TeamMember = {
  id: 'liang-chen', // keeping the ID for route matching integrity
  name: 'Dr. Jongsik Christian Yi',
  role: 'Director of CASS Lab. Professor of History of Science and Technology',
  category: 'director',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQAks9MffbQknJ_G9QxaxSIvFpPBv0hfHt0_AnX3Q0sNped8fyo3U39MACf3RquWCsKf98JY1M_GT1kEq7FZLZ3VsKdDzdJ3wnhov-_ykyVVDs3pLvqol3yJn6Pk6G3_VnrwayFrgt1xhxKjersTdIyxkGWVCUY5ptbtxuwnIFv1ljGkBm3LH7ndiJOpwE8y1eveQl8oKyKqNTyg1h8EUpttEhm0wXvFnSru6pSlDOhrnma74jVwWYRgovBzvG7g7nXNxO1wTSj8A',
  email: 'jyi@casslab.org',
  orcid: '0000-0002-3948-1834',
  office: 'Room 402, North Wing, Computational Arts Building',
  bio: 'Dr. Jongsik Christian Yi is an eminent historian of science and technology specializing in transnational knowledge systems, animal history, and science policies in twentieth-century East Asia. His extensive research focuses on the intersections of agriculture, veterinary science, environmental history, and state organization in China, Korea, and Vietnam. He is the author of "More-Than People’s Communes: Veterinary Workers and Nonhuman Animals in Mao-Era China" (under contract with the University of Chicago Press) and has translated and introduced multiple landmark treatises in science studies and postcolonial STS into Korean.',
  taxonomy: [
    'Animal History',
    'History of Science & Tech',
    'East Asian STS Networks',
    'Postcolonial STS Studies',
    'Environmental History'
  ],
  distinctions: [
    'University of Chicago Press Monograph Contract',
    'Primary Director, CASS Lab',
    'Distinguished Scholar in Asian Material History'
  ]
};

export const drLiangChen = drJongsikChristianYi; // alias compatibility layer

export const teamMembers: TeamMember[] = [
  {
    id: 'kyungbin-koh',
    name: 'Kyungbin Koh',
    role: 'Ph.D. Candidate, KAIST STP 박사과정',
    category: 'phd',
    image: '',
    email: 'kbkoh@casslab.org',
    bio: 'Kyungbin is a Ph.D. Candidate in the Science and Technology Policy (STP) Program at KAIST. Their research focuses on state-directed science policies, public administration networks, and the historical development of science government organizations in Korea.'
  },
  {
    id: 'chaeun-yim',
    name: 'Chae-un Yim',
    role: 'Ph.D. Candidate, KAIST GGGS 박사과정',
    category: 'phd',
    image: '',
    email: 'cuyim@casslab.org',
    bio: 'Chae-un is a Ph.D. Candidate in the Graduate School of Green Growth and Sustainability (GGGS) at KAIST. Their research explores East Asian environmental history, sustainable agricultural frameworks, and animal and energy regimes.'
  },
  {
    id: 'taeyoon-kim',
    name: 'Taeyoon Kim',
    role: 'M.S. Student, KAIST STP 석사과정',
    category: 'master',
    image: '',
    email: 'tykim@casslab.org',
    bio: 'Taeyoon is a Master’s Student in the Science and Technology Policy (STP) Program at KAIST. They are interested in industrial sociology, technological transitions, and the history of modern industrial infrastructures.'
  },
  {
    id: 'sihyeong-song',
    name: 'Sihyeong Song',
    role: 'Research Assistant, KAIST Department of Biology, Undergraduate',
    category: 'intern',
    image: '',
    email: 'shsong@casslab.org',
    bio: 'Sihyeong is an undergraduate Research Assistant from the KAIST Department of Biology. They assist with mapping environmental hydro-systems and transcribing biological and veterinary historical documents.'
  },
  {
    id: 'junseok-lee',
    name: 'Junseok Lee',
    role: 'Research Assistant, KAIST Department of AI Computer, Undergraduate',
    category: 'intern',
    image: '',
    email: 'junseoklee.pro@gmail.com',
    bio: 'Junseok is an undergraduate Research Assistant from the KAIST Department of AI and Computer Science. They specialize in applying NLP and machine learning models for archival transcription, translation, and metadata cataloging.'
  }
];

export const projects: Project[] = [
  {
    id: 'algorithmic-governance',
    number: '01',
    title: 'Transnational Technology Transfer & Asian Modernity',
    pi: 'Dr. Jongsik Christian Yi',
    period: '2024 - Active',
    status: 'active',
    description: 'Examining how science and technology arrived in the greater Asia and how they helped shape the region’s industrial and post-industrial modernities. We map institutional exchanges, policy adjustments, and transnational knowledge flows in Northeast and Southeast Asia to understand where they are leading Asian societies today.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhJ6e_r4UiRPZSN6IMmMoDpZK5BiTbntmWSMcPRdQdZdr-_pyW-5KPd5etlzzQHF8zsC13nlM2uzLzooM9idF59VF3BoTuNPhEmTcP-o6SjhXTmQFiUyr7c8-i3nDMrCcK50NBefWUCVLIkx-q98mW39FF-nVdLLZMX_FoKac5nnP2g16Gb1vDrM5aCeNCpLEAmaaG3pMqTnYWaN3BaJP1HWeBrG5rheQtpYtZsEsf42oe2KRqSI1Hqgy4'
  },
  {
    id: 'colonial-water-systems',
    number: '02',
    title: 'Environmental History & Hydrological Governance',
    pi: 'Dr. Jongsik Christian Yi',
    period: '2023 - 2025',
    status: 'ongoing',
    description: 'Investigating the historical development of environmental infrastructure and regulatory networks across Southeast Asia. This initiative maps colonial cartography and post-colonial water systems to understand how state engineering policies transformed regional ecology and resource access.'
  },
  {
    id: 'digital-archiving-science',
    number: '03',
    title: 'Archives of Science and Public Health Policy',
    pi: 'Dr. Jongsik Christian Yi',
    period: '2022 - Active',
    status: 'active',
    description: 'Preserving and digitizing high-value archival records from science, technology, and health ministries. Through advanced transcription models and metadata indexing, we restore degraded historical letters, policies, and charts to document 20th-century geopolitical budgets and healthcare reforms.'
  }
];

export const publications: Publication[] = [
  // Books (Anglophone Monographs)
  {
    id: 'pub-books-01',
    title: 'More-Than People’s Communes: Veterinary Workers and Nonhuman Animals in Mao-Era China',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, More-Than People’s Communes: Veterinary Workers and Nonhuman Animals in Mao-Era China (under contract with the University of Chicago Press).',
    year: 2026,
    category: 'books',
    subCategory: 'Anglophone Monographs'
  },
  // Non-Anglophone Monographs
  {
    id: 'pub-books-02',
    title: 'Chinese Science and Technology in the Long Twentieth Century',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, Chinese Science and Technology in the Long Twentieth Century (work in progress, in Korean).',
    year: 2026,
    category: 'books',
    subCategory: 'Non-Anglophone Monographs'
  },
  {
    id: 'pub-books-03',
    title: 'Seeing and Thinking Like a Historian',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, Seeing and Thinking Like a Historian (work in progress, in Korean).',
    year: 2026,
    category: 'books',
    subCategory: 'Non-Anglophone Monographs'
  },
  {
    id: 'pub-books-04',
    title: 'What Science Leaves Behind, What It Erases',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, What Science Leaves Behind, What It Erases (under contract with Miraebook) (in Korean).',
    year: 2026,
    category: 'books',
    subCategory: 'Non-Anglophone Monographs'
  },
  {
    id: 'pub-books-05',
    title: 'History 101 for STEM Majors',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, History 101 for STEM Majors (Nermer Books, forthcoming) (in Korean).',
    year: 2026,
    category: 'books',
    subCategory: 'Non-Anglophone Monographs'
  },
  {
    id: 'pub-books-06',
    title: 'Animal History: The Birth of the Modern People who Love and Hate Animals',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, Animal History: The Birth of the Modern People who Love and Hate Animals (East Asia Books, 2024) (in Korean).',
    year: 2024,
    category: 'books',
    subCategory: 'Non-Anglophone Monographs'
  },

  // Book Chapters (Anglophone Volumes)
  {
    id: 'pub-chapters-01',
    title: 'Lyuh Woon-hyung and Khüree the City of Red Giant',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Lyuh Woon-hyung and Khüree the City of Red Giant,” in Overlapping Borderlands, eds. Loretta Kim and Anran Wang (work in progress).',
    year: 2026,
    category: 'chapters',
    subCategory: 'Anglophone Volumes'
  },
  {
    id: 'pub-chapters-02',
    title: 'Pig Breeding and Sexual Taboos in the Early People’s Republic',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Pig Breeding and Sexual Taboos in the Early People’s Republic,” in China’s Environmental History: A Reader, eds. Brian Lander and Peter Lavelle (Columbia University Press, forthcoming in December 2026).',
    year: 2026,
    category: 'chapters',
    subCategory: 'Anglophone Volumes'
  },
  {
    id: 'pub-chapters-03',
    title: 'Possibilities and Limitations of Mass Science: Hydrobiologist Nie Dashu and the Making of Knowledge on Fish Diseases Before the Great Leap',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Possibilities and Limitations of Mass Science: Hydrobiologist Nie Dashu and the Making of Knowledge on Fish Diseases Before the Great Leap,” in A Revolution Across Arts and Sciences: Participatory Knowledge Production in China’s Great Leap Forward, eds. Christine Ho and Sigrid Schmalzer (Hong Kong University Press, forthcoming in July 2026).',
    year: 2026,
    category: 'chapters',
    subCategory: 'Anglophone Volumes'
  },
  // Non-Anglophone Volumes
  {
    id: 'pub-chapters-04',
    title: 'Animals, Environments, and the History of Science in Korea',
    authors: 'Manyong Moon, Sang-ho Ro, Jongsik Christian Yi, et al.',
    citation: 'Manyong Moon, Sang-ho Ro, Jongsik Christian Yi, et al., Animals, Environments, and the History of Science in Korea (Sol Science, 2025) (in Korean).',
    year: 2025,
    category: 'chapters',
    subCategory: 'Non-Anglophone Volumes'
  },
  {
    id: 'pub-chapters-05',
    title: 'The Structure of the Long Cold War and Its Knowledge Apparatus',
    authors: 'Donghyuk Kim, Jongsik Christian Yi, et al.',
    citation: 'Donghyuk Kim, Jongsik Christian Yi, et al., The Structure of the Long Cold War and Its Knowledge Apparatus (GIST Press, 2025) (in Korean).',
    year: 2025,
    category: 'chapters',
    subCategory: 'Non-Anglophone Volumes'
  },

  // Journal Articles (Anglophone Journals)
  {
    id: 'pub-journals-01',
    title: 'Maoist Pigs: Swine, Communes, and the State in Rural China, 1949–1976',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Maoist Pigs: Swine, Communes, and the State in Rural China, 1949–1976,” Journal of Asian Studies, Vol. 85, No. 2 (May 2026): 287–311.',
    year: 2026,
    category: 'journals',
    subCategory: 'Anglophone Journals'
  },
  {
    id: 'pub-journals-02',
    title: 'Rabbit Spleen and Medicinal Herbs: Animal Infectious Diseases, Grassroots Communes, and the State in Maoist China',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Rabbit Spleen and Medicinal Herbs: Animal Infectious Diseases, Grassroots Communes, and the State in Maoist China,” Bulletin of the History of Medicine, Vol. 98, No. 2 (Summer 2024): 298–325.',
    year: 2024,
    category: 'journals',
    subCategory: 'Anglophone Journals'
  },
  {
    id: 'pub-journals-03',
    title: 'Decolonization and Self-Reflection: Teaching the Korean History of Science in South Korea',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Decolonization and Self-Reflection: Teaching the Korean History of Science in South Korea,” Historical Studies in the Natural Sciences, Vol. 54, No. 1 (February 2024): 121–124.',
    year: 2024,
    category: 'journals',
    subCategory: 'Anglophone Journals'
  },
  {
    id: 'pub-journals-04',
    title: 'Dialectical Materialism Serves Voluntarist Productivism: The Epistemic Foundation of Lysenkoism in Socialist China and North Vietnam',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Dialectical Materialism Serves Voluntarist Productivism: The Epistemic Foundation of Lysenkoism in Socialist China and North Vietnam,” Journal of the History of Biology, Vol. 54, No. 3 (September 2021): 513–539.',
    year: 2021,
    category: 'journals',
    subCategory: 'Anglophone Journals'
  },
  {
    id: 'pub-journals-05',
    title: 'Conference Report on the Mr. Science, May Fourth, and Modern China Workshop',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Conference Report on the Mr. Science, May Fourth, and Modern China Workshop,” Bulletin of the Pacific Circle, No. 43 (October 2019).',
    year: 2019,
    category: 'journals',
    subCategory: 'Anglophone Journals'
  },
  // Non-Anglophone Journals
  {
    id: 'pub-journals-06',
    title: 'What Is Animal History?: On Recent Anglophone Historiography',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “What Is Animal History?: On Recent Anglophone Historiography,” Yoksa Hakbo: The Korean Historical Review, 265 (March 2025): 505–540 (in Korean).',
    year: 2025,
    category: 'journals',
    subCategory: 'Non-Anglophone Journals'
  },
  {
    id: 'pub-journals-07',
    title: 'Making a “Korean Caltech”: Physicist Hogil Kim, Yonam Institute of Technology, and Pohang University of Science and Technology, 1972-1994',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Making a “Korean Caltech”: Physicist Hogil Kim, Yonam Institute of Technology, and Pohang University of Science and Technology, 1972-1994,” Korean Journal for the History of Science, Vol. 46, No. 1 (April 2024): 203–233 (in Korean).',
    year: 2024,
    category: 'journals',
    subCategory: 'Non-Anglophone Journals'
  },
  {
    id: 'pub-journals-08',
    title: 'Peanut Hulls, Swine Feces, and Silver Carps: Eating, Excreting, and Communal Metabolism in 1950s Guangxi',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Peanut Hulls, Swine Feces, and Silver Carps: Eating, Excreting, and Communal Metabolism in 1950s Guangxi,” Critical Review of History, Vol. 145 (November 2023): 209–236 (in Korean).',
    year: 2023,
    category: 'journals',
    subCategory: 'Non-Anglophone Journals'
  },
  {
    id: 'pub-journals-09',
    title: 'In a Spectrum between Self-Denial and Self-Assertion: A Reading of the Histories of Science, Technology, and Medicine in Twentieth-Century China',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “In a Spectrum between Self-Denial and Self-Assertion: A Reading of the Histories of Science, Technology, and Medicine in Twentieth-Century China,” Journal of Asiatic Studies, Vol. 64. No. 2 (June 2021): 41–87 (in Korean).',
    year: 2021,
    category: 'journals',
    subCategory: 'Non-Anglophone Journals'
  },
  {
    id: 'pub-journals-10',
    title: 'Scientific Needles for Livestock Animals in Communes: The Birth of Traditional Chinese Veterinary Medicine in Maoist China, 1956–1963',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Scientific Needles for Livestock Animals in Communes: The Birth of Traditional Chinese Veterinary Medicine in Maoist China, 1956–1963,” Korean Journal for the History of Science, Vol. 43, No. 1 (April 2021): 143–174 (in Korean).',
    year: 2021,
    category: 'journals',
    subCategory: 'Non-Anglophone Journals'
  },

  // Translations
  {
    id: 'pub-translations-01',
    title: 'The Korean Edition of Roger L. Geiger, American Higher Education since World War II: A History',
    authors: 'Roger L. Geiger (Edited and introduced by Jongsik Christian Yi)',
    citation: 'The Korean Edition of Roger L. Geiger, American Higher Education since World War II: A History (Princeton University Press, 2021). Translated by TBA, edited and introduced by Jongsik Christian Yi, Gyoyu Books, forthcoming.',
    year: 2026,
    category: 'translations'
  },
  {
    id: 'pub-translations-02',
    title: 'The Korean Edition of Fabio Lanza, The End of Concern: Maoist China, Activism, and Asian Studies',
    authors: 'Fabio Lanza (Translated by Jaehee Seol and Jongsik Christian Yi)',
    citation: 'The Korean Edition of Fabio Lanza, The End of Concern: Maoist China, Activism, and Asian Studies (Duke University Press, 2017). Translated by Jaehee Seol and Jongsik Christian Yi, Geulhangari, forthcoming in July 2026.',
    year: 2026,
    category: 'translations'
  },
  {
    id: 'pub-translations-03',
    title: 'The Korean Edition of Warwick Anderson, Spectacles of Waste',
    authors: 'Warwick Anderson (Translated by Jungha Hwang and Jongsik Christian Yi)',
    citation: 'The Korean Edition of Warwick Anderson, Spectacles of Waste (Polity, 2024). Translated by Jungha Hwang and Jongsik Christian Yi, May Books, forthcoming in July 2026.',
    year: 2026,
    category: 'translations'
  },
  {
    id: 'pub-translations-04',
    title: 'The Korean Edition of David Kaiser ed., Becoming MIT: Moments of Decision',
    authors: 'David Kaiser (Translated by Taebok Roh, edited and introduced by Jongsik Christian Yi)',
    citation: 'The Korean Edition of David Kaiser ed., Becoming MIT: Moments of Decision (MIT Press, 2010). Translated by Taebok Roh, edited and introduced by Jongsik Christian Yi, Red Salt Books, 2026.',
    year: 2026,
    category: 'translations'
  },
  {
    id: 'pub-translations-05',
    title: 'The Korean Edition of William C. Kirby, Empires of Ideas: Creating the Modern University from Germany to America to China',
    authors: 'William C. Kirby (Translated by Hyunjeong Lim, edited and introduced by Jongsik Christian Yi)',
    citation: 'The Korean Edition of William C. Kirby, Empires of Ideas: Creating the Modern University from Germany to America to China (Harvard University Press, 2022). Translated by Hyunjeong Lim, edited and introduced by Jongsik Christian Yi, Red Salt Books, 2026.',
    year: 2026,
    category: 'translations'
  },
  {
    id: 'pub-translations-06',
    title: 'The Korean Edition of Warwick Anderson’s works on Postcolonial STS and Asia as Method',
    authors: 'Warwick Anderson (Selected and translated by Jongsik Christian Yi)',
    citation: 'The Korean Edition of Warwick Anderson’s works on Postcolonial STS and Asia as Method. Selected and translated by Jongsik Christian Yi, Eum, 2025.',
    year: 2025,
    category: 'translations'
  },
  {
    id: 'pub-translations-07',
    title: 'The Korean Edition of Sigrid Schmalzer, Red Revolution, Green Revolution: Scientific Farming in Socialist China',
    authors: 'Sigrid Schmalzer (Translated by Jongsik Christian Yi and Jiho Moon)',
    citation: 'The Korean Edition of Sigrid Schmalzer, Red Revolution, Green Revolution: Scientific Farming in Socialist China (University of Chicago Press, 2016). Translated by Jongsik Christian Yi and Jiho Moon, Purunyoksa Publishing Co., 2025.',
    year: 2025,
    category: 'translations'
  },
  {
    id: 'pub-translations-08',
    title: 'The Korean Edition of Victor Seow, Carbon Technocracy: Energy Regimes in Modern East Asia',
    authors: 'Victor Seow (Translated by Jongsik Christian Yi)',
    citation: 'The Korean Edition of Victor Seow, Carbon Technocracy: Energy Regimes in Modern East Asia (University of Chicago Press, 2022). Translated by Jongsik Christian Yi, Red Salt Books, 2024.',
    year: 2024,
    category: 'translations'
  },
  {
    id: 'pub-translations-09',
    title: 'The Korean Edition of Loren Graham, Lysenko’s Ghost: Epigenetics and Russia',
    authors: 'Loren Graham (Translated by Jongsik Christian Yi)',
    citation: 'The Korean Edition of Loren Graham, Lysenko’s Ghost: Epigenetics and Russia (Harvard University Press, 2016). Translated by Jongsik Christian Yi, East Asia Books, 2021.',
    year: 2021,
    category: 'translations'
  },
  {
    id: 'pub-translations-10',
    title: 'The Korean Edition of Barry S. Levy and Victor W. Sidel eds., Social Injustice and Public Health',
    authors: 'Barry S. Levy & Victor W. Sidel (Translated by Young-jeon Shin, Jongsik Christian Yi, et al.)',
    citation: 'The Korean Edition of Barry S. Levy and Victor W. Sidel eds., Social Injustice and Public Health (Oxford University Press, 2nd ed., 2013). Translated by Young-jeon Shin, Jongsik Christian Yi, et al., Hanul, 2021.',
    year: 2021,
    category: 'translations'
  },

  // Book Reviews
  {
    id: 'pub-reviews-01',
    title: 'Review of George L. Kallander, Human-Animal Relations and the Hunt in Korea and Northeast Asia',
    authors: 'Jongsik Christian Yi',
    citation: 'Review of George L. Kallander, Human-Animal Relations and the Hunt in Korea and Northeast Asia (Edinburgh: Edinburgh University Press, 2023), Animal History, Vol. 1, No. 2 (June 2025): 87–89.',
    year: 2025,
    category: 'reviews'
  },
  {
    id: 'pub-reviews-02',
    title: 'Review of Jung Lee, Technoscience of Tak and Artisans: Resourceful Evolution of Chosŏn Papermaking',
    authors: 'Jongsik Christian Yi',
    citation: 'Review of Jung Lee, Technoscience of Tak and Artisans: Resourceful Evolution of Chosŏn Papermaking (Seoul: Purunyoksa Publishing Co., 2023), The Korean Journal for the History of Science, Vol. 45, No. 2 (August 2023): 413–417.',
    year: 2023,
    category: 'reviews'
  },
  {
    id: 'pub-reviews-03',
    title: 'Review of Jean Starobinski, Histoire du traitement de la mélancolie [History of the Treatment of Melancholy]',
    authors: 'Jongsik Christian Yi',
    citation: 'Review of Jean Starobinski, Histoire du traitement de la mélancolie [History of the Treatment of Melancholy] (Korean trans. Younguk Kim, Seoul: ITTA, 2023), Korean Science, Technology, and Society Network ed., Science, Technology, and Society, Vol. 4, Goyang: Aleph Books, 2023.',
    year: 2023,
    category: 'reviews'
  },
  {
    id: 'pub-reviews-04',
    title: 'Review of Hans-Jörg Rheinberger and Staffan Müller-Wille, A Cultural History of Heredity',
    authors: 'Jongsik Christian Yi',
    citation: 'Review of Hans-Jörg Rheinberger and Staffan Müller-Wille, A Cultural History of Heredity (Korean trans. Jaehwan Hyun, Pusan: Pusan National University Press, 2022), The Korean Journal of Medical History, Vol. 32, No. 1 (April 2023): 423–433.',
    year: 2023,
    category: 'reviews'
  },
  {
    id: 'pub-reviews-05',
    title: 'Review of Rui Kunze and Marc Andre Matten, Knowledge Production in Mao-Era China: Learning from the Masses',
    authors: 'Jongsik Christian Yi',
    citation: 'Review of Rui Kunze and Marc Andre Matten, Knowledge Production in Mao-Era China: Learning from the Masses (Lanham: Lexington Books, 2021), East Asian Science, Technology and Society: An International Journal, Vol. 16, No. 3 (August 2022): 445–447.',
    year: 2022,
    category: 'reviews'
  },
  {
    id: 'pub-reviews-06',
    title: 'Review of Victor Seow, Carbon Technocracy: Energy Regimes in Modern East Asia',
    authors: 'Jongsik Christian Yi',
    citation: 'Review of Victor Seow, Carbon Technocracy: Energy Regimes in Modern East Asia (Chicago: University of Chicago Press, 2022), The Korean Journal for the History of Science, Vol. 44, No. 1 (April 2022): 213–220.',
    year: 2022,
    category: 'reviews'
  },
  {
    id: 'pub-reviews-07',
    title: 'Review of Liz P. Y. Chee, Mao’s Bestiary: Medicinal Animals and Modern China',
    authors: 'Jongsik Christian Yi',
    citation: 'Review of Liz P. Y. Chee, Mao’s Bestiary: Medicinal Animals and Modern China (Durham: Duke University Press, 2021), History: The Journal of the Historical Association, Vol. 106, Issue 373 (December 2021): 871–872.',
    year: 2021,
    category: 'reviews'
  },

  // Public Essays and Publications
  {
    id: 'pub-essays-01',
    title: 'After China’s Scientific Rise #1: Can Shanzhai Lift the China Dream?',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “After China’s Scientific Rise #1: Can Shanzhai Lift the China Dream?” [이종식의 중국 과학굴기 너머 01: ‘산자이’는 중국몽의 지렛대가 될까], Hankyoreh, May 22, 2026.',
    year: 2026,
    category: 'essays'
  },
  {
    id: 'pub-essays-02',
    title: 'Interview with KBS 1TV Documentary Insight “China Speed”',
    authors: 'Jongsik Christian Yi',
    citation: 'Interview with KBS 1TV Documentary Insight “China Speed” [인재전쟁2: 1부 차이나 스피드], May 14, 2026.',
    year: 2026,
    category: 'essays'
  },
  {
    id: 'pub-essays-03',
    title: 'Interview with The JoongAng Daily, “양자컴 교수에 교육부 맡겼다…‘딥시크 쇼크’ 中 혁신의 비밀”',
    authors: 'Jongsik Christian Yi',
    citation: 'Interview with The JoongAng Daily, “양자컴 교수에 교육부 맡겼다…‘딥시크 쇼크’ 中 혁신의 비밀,” January 21, 2026.',
    year: 2026,
    category: 'essays'
  },
  {
    id: 'pub-essays-04',
    title: 'There Is No Such Thing as “Western Science”; Nor, Perhaps, Is There Chinese Science, Indian Science, or Korean Science',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “There Is No Such Thing as “Western Science”; Nor, Perhaps, Is There Chinese Science, Indian Science, or Korean Science” [서양과학은 없다, 어쩌면 중국과학, 인도과학, 한국과학도], University In & Out, January 18, 2026.',
    year: 2026,
    category: 'essays'
  },
  {
    id: 'pub-essays-05',
    title: 'Interview with The Kyunghyang Shinmun, “‘빨리, 많이’ AI 인재 양성한다는 이 정부…”',
    authors: 'Jongsik Christian Yi',
    citation: 'Interview with The Kyunghyang Shinmun, “‘빨리, 많이’ AI 인재 양성한다는 이 정부… “경제적 보상·직업 안정성 등 과학자 존중받는 서사 필요” [마가와 굴기 넘어②],” January 6, 2026.',
    year: 2026,
    category: 'essays'
  },
  {
    id: 'pub-essays-06',
    title: 'What Do Chinese Science and Technology Mean in South Korea After the ‘DeepSeek Shock’? (2)',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “What Do Chinese Science and Technology Mean in South Korea After the ‘DeepSeek Shock’? (2)” [우리에게 중국 과학기술은 무엇인가? (2)], The JoongAng Daily, December 2, 2025.',
    year: 2025,
    category: 'essays'
  },
  {
    id: 'pub-essays-07',
    title: 'What Do Chinese Science and Technology Mean in South Korea After the ‘DeepSeek Shock’? (1)',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “What Do Chinese Science and Technology Mean in South Korea After the ‘DeepSeek Shock’? (1)” [우리에게 중국 과학기술은 무엇인가? (1)], The JoongAng Daily, November 25, 2025.',
    year: 2025,
    category: 'essays'
  },
  {
    id: 'pub-essays-08',
    title: 'Interview with The Kyunghyang Shinmun, ““넘어지면 어때요, 계속 발전할 건데” 로봇올림픽에서 본 중국 과학기술의 진짜 힘”',
    authors: 'Jongsik Christian Yi',
    citation: 'Interview with The Kyunghyang Shinmun, ““넘어지면 어때요, 계속 발전할 건데” 로봇올림픽에서 본 중국 과학기술의 진짜 힘,” August 17, 2025.',
    year: 2025,
    category: 'essays'
  },
  {
    id: 'pub-essays-09',
    title: 'What Do You Know about Lysenko?',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “What Do You Know about Lysenko?” [‘유사과학자’ 리센코를 아십니까?], Horizon: The Online Magazine of Korea Institute for Advanced Study (KIAS), May 15, 2025.',
    year: 2025,
    category: 'essays'
  },
  {
    id: 'pub-essays-10',
    title: 'The Historical Roots of China’s DeepSeek',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “The Historical Roots of China’s DeepSeek” [딥시크의 중국, 과학기술계 ‘졸부’가 아니다], Hankyoreh, April 18, 2025.',
    year: 2025,
    category: 'essays'
  },
  {
    id: 'pub-essays-11',
    title: 'Mao Zedong’s Philosophy of Science and Its Impact',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Mao Zedong’s Philosophy of Science and Its Impact” [마오의 과학관과 그 영향], EPI: The Science Magazine Vol. 31, Spring 2025.',
    year: 2025,
    category: 'essays'
  },
  {
    id: 'pub-essays-12',
    title: 'Interview with Chinese Animal Studies Network, “Talking Animals with Jongsik Christian Yi”',
    authors: 'Jongsik Christian Yi',
    citation: 'Interview with Chinese Animal Studies Network, “Talking Animals with Jongsik Christian Yi,” February 25, 2025.',
    year: 2025,
    category: 'essays'
  },
  {
    id: 'pub-essays-13',
    title: 'Of Scientists, by Scientists, and for Scientists: Pohang University of Science and Technology at 40',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Of Scientists, by Scientsts, and for Scientists: Pohang University of Science and Technology at 40” [제2의 건학에 즈음하여 되돌아본 우리대학의 역사], The Postech Times, June 12, 2024.',
    year: 2024,
    category: 'essays'
  },
  {
    id: 'pub-essays-14',
    title: 'A Way of Learning, A Way of Growing',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “A Way of Learning, A Way of Growing” [배움의 길, 성장의 길], Postechian Vol. 181, April 2024.',
    year: 2024,
    category: 'essays'
  },
  {
    id: 'pub-essays-15',
    title: 'Miracles and Flames: The Stories of Pohang Iron and Steel’s 135 Days of Recovery from Typhoon Hinnamnor',
    authors: 'Sang Joon Park, Jongsik Christian Yi, et al.',
    citation: 'Sang Joon Park, Jongsik Christian Yi, et al., Miracles and Flames: The Stories of Pohang Iron and Steel’s 135 Days of Recovery from Typhoon Hinnamnor [함께 만든 기적, 꺼지지 않는 불꽃: 불가능을 가능케 한 포스코 재난극복 135일의 이야기], Paju: Nanam, 2023.',
    year: 2023,
    category: 'essays'
  },
  {
    id: 'pub-essays-16',
    title: 'The Difficulties of a New Instructor',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “The Difficulties of a New Instructor” [초보 교수자의 어려움], The Postech Times, November 13, 2022.',
    year: 2022,
    category: 'essays'
  },
  {
    id: 'pub-essays-17',
    title: 'When and How Did Pandemics End?',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “When and How Did Pandemics End?” [팬데믹은 언제 어떻게 끝날까?], The Bulletin of National Museum of Korean Contemporary History, September 1, 2022.',
    year: 2022,
    category: 'essays'
  },
  {
    id: 'pub-essays-18',
    title: 'Arthdal Chronicles, Sorcery, Superstition, and Science',
    authors: 'Jongsik Christian Yi',
    citation: 'Jongsik Christian Yi, “Arthdal Chronicles, Sorcery, Superstition, and Science” [‘아스달 연대기’와 마법, 미신, 그리고 과학], Behind Sciences Vol. 8, March 2020.',
    year: 2020,
    category: 'essays'
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
