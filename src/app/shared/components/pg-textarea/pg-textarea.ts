import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'pg-textarea',
  inputs: ["content", "handlePosition", "width"],
  imports: [
    NgClass
  ],
  templateUrl: './pg-textarea.html',
  styleUrl: './pg-textarea.css'
})
export class PgTextarea implements AfterViewInit {

  /*selector => ici pas selecteur css mais une référence de template ou un omposant*/
  @ViewChild('handle', { static: true }) handle!: ElementRef<HTMLDivElement>;
  @ViewChild('textarea', { static: true }) textarea!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  private isResizing = false;

  content: string = '';

  handlePosition: 'left' | 'right' = "right";

  width: number = 50;


  ngOnInit() {
    const textareaEl = this.textarea.nativeElement;
    textareaEl.style.width = `${(this.width*window.innerWidth/100)}px`;
  }

  ngAfterViewInit(): void {
    const handleEl = this.handle.nativeElement;

    handleEl.addEventListener('mousedown', (event: MouseEvent) => {
      this.isResizing = true;
      event.preventDefault();
    });

    document.addEventListener('mousemove', (event: MouseEvent) => {
      if (!this.isResizing) return;

      const containerEl = this.container.nativeElement;
      const textareaEl = this.textarea.nativeElement;

      const newHeight = containerEl.offsetHeight - (containerEl.getBoundingClientRect().bottom - event.clientY);
      const newWidth = this.handlePosition === "right" ?
        (event.clientX - containerEl.getBoundingClientRect().left) :
        (containerEl.getBoundingClientRect().right - event.clientX);

      // conversion en %
      const heightPercent = (newHeight / window.innerHeight) * 100;
      const widthPercent = (newWidth / window.innerWidth) * 100;

      console.log(widthPercent);

      if ( 250 < newHeight && newHeight < 300) {
        textareaEl.style.height = `${newHeight}px`;
      }

      if (this.width - 5 < widthPercent && widthPercent < this.width + 5) {
        textareaEl.style.width = `${newWidth}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      this.isResizing = false;
    });
  }

  onTab(event: Event) {
    // empêche le comportement par défaut de Tab
    event.preventDefault();
  }
}
