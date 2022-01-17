import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
	public ClassicEditor = ClassicEditor;
 // Ck editor
 public ckEditor = "Privacy Content";
	constructor() { }

	ngOnInit() { }


}
