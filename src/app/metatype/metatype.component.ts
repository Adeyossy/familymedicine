import { Component, OnInit, Input } from '@angular/core';
import { Paragraph, SectionItem } from '../types/handbook_types';

@Component({
  selector: 'app-metatype',
  templateUrl: './metatype.component.html',
  styleUrls: ['./metatype.component.css']
})
export class MetatypeComponent implements OnInit {

  metatype: string = "";
  @Input() item: SectionItem = { metatype: "", content: [] };

  constructor() { }

  ngOnInit(): void {
  }

  itemAsStrings(): string[] {
    return this.item.content as string[];
  }

  itemAsSectionItems(): SectionItem[] {
    return this.item.content as SectionItem[];
  }

  imageItemAsStrings(index: number): string[] {
    return (this.item.content[index] as SectionItem).content as string[];
  }
}
