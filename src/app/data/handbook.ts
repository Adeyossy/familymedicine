import { affilitatedFacilities } from "./sections/affiliated_facilities";
import { affiliatedServices } from "./sections/affiliated_services";
import { appendices } from "./sections/appendices";
import { collaborative } from "./sections/collaborative";
import { commitments } from "./sections/commitments";
import { consultants } from "./sections/consultants";
import { curriculum } from "./sections/curriculum";
import { dissertations } from "./sections/dissertations";
import { editorsNote } from "./sections/editors_note";
import { examinationBodies } from "./sections/examination_bodies";
import { facilities } from "./sections/facilities";
import { firstEditor } from "./sections/first_editor";
import { history } from "./sections/history";
import { junior } from "./sections/junior_with_groups";
import { logbook } from "./sections/logbook";
import { organogramUCH } from "./sections/organogram_uch";
import { otherDepartments } from "./sections/other_departments";
import { otherForms } from "./sections/other_forms";
import { others } from "./sections/others";
import { rotations } from "./sections/rotation";
import { routineMeetings } from "./sections/routine_meetings";
import { senior } from "./sections/senior";
import { serviceFunction } from "./sections/service_function";
import { consultants_staff } from "./sections/staff";
import { tasks } from "./sections/tasks";
import { tutelage } from "./sections/tutelage";
import { welcome } from "./sections/welcome";

export const handbook = [
  editorsNote,
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
        metatype: "banner",
        content: [
          {
            metatype: "src",
            content: [
              "/assets/residents/residents_consulting.jpeg"
            ]
          },
          {
            metatype: "caption",
            content: [
              "Family Medicine Residents in Clinic"
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
      rotations,
      {
        metatype: "paragraph",
        content: [
          "On completion of outside rotations from the Department of Family Medicine Department (DoFM), you will have a three-month Family Medicine II posting before doing the Part l examinations /Membership examinations in the National Postgraduate Medical College and the West African College of Physician respectively.",
          "The Family Medicine II posting comes with a series of lectures; tutorials and practical sessions to enable you synthesise what you learnt during your postings and prepare for the examinations. The tutorials held during this posting are usually between January to March and July to September each year.",
          "For National Postgraduate Medical College, requires yearly resident-doctor-in-training assessment: Objective Structured Clinical Examination (OSCE) and Multiple Choice Question - one single best option (MCQ). These must be submitted yearly for documentation that you are still in training. Please ensure you fill the certificate of completion of rotations for the National Postgraduate College which is available in the computer system in Resident Doctors' room or with the Departmental Secretary. Your copy of submitted yearly assessments are a requirement to be attached to your examinations form at the National Postgraduate Medical College."
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
                  "Drs. A Adetunji/ Achiaka Irabor"
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
                  "Drs. S A Muyibi/O Abodunde"
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
                  "Dr. S. Adebayo"
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
                  "Dr Olushola A. Mosuro"
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
                  "Dr E. Achiaka Irabor",
                  "Dr. O. Mosuro",
                  "Dr. T. Ilori",
                  "Dr. A. Obimakinde",
                  "Dr. O. Ayeni"
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
  examinationBodies,
  curriculum,
  otherForms,
  logbook,
  tutelage,
  commitments,
  others,
  appendices
]