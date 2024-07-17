import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrl: './editbook.component.scss'
})
export class EditbookComponent {
//editBook:FormGroup;
//productId:number;

constructor(private route:ActivatedRoute,private router:Router,private bookservice:ApiService){

}


}


