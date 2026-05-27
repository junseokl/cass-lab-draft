/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, GraduationCap, Award, Landmark, Calendar, Star } from 'lucide-react';

interface Course {
  title: string;
  role: string;
  term: string;
  translatedTitle?: string;
  evaluation?: string;
  instructorDetail?: string;
  award?: string;
}

interface Institution {
  name: string;
  location?: string;
  courses: Course[];
}

export const TeachingView: React.FC = () => {
  const teachingRegistry: Institution[] = [
    {
      name: 'KAIST',
      courses: [
        {
          title: 'Survey in Science and Technology Studies',
          role: 'Instructor',
          term: 'Spring 2026'
        },
        {
          title: 'Science, Technology, and Asia',
          role: 'Instructor',
          term: 'Fall 2025'
        }
      ]
    },
    {
      name: 'Postech',
      courses: [
        {
          title: 'History of Science',
          translatedTitle: '과학사',
          role: 'Instructor',
          term: 'Spring 2025',
          evaluation: 'Course Evaluation 4.99 / 5.0'
        },
        {
          title: 'History of Science',
          translatedTitle: '과학사',
          role: 'Instructor',
          term: 'Spring 2024',
          evaluation: 'Course Evaluation 5.0 / 5.0'
        },
        {
          title: 'History of Science',
          translatedTitle: '과학사',
          role: 'Instructor',
          term: 'Spring 2023',
          evaluation: 'Course Evaluation 4.98 / 5.0'
        },
        {
          title: 'Modern Society and Science: Historical Perspectives on Science and Technology Policy',
          role: 'Instructor',
          term: 'Spring 2025'
        },
        {
          title: 'History of Science and Technology in Modern Korea',
          translatedTitle: '한국과학기술사',
          role: 'Co-Instructor (with Prof. Hyungsub Choi, Seoul Tech)',
          term: 'Fall 2024',
          evaluation: 'Course Evaluation 5.0 / 5.0'
        },
        {
          title: 'History of Science and Technology in Modern Korea',
          translatedTitle: '한국과학기술사',
          role: 'Co-Instructor (with Prof. Hyungsub Choi, Seoul Tech)',
          term: 'Fall 2023',
          evaluation: 'Course Evaluation 4.99 / 5.0'
        },
        {
          title: 'History of Science and Technology in Modern Korea',
          translatedTitle: '한국과학기술사',
          role: 'Instructor',
          term: 'Fall 2022',
          evaluation: 'Course Evaluation 5.0 / 5.0'
        },
        {
          title: 'History of Modern Korea',
          translatedTitle: '한국근현대사의 이해',
          role: 'Instructor',
          term: 'Fall 2024',
          evaluation: 'Course Evaluation 5.0 / 5.0'
        },
        {
          title: 'History of Modern Korea',
          translatedTitle: '한국근현대사의 이해',
          role: 'Instructor',
          term: 'Fall 2023',
          evaluation: 'Course Evaluation 5.0 / 5.0'
        },
        {
          title: 'History of Modern Korea',
          translatedTitle: '한국근현대사의 이해',
          role: 'Instructor',
          term: 'Fall 2022',
          evaluation: 'Course Evaluation 5.0 / 5.0'
        },
        {
          title: 'Humanities of Physics',
          translatedTitle: '물리(物理)의 문리(文理)',
          role: 'Co-Instructor (with Prof. Gunsu Yun, Dept. of Physics, Postech)',
          term: 'Spring 2024'
        },
        {
          title: 'Crossing Boundaries of Science and Society',
          translatedTitle: '과학과 사회의 통합적 이해',
          role: 'Co-Instructor (with Prof. Jinhee Kim and Jihyun Suh, Postech)',
          term: 'Spring 2023'
        }
      ]
    },
    {
      name: 'Harvard University',
      courses: [
        {
          title: 'Modern Southeast Asia',
          role: 'Teaching Fellow for Prof. Sugata Bose',
          term: 'Spring 2022',
          award: 'Distinction in Teaching Award given by the Harvard Derek Bok Center for Teaching and Learning'
        },
        {
          title: 'Medicine and Health in America',
          role: 'Teaching Fellow for Prof. Eram Alam',
          term: 'Spring 2020'
        },
        {
          title: 'Engineering East Asia: Technology, Society, and the State',
          role: 'Teaching Fellow for Prof. Victor Seow',
          term: 'Fall 2019',
          award: 'Distinction in Teaching Award given by the Harvard Derek Bok Center for Teaching and Learning'
        }
      ]
    },
    {
      name: 'Korea University',
      courses: [
        {
          title: 'Topics in Chinese History: Modern China, 1840–1949',
          role: 'Translating Assistant for Xu Jin (徐進, Shandong University)',
          term: 'Spring 2016'
        },
        {
          title: 'Topics in Chinese History: The History of the People’s Republic of China',
          role: 'Translating Assistant for Dong Guoqiang (董國强, Fudan University)',
          term: 'Spring 2014'
        }
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in" id="teaching-portal">
      
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-10 mb-12">
        <span className="font-mono text-xs text-sky-850 font-bold uppercase tracking-widest block mb-3">
          CASS LAB // PEDAGOGICAL PORTFOLIO
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          Courses & Instruction
        </h1>
        <p className="mt-4 text-zinc-650 font-sans leading-relaxed text-sm md:text-base max-w-3xl">
          An overview of academic course registers, guest lectures, and collaborative seminars instructed by Dr. Jongsik Christian Yi across KAIST, Postech, Harvard University, and Korea University.
        </p>
      </div>

      {/* Institution Divisions Accordion/Grid */}
      <div className="space-y-16">
        {teachingRegistry.map((inst) => (
          <div key={inst.name} className="space-y-6" id={`inst-section-${inst.name.toLowerCase().replace(/\s+/g, '-')}`}>
            
            {/* Institution Header banner */}
            <div className="flex items-center gap-3 border-b-2 border-zinc-900 pb-2">
              <Landmark size={20} className="text-sky-900" />
              <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
                {inst.name}
              </h2>
            </div>

            {/* Courses Roster List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inst.courses.map((course, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-zinc-200 hover:border-sky-800 transition-all p-5 flex flex-col justify-between group h-full relative"
                >
                  <div className="space-y-3">
                    {/* Period & Role Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-2.5">
                      <span className="font-mono text-[10px] bg-sky-50 text-sky-900 font-bold px-2 py-0.5 tracking-wide flex items-center gap-1">
                        <Calendar size={11} /> {course.term}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase">
                        {course.role.includes('Instructor') ? 'INSTRUCTOR' : 'ROLE // SUPPORT'}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-base font-bold text-zinc-900 leading-snug group-hover:text-sky-900 transition-colors">
                        “{course.title}”
                        {course.translatedTitle && (
                          <span className="block font-sans text-xs text-zinc-500 font-normal mt-1">
                            [{course.translatedTitle}]
                          </span>
                        )}
                      </h3>
                    </div>

                    {/* Role Details */}
                    <p className="font-sans text-xs font-medium text-zinc-600">
                      {course.role}
                    </p>
                  </div>

                  {/* Rating or Excellence Highlights if present */}
                  {(course.evaluation || course.award) && (
                    <div className="mt-4 pt-3 border-t border-dashed border-zinc-150 space-y-2">
                      {course.evaluation && (
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500 font-semibold bg-zinc-50 px-2 py-1 border border-zinc-150 width-fit">
                          <Star size={11} className="text-amber-500 fill-amber-500" />
                          <span>{course.evaluation}</span>
                        </div>
                      )}
                      
                      {course.award && (
                        <div className="flex items-start gap-1.5 font-sans text-[11px] text-sky-800 bg-sky-50/50 border border-sky-100 p-2 leading-relaxed">
                          <Award size={13} className="text-sky-900 shrink-0 mt-0.5" />
                          <span>{course.award}</span>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
