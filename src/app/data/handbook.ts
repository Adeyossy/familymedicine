import { affilitatedFacilities } from "./sections/affiliated_facilities";
import { affiliatedServices } from "./sections/affiliated_services";
import { appendices } from "./sections/appendices";
import { cmac } from "./sections/cmac";
import { collaborative } from "./sections/collaborative";
import { commitments } from "./sections/commitments";
import { consultants } from "./sections/consultants";
import { curriculum } from "./sections/curriculum";
import { detailsOfRotation } from "./sections/details_of_rotation";
import { dissertations } from "./sections/dissertations";
import { editorsNote } from "./sections/editors_note";
import { examinationBodies } from "./sections/examination_bodies";
import { facilities } from "./sections/facilities";
import { firstEditor } from "./sections/first_editor";
import { history } from "./sections/history";
import { hodMessage } from "./sections/hod_message";
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
import { trainingObjectives } from "./sections/training_objectives";
import { tutelage } from "./sections/tutelage";
import { updateCourse } from "./sections/update_course";
import { welcome } from "./sections/welcome";

export const handbook = [
  editorsNote,
  hodMessage,
  cmac,
  firstEditor,
  history,
  welcome,
  trainingObjectives,
  junior,
  detailsOfRotation,
  updateCourse,
  {
    heading: "Patient Management Report Book (PMR)",
    content: [
      {
        metatype: "banner",
        content: [
          {
            metatype: "src",
            content: [
              "/assets/pmr.jpg"
            ]
          },
          {
            metatype: "caption",
            content: [
              "Patient Management Report"
            ]
          }
        ]
      },
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