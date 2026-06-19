import { Component } from '@angular/core';
import { getXHRResponse } from 'rxjs/internal/ajax/getXHRResponse';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 // Controla a visibilidade do menu lateral
  isSidebarVisible: boolean = false;

  // Função para alternar o menu
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
