import { Component, OnInit } from '@angular/core';
import { handbook } from './data/handbook';
import { SectionItem, TableOfContent } from './types/handbook_types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableOfContent: Array<TableOfContent> = [];

  ngOnInit(): void {
    this.tableOfContent = handbook.map(item => {
      let subheadings: string[] = [];
      
      if (item.content) {
        let content = item.content;
        let content_with_sections = content.filter((sub) => sub.metatype === 'section');
        let content_with_subheadings = content_with_sections
          .filter((sub) => sub.metatype === 'subheading');

        const sections_purified = content_with_sections.map(section => {
          return section.content.map(section_content => {
            const sectionContent = section_content as SectionItem;
            if (sectionContent.metatype === 'subheading') return sectionContent;
            return { metatype: '', content: [''] }
          }).filter(subheading => subheading.metatype)
        });

        subheadings = content_with_sections.flatMap(section => {
          return section.content.flatMap(_sectionContent => {
            const sectionContent = _sectionContent as SectionItem;
            if (sectionContent.metatype === 'subheading') return sectionContent.content[0];
            if (sectionContent.metatype === 'section') 
              return this.findSubheading(sectionContent.content as SectionItem[]);
            return [];
          });
        });
      }

      return { title: item.heading, sections: subheadings}
    });
  }

  // planned to be used recur
  findSubheading(sectionContent: SectionItem[]): any {
    return sectionContent.flatMap(_sectionContent => {
      const sectionContent = _sectionContent as SectionItem;
      if (sectionContent.metatype === 'subheading') return sectionContent.content[0];
      if (sectionContent.metatype === 'section') return;
      return [];
    });
  }
}
