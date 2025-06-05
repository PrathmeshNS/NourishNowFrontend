import { Component, Input, Output, EventEmitter } from "@angular/core"
import { NavbarClickService } from "../service/navbar-click.service";


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})


export class AdminNavbarComponent {
  @Output() themeToggle = new EventEmitter<void>();

  constructor(private navClick: NavbarClickService) { }

  sidebarOpen = false;
  activeItem = 'home';
  todayDate = Date()

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  setActive(item: string) {
    this.activeItem = item;
    this.navClick.setLinkData(item);
  }

  onThemeToggle() {
    this.themeToggle.emit();
  }

  subLink(value: string) {
    this.navClick.setSubLinkData(value)
  }

}