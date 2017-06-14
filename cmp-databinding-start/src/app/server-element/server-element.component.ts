import { 
  Component, 
  OnInit, 
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ContentChild,
  ElementRef,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges,
  AfterViewInit,
  AfterContentInit {

  @Input() element: {type: string, name: string, content: string} 
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes); 
  }

  ngAfterViewInit() {
    console.log(this.heading.nativeElement); 
  }

  ngAfterContentInit() {
    console.log(this.contentParagraph.nativeElement); 
  }

}
