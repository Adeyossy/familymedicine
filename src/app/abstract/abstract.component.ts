import { Component, OnInit } from '@angular/core';
import { MetaType, Paragraph, Section } from '../types/handbook_types';
import { ActivatedRoute } from '@angular/router';
import { dissertations } from '../data/sections/dissertations';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
  item: MetaType = {
    metatype: "",
    content: []
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        const abstractId = param.get('abstractId');
        const projects = dissertations.content.filter(content => content.metatype === "section");
      }
    })
  }

}
