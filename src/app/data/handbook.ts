import { affilitatedFacilities } from "./sections/affiliated_facilities";
import { affiliatedServices } from "./sections/affiliated_services";
import { collaborative } from "./sections/collaborative";
import { consultants } from "./sections/consultants";
import { dissertations } from "./sections/dissertations";
import { examinationBodies } from "./sections/examination_bodies";
import { facilities } from "./sections/facilities";
import { firstEditor } from "./sections/first_editor";
import { history } from "./sections/history";
import { junior } from "./sections/junior_with_groups";
import { organogramUCH } from "./sections/organogram_uch";
import { otherDepartments } from "./sections/other_departments";
import { routineMeetings } from "./sections/routine_meetings";
import { senior } from "./sections/senior";
import { serviceFunction } from "./sections/service_function";
import { consultants_staff } from "./sections/staff";
import { tasks } from "./sections/tasks";
import { welcome } from "./sections/welcome";

export const handbook = [
  {
    heading: "Editor's Note",
    content: [
      {
        metatype: "paragraph",
        content: [
          "I have the honour of being the editor for the second version of the family medicine residency training handbook. It has been 11 years since the first edition (November 2011). There have been considerable improvements to the residency training while the challenges were surmounted as they came. Each challenge provided a learning opportunity.",
          "Going through the previous Editor's Note, one realises the historical perspective that it holds, hence its inclusion in the history section of this handbook.",
          "The initiative to revise the handbook came from the Head of Department, Dr Adedotun A Adetunji. He set up the Residency Handbook Review Committee in October 2022, comprising of the Residency Training Coordinator, Dr Kehinde Adigun, Dr ‘Bimbo Olorunsola (CME coordinator), Dr Oluwatoyin Olalemi, Dr Oyindamola Aderinto (Chief Resident), Dr Onaopepomipo Kolade (Senior Registrar), Dr Eniade Boriwaye (Registrar) and I. Even though Dr ‘Folajimi Senjobi was not part of the committee, he played a very important role in this edition especially for the abstracts of previous dissertations, a new feature added in this 2nd edition. Dr Olushola Mosuro coordinated the pictures, not a small feat!"
        ]
      },
      {
        metatype: "section",
        content: [
          {
            metatype: "subheading",
            content: [
              "What is new in this 2nd edition?"
            ]
          },
          {
            metatype: 'list',
            content: [
              {
                metatype: "leading",
                content: []
              },
              {
                metatype: "ul",
                content: [
                  "We decided to make it into an application that would make access to the handbook possible on our phones and PCs with the printable forms feature and easier navigation.",
                  "The handbook also reflects the updated 2023 curriculum of both postgraduate medical colleges",
                  "You will be able to access abstracts of previous dissertations to have a better feel of what was done and expand on these research studies to further develop them.",
                  "There are more pictures so that the new resident doctor can easily spot areas of training and trainers to make the transition as a new trainee easier."
                ]
              }
            ]
          }
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "We still have many more ideas we would like to include and feel sure that an electronic version makes subsequent editions easier to upgrade, hence answering the needs of the doctor who chose to train in the speciality of family medicine in the University College Hospital Ibadan.",
          "Thank you.",
          "Dr. Emmanuelle Achiaka Irabor (FWACP-FM, MSc Develop Psych).",
          "2nd January 2023."
        ]
      },
    ],
    author: "Dr. Emmanuelle Achiaka Irabor (FWACP-FM, MSc Develop Psych)",
    date: "2nd January 2023"
  },
  {
    heading: "Head of Department's Message",
    content: [
      {
        metatype: "paragraph",
        content: [
          "This 2023 revision of University College Hospital, Ibadan (UCH) Family Medicine residency training handbook has a truly rich history spanning over 40 years of postgraduate training behind it.",
          "From the early days of handwritten guides for a lone pioneer resident, our training handbook has evolved through typewritten formats and paperback print to the current presentation as an electronic application.",
          "This digital aid to Family Medicine training is informed not just by fanciful pursuit of content upgrade, but by collective insight gleaned from the training program's defiance of several odds over decades (including the COVID-19 pandemic recently).",
          "Our new resident doctors should certainly be proud to engage this app and to provide insightful feedback for its improvement, knowing that by doing so they enter into and venerate a long line of Family Medicine stalwarts who have made their mark and have contributed to the legacy of one of the best training programs in the University College Hospital, Ibadan.",
          "- Dr. Adedotun A. Adetunji MBChB, MSCI (Northwestern), FWACP (FM)"
        ]
      }
    ],
    author: "Dr. Adedotun A. Adetunji MBChB, MSCI (Northwestern), FWACP (FM)"
  },
  {
    heading: "Foreword by Chairman Medical Advisory Committee, and Director of Clinical Services, Training and Research, UCH Ibadan",
    content: [
      {
        metatype: "paragraph",
        content: [
          "The Management of University College Hospital Ibadan has for long supported the UCH Residency Training Committee to consistently update and maintain the UCH Handbook of Information on Residency Training Program as a general guide for all resident doctors in UCH.",
          "Management also remains committed to individual training programs with purpose to make specialty-specific resources available to trainees. Department of Family Medicine, UCH has a longstanding reputation of being a well-organized department with a strong residency training program.",
          "It is commendable that this current crop of leaders has forged ahead to not only revise the Family Medicine Residency Training Handbook, but also to transform it into a web-based electronic application which trainees and trainers can access on portable devices.",
          "This cooperation of UCH resident doctors, Family Medicine trainers, and Management to upgrade resources for technology-compliant training is a welcome development. I congratulate our Family Medicine Residency Training program for taking this initiative.",
          "- Dr. Abiodun M. Adeoye MBBS, MSc (Epid), Cert (Cardiology), FWACP, FNCS, ISHF, FESC, FACC"
        ]
      }
    ]
  },
  firstEditor,
  history,
  {
    heading: "Welcome to the Family Medicine Programme in UCH Ibadan.",
    content: [
      {
        metatype: "paragraph",
        content: [
          "We aim to assist you become a knowledgeable and well-grounded professional.",
          "You have 3 years for Part l/Membership training and 3 years for Part ll /Fellowship training program.",
          "You will need to purchase a copy of the Curriculum of the West African College of Physicians and National Postgraduate Medical College of Nigeria with its Log books.",
          "Curriculum and log book can be paid online on the WACP website. For more information, visit /content/24/examination-bodies-and-other-residency-training-information"
        ]
      }
    ]
  },
  {
    heading: "Family Medicine Training Objectives",
    content: [
      {
        metatype: "list",
        content: [
          {
            metatype: "leading",
            content: []
          },
          {
            metatype: "ol",
            content: [
              "To provide trainees with academic and professional exposures which are relevant to the acquisition of knowledge, skills and attitudes central to the principles and practice of Family Medicine.",
              "To foster goal-oriented trainer-trainee, trainee-trainee and patient/client-trainee interactions and collaborations for achievement of continuing professional development and individual aspirations.",
              "To support respectable partnership between trainees and other professionals/allied health workers for the provision of comprehensive, integrated and accessible medical service for patient care, teaching and research.",
              "To produce competent college-certified Family Physicians who are committed to the promotion of the biopsychosocial model of care, and to the advancement of Family Medicine as a specialty."
            ]
          }
        ]
      },
      {
        metatype: "image",
        content: [
          {
            metatype: "src",
            content: [
              "/assets/examination.jpg"
            ]
          },
          {
            metatype: "caption",
            content: [
              "Dr. S.O Martins (Senior Registrar in 2016) Examining a Patient"
            ]
          }
        ]
      }
    ]
  },
  junior,
  {
    heading: "Details of the Rotations with Duration",
    content: [
      {
        metatype: "paragraph",
        content: [
          "Twenty-six months of rotations (serial training, for UCH) is considered our minimum acceptable requirement. The stated durations below are for the structured posting. ",
          "It is expected that you will also aim at continuous exposure to clinical activities in these areas throughout the membership training period through calls in both the posting and the emergency department."
        ]
      },
      {
        metatype: "table",
        content: [
          {
            metatype: "th",
            content: [
              "Rotation", "Duration"
            ]
          },
          {
            metatype: "td",
            content: [
              {
                metatype: "tr",
                content: [
                  "Family Medicine",
                  "6 (can be broken into 2 blocks) months"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Surgery",
                  "3 months"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Maternal Health",
                  "3 months"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Internal Medicine",
                  "3 months"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Mental Health",
                  "2 months"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Child Health",
                  "3 months"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Accident and Emergency",
                  "1 month"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Ophthalmology",
                  "1 month"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Anaesthesia",
                  "6 weeks"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Radiology and Medical Imaging",
                  "1 month"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Community Medicine and PHC",
                  "6 weeks"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "ENT",
                  "1 month"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Haematology and blood transfusion",
                  "2 weeks"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Chemical Pathology",
                  "2 weeks"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Anatomic Pathology",
                  "2 weeks"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Microbiology and Parasitology",
                  "2 weeks"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Oral health",
                  "1 month"
                ]
              }
            ]
          }
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "On completion of outside rotations from the Department of Family Medicine Department (DoFM), you will have a three-month Family Medicine II posting before doing the Part l examinations /Membership examinations in the National Postgraduate Medical College and the West African College of Physician respectively.",
          "The Family Medicine II posting comes with a series of lectures; tutorials and practical sessions to enable you synthesise what you learnt during your postings and prepare for the examinations.",
          "The tutorials held during this posting are usually between January to March and July to September each year.",
          "For National Postgraduate Medical College, requires yearly resident-doctor-in-training assessment   Objective Structured Clinical Examination (OSCE) and Multiple Choice Question – one single best option (MCQ). These must be submitted yearly for documentation that you are still in training. Please ensure you fill the certificate of completion of rotations for the National Postgraduate College which is available in the computer system in Resident Doctors' room or with the Departmental Secretary. Your copy of submitted yearly assessments are a requirement to be attached to your examinations form at the National Postgraduate Medical College."
        ]
      }
    ]
  },
  {
    heading: "College Organised Update and Revision Courses",
    content: [
      {
        metatype: "paragraph",
        content: [
          "The National Postgraduate Medical College of Nigeria organises two (2) workshop per year of which the resident doctor is expected to attend 50 % of these during the duration of the part 1 training (i.e., 2 of the 4 courses if the training lasted 2 years; 3 of 6 courses if the training lasted 3 years). The College also organises yearly revision courses and the Advanced Life Support for Obstetrics (ALSO). Certificates for these courses must be submitted as eligibility to take the Part I examinations.",
          "In the UCH Ibadan, in view of our compartmentalised training occasioned by being situated in a teaching hospital, the membership/ Part I training lasts a little under 3 years. ",
          "For the West African College of Physicians, two update courses are organised every year. The WACP expects one (1) update course and one (1) revision course, as well as one (1) Ethics course as eligibility for the Membership examinations.",
          "These courses will be available twice a year, in January - February and July - August each year. ",
          "Our recommended target is to access and complete these requirements within the initial 2 years of your residency, to enable you meet the prerequisite for your examinations. Your certificates from these courses will form part of your portfolio of learning."
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "Self-directed online courses www.evidemy.com are accessible to membership candidates after subscription. This is at a cost of $100/year. The courses should be completed and certificate of completion obtained by the candidates"
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "The membership candidates are expected to synchronise the courses with their postings and finish the courses relevant to their postings within the posting period at the minimum.",
          "The relevant online course should be used for departmental clinical meetings, tutorials, procedural demonstrations, mock examinations, academic sessions, journal club meetings, health leadership and managerial training, medical education development and formative assessments.",
          "The candidate will maintain an e-portfolio of learning containing a clinical Practice Record Book or Logbook among others.",
          "The examinations of the West African College of Physicians hold on the 1st weeks of April and October each year. That of the National Postgraduate College is in May and November each year.",
          "The examinations shall consist of a screening phase in the form of Computer Based Test."
        ]
      },
      {
        metatype: "subheading",
        content: [
          "Computer Based Test"
        ]
      },
      {
        metatype: "list",
        content: [
          {
            metatype: "leading",
            content: [
              "There are 2 papers (Paper 1 and Paper 11)"
            ]
          },
          {
            metatype: "ul",
            content: [
              "Paper I:  200 questions with one best answer out of four options lasting three (3) hours.",
              "Paper II: 100 questions, problem solving lasting one and half (1½) hours."
            ]
          }
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "Successful candidates in the screening test will proceed to clinical examinations which will consist of:"
        ]
      },
      {
        metatype: "subheading",
        content: [
          "Objective Structured Clinical Examination (OSCE)"
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "This consist of a picture test of charts, investigation results, instruments and pathognomonic clinical conditions and Then (10) active stations that enable the candidate demonstrate physical examination, clerkship and counselling skills as well as demonstrate procedures."
        ]
      },
      {
        metatype: "subheading",
        content: [
          "Defence of Patient Management Report Book (Case Book)."
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "Membership candidates will start collection of their cases after completion of orientation program (on-line) and 3-months of Family Medicine."
        ]
      },
      {
        metatype: "subheading",
        content: [
          "Viva Voce (Orals and Portfolio of learning defence)."
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "This allows the candidate speak about basic management administrative, organizational and training concepts and see how these have been internalized even if the opportunity to put them in practice has not occurred fully at this stage of training."
        ]
      }
    ]
  },
  {
    heading: "Patient Management Report Book (PMR)",
    content: [
      {
        metatype: "paragraph",
        content: [
          "Due to the importance placed on patient-centred care (patient management) in Family Medicine the candidate will be required to present a detailed written report on 10 patients which the trainee managed during the residency program which includes completed follow-up."
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "The write up should reflect the family-oriented continuing care unique to the discipline as shown in the 7-step Family Practice Management Guide in appendix 1."
        ]
      }
    ]
  },
  {
    heading: "Organogram of UCH Family Medicine Faculty and Trainees",
    content: [
      {
        metatype: "organogram",
        content: [
          {
            metatype: "level",
            content: [
              "Director of Training"
            ]
          },
          {
            metatype: "level",
            content: [
              "HOD, Family Medicine"
            ]
          },
          {
            metatype: "level",
            content: [
              "CME Coordinator",
              "Residency Training Coordinator",
              "Family Medicine Consultants & Trainers"
            ]
          },
          {
            metatype: "level",
            content: [
              "Chief Resident (Family Medicine)"
            ]
          },
          {
            metatype: "level",
            content: [
              "Registrars (Family Medicine)"
            ]
          }
        ]
      }
    ]
  },
  collaborative,
  {
    heading: "Consultative Clinics in Department of Family Medicine, UCH",
    content: [
      {
        metatype: "groups",
        content: [
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "Sorting Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "All Consultants"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Monday - Saturday"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "GOP Follow-up Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "All Consultants"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Monday - Saturday"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "Nutrition Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Drs. 'Tola Ogunbode/ Yemisi Folasire"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Tuesdays & Thursdays"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "Cope Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Dr. A Adetunji/ Achiaka Irabor"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Thursdays"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "Couples Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Drs. M. Olawuyi (men)/ Achiaka Irabor (women)"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Friday afternoon"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "GOP NHIS Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Dr. S A Muyibi/O Abodunde"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Monday - Saturday"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "Private Suites Outpatient Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Dr S  Adebayo"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Monday - Sunday"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "LIFE"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Dr Olushola A Mosuro"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Wednesdays"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "Lifestyle Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Dr E Achiaka Irabor"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Tuesdays & Thursdays"
                ]
              }
            ]
          },
          {
            metatype: "group",
            content: [
              {
                metatype: "h3",
                content: [
                  "Adolescent Clinic"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Dr 'Bimbo Olorunshola"
                ]
              },
              {
                metatype: "paragraph",
                content: [
                  "Fridays"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  routineMeetings,
  senior,
  facilities,
  consultants_staff,
  otherDepartments,
  serviceFunction,
  tasks,
  affiliatedServices,
  dissertations,
  organogramUCH,
  examinationBodies
]