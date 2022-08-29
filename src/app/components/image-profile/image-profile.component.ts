import { Component, OnInit } from '@angular/core';
import { faPencil} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.css']
})
export class ImageProfileComponent implements OnInit {
  faPencil = faPencil;

  constructor() { }

  ngOnInit(): void {
  }

}
