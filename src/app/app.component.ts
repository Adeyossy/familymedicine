import { Component, OnInit } from '@angular/core';
import { handbook } from './data/handbook';
import { SectionContent, SectionItem, TableOfContent, Chapter, Section, Paragraph } from './types/handbook_types';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableOfContent: Array<TableOfContent> = [];
  index = -1;
  animate = false;
  showOnMobile = false;
  itemsSelectionState: boolean[] = [];
  itemsOpenState: boolean[] = [];
  handbook = handbook;
  residents_images = ['Administrative Office','BP Area', 'Children Area', 'Consulting',
   'Entrance', 'Lab', 'Children Playing', 'Clinical Psychology', 'Consultant', 'Entrance',
    'Nurses Station', 'Residents Consulting', 'Sorting Hall', 'Hallway', 'HCT Room',
    'NHIS Clinic', 'Residents', 'Resident Consulting', 'Seminar Room', 'Sorting Hall'];
  resident_image = 'url(../assets/residents/residents.jpg)';

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.tableOfContent = handbook.map(item => {
      let subheadings: string[] = [];
      
      if (item.content) {
        let content = item.content as Chapter[];
        let content_with_sections = content.filter((sub) => sub.metatype === 'section') as Section[];
        let content_with_subheadings = content_with_sections
          .filter((sub) => sub.metatype === 'subheading');

        subheadings = content_with_sections.flatMap((section) => {
          const sectionAsStrings = section.content.flatMap(_sectionContent => {
            const sectionContent = _sectionContent as Paragraph;
            if (sectionContent.metatype === 'subheading') return sectionContent.content;
            // if (sectionContent.metatype === 'section') 
            //   return this.findSubheading(sectionContent.content as SectionItem[]);
            return [] as string[];
          });

          return sectionAsStrings;
        });
      }

      return { title: item.heading, sections: subheadings}
    });
    
    this.itemsSelectionState = new Array(handbook.length).fill(false);
    
    this.itemsOpenState = new Array(handbook.length).fill(false);

    // this.authService.setFirebaseConfig().subscribe
  }

  // planned to be used recur
  findSubheading(sectionContent: SectionItem[]): any {
    return sectionContent.flatMap(_sectionContent => {
      const sectionContent = _sectionContent as SectionItem;
      if (sectionContent.metatype === 'subheading') return sectionContent.content[0];
      if (sectionContent.metatype === 'section') return [];
      return [];
    });
  }

  setIndex(index: any): void {
    this.index = index.index;
    if (this.index) this.setAnimation();
  }

  setAnimation(): void {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
      this.randomizeImage();
    }, 2000);
  }

  randomizeImage() {
    const rand = Math.random() * (this.residents_images.length - 1);
    const randInteger = Math.floor(rand);
    const imageFile = this.residents_images[randInteger].replace(' ', '_').toLowerCase();

    this.resident_image = 'url(../assets/residents/' + imageFile + '.jpg)';
  }

  setIndexOnClick(index: number): void {
    this.index = index;
    this.setAnimation();

    const oldState = this.itemsSelectionState[index];
    if (oldState) {
    } else {
      this.itemsSelectionState = this.itemsSelectionState.fill(false);
    }
    this.itemsOpenState = this.itemsOpenState.fill(false);
    this.itemsSelectionState[index] = true;
    this.itemsOpenState[index] = !oldState;
    this.showOnMobile = false;
  }

  showToc(): void {
    this.showOnMobile = !this.showOnMobile;
  }
  
  switchSection(index: number): void {
    const link = handbook[index].heading.replace(/[^\w\s]/g, '')
      .replace(/\s/g, "-").toLowerCase();
    this.router.navigateByUrl(`/content/${index}/${link}`).then(() => {
      this.setIndexOnClick(index);
    });
  }

}
