import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private studentId = "991697029";
  private studentName = "Jacob Angga";

  // Getters
  getStudentId(): string {
    return this.studentId;
  }
  getStudentName(): string {
    return this.studentName;
  }
}
