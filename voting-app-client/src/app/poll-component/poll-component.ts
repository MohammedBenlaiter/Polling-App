import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll-component.html',
  styleUrls: ['./poll-component.css'],
})
export class PollComponent implements OnInit {
  polls: Poll[] = [];
  constructor(private pollService: Poll) {}

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (err) => {
        console.error('Error fetching polls:', err);
      },
    });
  }
}
