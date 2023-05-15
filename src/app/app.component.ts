import { Component, OnInit } from '@angular/core';
import { handbook } from './data/handbook';
import { SectionContent, SectionItem, TableOfContent, Chapter, Section, Paragraph } from './types/handbook_types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableOfContent: Array<TableOfContent> = [];
  index = -1;
  showOnMobile = false;
  itemsSelectionState: boolean[] = [];
  itemsOpenState: boolean[] = [];
  handbook = handbook;

  constructor(private router: Router) {}

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
  }

  setIndexOnClick(index: number): void {
    this.index = index;

    const oldState = this.itemsSelectionState[index];
    if (oldState) {
    } else {
      this.itemsSelectionState = this.itemsSelectionState.fill(false);
    }
    this.itemsOpenState = this.itemsOpenState.fill(false);
    this.itemsSelectionState[index] = true;
    this.itemsOpenState[index] = !oldState;
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
