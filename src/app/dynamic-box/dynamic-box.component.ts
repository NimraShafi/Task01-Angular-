import { CommonModule} from '@angular/common';
import { Component,Input} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-dynamic-box',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './dynamic-box.component.html',
  styleUrl: './dynamic-box.component.scss'
})
export class DynamicBoxComponent {

  @Input() backgroundColor: string = '#E23F44'; 
  @Input() content1: string = '';        
  @Input() content2: string = '';        
  @Input() icon: any = null;
}
