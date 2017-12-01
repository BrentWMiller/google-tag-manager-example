import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'gtm-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

	@Input() title: string;
	@Input() description: string;
	@Input() link: string;
	@Input() linkAlt: string;
	@Input() color: string;

	dataObject: any = [];

	constructor() { }

	ngOnInit() {
	}

	public linkClicked(type: string): void {

		this.dataObject = {
			'event': 'link_clicked',
			'link_type': type
		};

		console.log(this.dataObject);

		// window['dataLayer'].push(this.dataObject);
	}

}
