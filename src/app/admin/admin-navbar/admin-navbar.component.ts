import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarClickService } from '../service/navbar-click.service';


interface MenuItem {
  icon: string
  label: string
  route: string
  hasDropdown: boolean
  isOpen: boolean
  isActive: boolean
  dropdownItems?: DropdownItem[]
}

interface DropdownItem {
  label: string
  count: number
}


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})


export class AdminNavbarComponent {
  isDarkMode = false
  isSidebarCollapsed = false
  isMobileMenuOpen = false
  searchQuery = ""
  currentPage = "Listed Things"

  // Menu items with proper structure
  menuItems: MenuItem[] = [
    {
      icon: "🏠",
      label: "Home",
      route: "./admin",
      hasDropdown: false,
      isOpen: false,
      isActive: true,
    },
    {
      icon: "🏨",
      label: "Hotel",
      route: "../admin-hotel-verified",
      hasDropdown: true,
      isOpen: false,
      isActive: false,
      dropdownItems: [
        { label: "Verified", count: 65 },
        { label: "UnVerified", count: 5 },
      ],
    },
    {
      icon: "❤️",
      label: "Ngo",
      route: "../admin-ngo-verified",
      hasDropdown: true,
      isOpen: false,
      isActive: false,
      dropdownItems: [
        { label: "Verified", count: 65 },
        { label: "UnVerified", count: 5 },
      ],
    },
    {
      icon: "🍽️",
      label: "Available Meal",
      route: "../admin-available-meal",
      hasDropdown: false,
      isOpen: false,
      isActive: false,
    },
    {
      icon: "🕐",
      label: "History",
      route: "../admin-history",
      hasDropdown: false,
      isOpen: false,
      isActive: false,
    },
    {
      icon: "🎁",
      label: "Donation",
      route: "../admin",
      hasDropdown: false,
      isOpen: false,
      isActive: false,
    },
  ]

  // Statistics data
  statsData = {
    ngo: {
      verified: 65,
      unverified: 5,
    },
    hotel: {
      verified: 65,
      unverified: 5,
    },
  }

  constructor(private router: Router, private navbarClickService:NavbarClickService) { }

  ngOnInit() {
    // Load theme preference
    const savedTheme = localStorage.getItem("theme")
    this.isDarkMode = savedTheme === "dark"
    this.updateTheme()
  }

  // Toggle dropdown functionality
  toggleDropdown(index: number, event?: Event) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    if (this.menuItems[index].hasDropdown) {
      // Close all other dropdowns
      this.menuItems.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false
        }
      })

      // Toggle current dropdown
      this.menuItems[index].isOpen = !this.menuItems[index].isOpen
      console.log(`Dropdown ${this.menuItems[index].label} is now ${this.menuItems[index].isOpen ? "open" : "closed"}`)
    }
  }

  // Select main menu item
  selectMenuItem(index: number, event?: Event) {
    if (event) {
      event.preventDefault()
    }

    // Set all items inactive
    this.menuItems.forEach((item) => {
      item.isActive = false
    })

    // Set clicked item active
    this.menuItems[index].isActive = true
    this.currentPage = this.menuItems[index].label

    console.log(`Selected menu item: ${this.menuItems[index].label}`)
    this.navigateUser(this.menuItems[index].label)
    // If it has dropdown, toggle it
    if (this.menuItems[index].hasDropdown) {
      this.toggleDropdown(index, event)
    } else {
      // Close all dropdowns if selecting non-dropdown item
      this.menuItems.forEach((item) => {
        item.isOpen = false
      })
    }

    // Close mobile menu if open
    this.isMobileMenuOpen = false
  }

  // Select dropdown item
  selectDropdownItem(parentIndex: number, item: DropdownItem, event?: Event) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    console.log(`Selected dropdown item: ${item.label} from ${this.menuItems[parentIndex].label}`)
    
    this.navbarClickService.setLinkData(this.menuItems[parentIndex].label);
    this.navbarClickService.setSubLinkData(item.label);
    
  }

  // Theme toggle functionality
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode
    this.updateTheme()
    localStorage.setItem("theme", this.isDarkMode ? "dark" : "light")
    console.log(`Theme switched to: ${this.isDarkMode ? "dark" : "light"}`)
  }

  private updateTheme() {
    if (this.isDarkMode) {
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.remove("dark-theme")
    }
  }

  // Search functionality
  onSearch(event: any) {
    this.searchQuery = event.target.value
    console.log("Search query:", this.searchQuery)

    // Add your search logic here
    if (this.searchQuery.length > 0) {
      console.log("Searching for:", this.searchQuery)
      // Implement search functionality
    }
  }

  // Clear search
  clearSearch() {
    this.searchQuery = ""
    console.log("Search cleared")
  }

  // Sidebar toggle
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed
    console.log(`Sidebar ${this.isSidebarCollapsed ? "collapsed" : "expanded"}`)
  }

  // Mobile menu toggle
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
    console.log(`Mobile menu ${this.isMobileMenuOpen ? "opened" : "closed"}`)
  }

  // Close mobile menu when clicking outside
  closeMobileMenu() {
    this.isMobileMenuOpen = false
  }

  // Get current date
  getCurrentDate(): string {
    const now = new Date()
    return now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  private navigateUser(label: string) {
    console.log(label)
    if (label.toString() == 'Home') {
      this.router.navigate(['./admin']);
    }
    if (label.toString() == 'Hotel') {
      this.router.navigate(['../admin/hotel-verified']);
    }
    if (label.toString() == 'Ngo') {
      this.router.navigate(['../admin/ngo-verified']);
    }
    if (label.toString() == ' History') {
      this.router.navigate(['../admin/history']);
    }
    if (label.toString() == 'Available Meal') {
      this.router.navigate(['../admin/available-meal']);
    }
  }
}
