import { Component, Input } from '@angular/core';
import { Question } from 'src/app/shared/question';

@Component({
  selector: 'll-q-list-item',
  templateUrl: './q-list-item.component.html',
  styleUrls: ['./q-list-item.component.css']
})
export class QListItemComponent {
@Input() question?: Question
}
