import { Component, type OnInit } from "@angular/core"
import { trigger, transition, style, animate } from "@angular/animations"
import { Router } from "@angular/router"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  photo?: string
  icon: string
  linkedin?: string
  twitter?: string
}
interface ImpactStat {
  icon: string
  value: string
  label: string
  description: string
  gradient: string
}

interface ProcessStep {
  icon: string
  title: string
  description: string
}

interface PartnerCategory {
  name: string
  icon: string
  partners: { name: string; icon: string }[]
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger("fadeInUp", [
      transition(":enter", [
        style({ transform: "translateY(30px)", opacity: 0 }),
        animate("0.6s ease-out", style({ transform: "translateY(0)", opacity: 1 })),
      ]),
    ]),
    trigger("countUp", [
      transition(":enter", [
        style({ transform: "scale(0.8)", opacity: 0 }),
        animate("0.8s ease-out", style({ transform: "scale(1)", opacity: 1 })),
      ]),
    ]),
  ],
})
export class AboutUsComponent {
  newsletterEmail = ""
  isSubscribing = false

  stats = {
    mealsServed: "50K+",
    partnersJoined: "200+",
    citiesCovered: "15+",
  }

  floatingIcons = [
    { class: "fas fa-heart" },
    { class: "fas fa-utensils" },
    { class: "fas fa-hands-helping" },
    { class: "fas fa-leaf" },
    { class: "fas fa-globe" },
    { class: "fas fa-users" },
    { class: "fas fa-seedling" },
    { class: "fas fa-handshake" },
  ]

