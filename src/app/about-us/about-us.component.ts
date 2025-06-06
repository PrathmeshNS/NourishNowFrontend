import { Component, type OnInit } from "@angular/core"
import { trigger, transition, style, animate } from "@angular/animations"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TeamMember {
  name: string
  role: string
  bio: string
  icon: string
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
      name: "Priya Sharma",
      role: "Founder & CEO",
      bio: "Passionate about social impact and technology. 10+ years in nonprofit sector.",
      icon: "fas fa-user-tie",
    },
    {
      name: "Rahul Patel",
      role: "CTO",
      bio: "Tech enthusiast building scalable solutions for social good. Former software architect.",
      icon: "fas fa-laptop-code",
    },
    {
      name: "Anita Desai",
      role: "Head of Partnerships",
      bio: "Expert in building meaningful relationships with NGOs and food industry partners.",
      icon: "fas fa-handshake",
    },
    {
      name: "Vikram Singh",
      role: "Operations Manager",
      bio: "Ensures smooth food collection and distribution operations across all cities.",
      icon: "fas fa-cogs",
    },
    {
      name: "Meera Joshi",
      role: "Community Manager",
      bio: "Builds and nurtures our community of donors, volunteers, and beneficiaries.",
      icon: "fas fa-users",
    },
    {
      name: "Arjun Kumar",
      role: "Data Analyst",
      bio: "Tracks impact metrics and optimizes food distribution using data-driven insights.",
      icon: "fas fa-chart-line",
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

  constructor() { }

  ngOnInit(): void {
    // Component initialization
  }

  navigateToRegister(type: string): void {
    // Navigate to registration page based on type
    console.log(`Navigating to ${type} registration`)
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

  openSocialProfile(name: string, platform: string): void {
    // Open social media profile
    console.log(`Opening ${platform} profile for ${name}`)
  }
}
