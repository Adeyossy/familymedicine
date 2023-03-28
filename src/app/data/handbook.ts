import { history } from "./sections/history";
import { welcome } from "./sections/welcome";

export const handbook = [
  {
    heading: "Editor’s Note",
    content: [
      {
        metatype: "paragraph",
        content: [
          "I have the honour of being the editor for the second version of the family medicine residency training handbook. It has been 11 years since the first edition (November 2011). There have been considerable improvements to the residency training while the challenges were surmounted as they came. Each challenge provided a learning opportunity.",
          "Going through the previous Editor’s Note, one realises the historical perspective that it holds, hence its inclusion in the history section of this handbook.",
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
              "We decided to make it into an application that would make access to the handbook possible on our phones and PCs with the printable forms feature and easier navigation.",
              "The handbook also reflects the updated 2023 curriculum of both postgraduate medical colleges",
              "You will be able to access abstracts of previous dissertations to have a better feel of what was done and expand on these research studies to further develop them.",
              "There are more pictures so that the new resident doctor can easily spot areas of training and trainers to make the transition as a new trainee easier."
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
          "This digital aid to Family Medicine training is informed not just by fanciful pursuit of content upgrade, but by collective insight gleaned from the training program’s defiance of several odds over decades (including the COVID-19 pandemic recently).",
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
  welcome
]