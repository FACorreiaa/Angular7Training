import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDowpdown]"
})
export class DowpdownDirective {
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