  timeline: TimelineItem[] = [
    {
      year: "2022",
      title: "The Idea",
      description: "Founded with a simple yet powerful vision: connect surplus food with those who need it most.",
    },
    {
      year: "2023",
      title: "First Partnerships",
      description: "Partnered with 10 local NGOs and 25 restaurants to begin our food rescue mission.",
    },
    {
      year: "2024",
      title: "Rapid Growth",
      description: "Expanded to 15 cities, serving over 50,000 meals and preventing tons of food waste.",
    },
    {
      year: "Future",
      title: "Global Impact",
      description: "Working towards nationwide coverage and international expansion to end food waste globally.",
    },
  ]

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Prathmesh N S",
      role: "CEO & Founder",
      bio: "Visionary leader driving innovative solutions for community well-being and sustainable growth, with a decade of impact-driven experience.",
      photo: "assets/company-holders/me.png", // Add your image path here
      icon: "fas fa-user-tie",
      linkedin: "prathmesh_n_s",
      twitter: "prathmeshns",
    },
    {
      id: 2,
      name: "Darshan Jadhav",
      role: "CTO",
      bio: "Tech enthusiast focused on building scalable solutions for food accessibility.",
      photo: "assets/company-holders/darshan.png", // Add your image path here
      icon: "fas fa-laptop-code",
      linkedin: "michael-chen",
      twitter: "michaelchen",
    },
    {
      id: 3,
      name: "Vaishnavi Pawar",
      role: "Head of Operations",
      bio: "Operations expert ensuring smooth delivery of nutritious meals to communities.",
      photo: "assets/company-holders/vaishnavi.png", // Add your image path here
      icon: "fas fa-cogs",
      linkedin: "emily-rodriguez",
      twitter: "emilyrodriguez",
    },
    {
      id: 4,
      name: "Rushikesh Khandare",
      role: "Designer",
      bio: "Creative designer passionate about crafting visually engaging and user-friendly experiences.",
      photo: "assets/company-holders/rushi.png", // Add your image path here
      icon: "fas fa-apple-alt",
      linkedin: "david-kim",
      twitter: "davidkim",
    },
    {
      id: 5,
      name: "Pratiksha Sonar",
      role: "Cloud Support",
      bio: "Dedicated cloud support specialist focused on ensuring seamless cloud operations and reliable technical assistance.",
      photo: "assets/company-holders/pratiksha.png", // Add your image path here
      icon: "fas fa-apple-alt",
      linkedin: "david-kim",
      twitter: "davidkim",
    },
    {
      id: 6,
      name: "Soham Sonawane",
      role: "Developer",
      bio: "Passionate developer committed to building efficient, scalable, and user-centric software solutions.",
      photo: "assets/company-holders/soham.png", // Add your image path here
      icon: "fas fa-apple-alt",
      linkedin: "david-kim",
      twitter: "davidkim",
    },
  ]


  impactStats: ImpactStat[] = [
    {
      icon: "fas fa-utensils",
      value: "50,000+",
      label: "Meals Served",
      description: "Nutritious meals delivered to those in need",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: "fas fa-leaf",
      value: "25 Tons",
      label: "Food Waste Prevented",
      description: "Food saved from going to landfills",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
    },
    {
      icon: "fas fa-building",
      value: "200+",
      label: "Partner Restaurants",
      description: "Hotels and restaurants actively donating",
      gradient: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)",
    },
    {
      icon: "fas fa-hands-helping",
      value: "75+",
      label: "NGO Partners",
      description: "Verified NGOs in our network",
      gradient: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)",
    },
    {
      icon: "fas fa-map-marker-alt",
      value: "15",
      label: "Cities Covered",
      description: "Active operations across India",
      gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
    },
    {
      icon: "fas fa-users",
      value: "10,000+",
      label: "Lives Impacted",
      description: "Individuals benefited from our services",
      gradient: "linear-gradient(135deg, #E91E63 0%, #C2185B 100%)",
    },
  ]

  processSteps: ProcessStep[] = [
    {
      icon: "fas fa-mobile-alt",
      title: "Register & Post",
      description: "Restaurants and hotels register on our platform and post available surplus food",
    },
    {
      icon: "fas fa-bell",
      title: "Instant Notification",
      description: "Nearby NGOs receive real-time notifications about available food donations",
    },
    {
      icon: "fas fa-handshake",
      title: "Quick Matching",
      description: "Our algorithm matches donors with the most suitable NGOs based on location and capacity",
    },
    {
      icon: "fas fa-truck",
      title: "Swift Collection",
      description: "NGOs collect the food within 2-4 hours, ensuring freshness and safety",
    },
    {
      icon: "fas fa-heart",
      title: "Community Impact",
      description: "Food reaches those in need, creating positive impact in local communities",
    },
  ]

  partnerCategories: PartnerCategory[] = [
    {
      name: "Restaurant Partners",
      icon: "fas fa-utensils",
      partners: [
        { name: "Blue Owens", icon: "fas fa-store" },
        { name: "Spice Garden", icon: "fas fa-pepper-hot" },
        { name: "Urban Cafe", icon: "fas fa-coffee" },
        { name: "Royal Dine", icon: "fas fa-crown" },
      ],
    },
    {
      name: "Hotel Partners",
      icon: "fas fa-hotel",
      partners: [
        { name: "Grand Plaza", icon: "fas fa-building" },
        { name: "City Inn", icon: "fas fa-bed" },
        { name: "Comfort Stay", icon: "fas fa-home" },
        { name: "Elite Hotels", icon: "fas fa-star" },
      ],
    },
    {
      name: "NGO Partners",
      icon: "fas fa-hands-helping",
      partners: [
        { name: "Feed India", icon: "fas fa-heart" },
        { name: "Hope Foundation", icon: "fas fa-dove" },
        { name: "Care Society", icon: "fas fa-users" },
        { name: "Seva Trust", icon: "fas fa-hands" },
      ],
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization
  }

  navigateToRegister(type: string): void {
    // Navigate to registration page based on type
    console.log(`Navigating to ${type} registration`)
    if (type === 'ngo') {
      this.router.navigate(['/register'])
    }
    if (type === 'donor') {
      this.router.navigate(['./register/hotel'])
    }

  }

  subscribeNewsletter(): void {
    if (this.isSubscribing) return

    this.isSubscribing = true

    // Simulate newsletter subscription
    setTimeout(() => {
      this.isSubscribing = false
      this.newsletterEmail = ""
      alert("Thank you for subscribing to our newsletter!")
    }, 2000)
  }
  openSocialProfile(memberName: string, platform: string) {
    const member = this.teamMembers.find((m) => m.name === memberName)
    if (!member) return

    let url = ""
    switch (platform) {
      case "linkedin":
        url = `https://linkedin.com/in/${member.linkedin}`
        break
      case "twitter":
        url = `https://twitter.com/${member.twitter}`
        break
    }

    if (url) {
      window.open(url, "_blank")
    }
  }

}