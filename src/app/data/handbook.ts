import { affilitatedFacilities } from "./sections/affiliated_facilities";
import { consultants } from "./sections/consultants";
import { history } from "./sections/history";
import { otherDepartments } from "./sections/other_departments";
import { senior } from "./sections/senior";
import { serviceFunction } from "./sections/service_function";
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
    heading: "Message from the Chief Medical Director",
    content: []
  },
  {
    heading: "Table of Content",
    content: []
  },
  history,
  {
    heading: "Welcome to the Family Medicine Programme in UCH Ibadan.",
    content: [
      {
        metatype: "paragraph",
        content: [
          "We aim to assist you become a knowledgeable and well-grounded professional. ",
          "You have 3 years for Part l/Membership training and 3 years for Part ll /Fellowship training program.",
          "You will need to purchase a copy of the Curriculum of the West African College of Physicians and National Postgraduate Medical College of Nigeria with its Log books. ",
          "The WACP log book is on the website and this can be paid."
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
  {
    heading: "Junior Residency program/Membership training aka Pre-Part I training.",
    content: [
      {
        metatype: "h3",
        content: [
          "Goal of the Membership/Part I Training:"
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "To produce a physician that is well equipped with basic knowledge, skills and attitude to practice as a specialist in Family Medicine, as well as have a solid foundation for the fellowship training in Family Medicine. ",
          "Your training builds on your basic medical training, internship and filed experience during your National Youth Service Year. It takes place in UCH and accredited health institutions outside UCH lasting 30 months. ",
          "During the period, the you shall go through rotations and be certified in the major clinical specialties including Family Medicine. You shall also complete prescribed course work organised by the College and Faculty using the e-learning platform, at Workshops, Update courses and Revision courses."
        ]
      },
      {
        metatype: "h3",
        content: [
          "Starting"
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "You will have a pre-training assessment/competency test, as you join the program and spend your first training in Family Medicine I posting for 4-6 months. The variable time depends on how quickly you internalise and exhibit the family medicine concepts. The latter is determined by observation, interaction with your Education Supervisor/Mentor and success at the formative and summative posting assessment tests.",
          "On achieving success, the junior resident doctor might proceed for rotation thereafter depending on availability of space in the host department. For resident doctors that do not satisfy the assessments, a 2nd attempt at six months of Family Medicine I posting is arranged."
        ]
      },
      {
        metatype: "h3",
        content: [
          "Courses to be taken during Family Medicine I posting"
        ]
      },
      {
        metatype: "table",
        content: [
          {
            metatype: "th",
            content: [
              "Lecturer",
              "Courses"
            ]
          },
          {
            metatype: "td",
            content: [
              {
                metatype: "tr",
                content: [
                  "Dr E Achiaka Irabor",
                  "The History of Family Medicine/Tenets of Family Medicine"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr E Achiaka Irabor",
                  "Patient Centred Clinical Methods (PCCM Modules 1-3)"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr. S. A. Muyibi",
                  "Patient Centred Clinical Methods (PCCM Modules 4-6)"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr.O.O.Olowookere",
                  "Evidenced-based Medicine (3 session)"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr. Abimbola M Olorunsola",
                  "Introduction to Clinical Statistics (2 session)"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr Oluwatoyin E Olalemi",
                  "Clinical Clerkship (3 session)"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr Olusola A Mosuro",
                  "Clinician Assessment tools: Mini CEX, DOPs, 360suposup Feedback"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr ‘Tope Ilori",
                  "Basic Communication skills"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr AA Adetunji",
                  "Truth telling and breaking bad news"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr L.A Adebusoye",
                  "Continuing Professional Development for 1º care physicians"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr B. Abodunde",
                  "Learning opportunities for primary care surgery"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr Taiwo O. Soyinka",
                  "Enhancing Inter-professional collaboration and team spirit"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr O.Abimbola Obimakinde",
                  "Undergraduate Family Medicine: An overview"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr K. Adigun",
                  "Medical Certification of Fitness at the GOP clinic, UCH"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr G. Olukolade",
                  "Introduction to Cognitive Behaviour Therapy"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr Olusola Obadare",
                  "Maximizing pre-Part 1 specialty rotations (WACP/NPMCN)"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Dr Kehinde M Kuti",
                  "Introduction to HIV care, treatment, and support"
                ]
              },
              {
                metatype: "tr",
                content: [
                  "Life Resuscitation Society of Nigeria",
                  "Basic Life Support"
                ]
              }
            ]
          }
        ]
      },
      {
        metatype: "paragraph",
        content: [
          "The Membership/Part I training in the University College Hospital, Ibadan has a duration 30 months due to our serial structure of learning. This is due to our location in a teaching hospital which translates to seeing certain conditions only when in the appropriate department. ",
          "In detail, you will be having a total of 26 months of rotation/posting, with concurrent 30 months of e-learning course work in 20 Domains with 35 Modules. ",
          "Practical training also takes place in approved training hospitals where hands-on is more likely due less competition, supplemented by approved training posts in certain specialties, when necessary."
        ]
      },
      {
        metatype: "section",
        content: [
          {
            metatype: "list",
            content: [
              {
                metatype: "leading",
                content: [
                  "You should achieve competence in the diagnosis and management of a wide range of conditions presenting with emphasis in the following areas:"
                ]
              },
              {
                metatype: "ul",
                content: [
                  "Family Practice",
                  "Adult Medicine (including dermatology)",
                  "Maternal/Women's Health",
                  "Mental Health",
                  "Laboratory Medicine",
                  "Community Health",
                  "General Surgery, including orthopaedics and urology",
                  "Child Health",
                  "Anaesthesia",
                  "Accident & Emergencies",
                  "Ear, Nose & Throat (ENT)",
                  "Ophthalmology",
                  "Oral Health",
                  "Radiology and Medical Imaging",
                  "District Rotation for Family Practice especially for trainees in centers where integrated patient care (e.g., concurrent care of patients with medical, surgical and obstetric conditions) is not practicable."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
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
    heading: "College organised Update and Revision Courses",
    content: [
      {
        metatype: "paragraph",
        content: [
          "The National Postgraduate Medical College of Nigeria organises two(2) workshop per year of which the resident doctor is expected to attend 50 % of these during the duration of the part 1 training(i.e., 2 of the 4 courses if the training lasted 2 years; 3 of 6 courses if the training lasted 3 years).The College also organises yearly revision courses and the Advanced Life Support for Obstetrics(ALSO).Certificates for these courses must be submitted as eligibility to take the Part I examinations.",
          "In the UCH Ibadan, in view of our compartmentalised training occasioned by being situated in a teaching hospital, the membership/ Part I training lasts a little under 3 years. ",
          "For the West African College of Physicians, two update courses are organised every year.The WACP expects one(1) update course and one(1) revision course, as well as one (1) Ethics course as eligibility for the Membership examinations.",
          "These courses will be available twice a year, in January - February and July - August each year. ",
          "Our recommended target is to access and complete these requirements within the initial 2 years of your residency, to enable you meet the prerequisite for your examinations.Your certificates from these courses will form part of your portfolio of learning."
        ]
      },
      {
        metatype: "paragraph_link",
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
          "The examinations of the West African College of Physicians hold on the 1st weeks of April and October each year. That of the National Postgraduate College is in May and November each year."
        ]
      },
      {
        metatype: "nested_list",
        content: [
          {
            metatype: "paragraph",
            content: [
              "The examinations shall consist of a screening phase in the form of Computer Based Test."
            ]
          },
          {
            metatype: "list_items",
            content: []
          }
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
        metatype: "paragraph_link",
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
  {
    heading: "Collaborating Units in The Department of Family Medicine, UCH",
    content: []
  },
  {
    heading: "Consultative Clinics in Department of Family Medicine, UCH",
    content: []
  },
  {
    heading: "Routine Departmental Meetings",
    content: []
  },
  senior,
  affilitatedFacilities,
  consultants,
  otherDepartments,
  serviceFunction,
  tasks
]