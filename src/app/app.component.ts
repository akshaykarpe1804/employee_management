import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'task-manager';
  ngOnInit(){

  }
  loginpage(){
    // This method can be used to navigate to the login page programmatically
    // For example, using the Router service:
    //  this.router.navigate(['/login']);
    console.log('Navigating to login page');
  }
}
