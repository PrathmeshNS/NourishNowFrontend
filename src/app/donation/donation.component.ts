import { Component, type OnInit } from "@angular/core"
import { trigger, transition, style, animate, keyframes } from "@angular/animations"

interface DonationData {
  type: "one-time" | "monthly"
  amount: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  paymentMethod: string
  isAnonymous: boolean
  sendUpdates: boolean
  agreeTerms: boolean
}

interface PredefinedAmount {
  value: number
  impact: string
}

interface PaymentMethod {
  id: string
  name: string
  icon: string
  badges?: string[]
}

interface DonationReason {
  icon: string
  title: string
  description: string
}

interface ImpactStory {
  title: string
  description: string
  impact: string
  icon: string
}

interface FundAllocation {
  label: string
  percentage: number
  color: string
}

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  animations: [
    trigger("fadeInUp", [
      transition(":enter", [
        style({ transform: "translateY(30px)", opacity: 0 }),
        animate("0.6s ease-out", style({ transform: "translateY(0)", opacity: 1 })),
      ]),
    ]),
    trigger("bounceIn", [
      transition(":enter", [
        animate(
          "0.8s ease-in-out",
          keyframes([
            style({ transform: "scale(0)", opacity: 0, offset: 0 }),
            style({ transform: "scale(1.1)", opacity: 0.8, offset: 0.6 }),
            style({ transform: "scale(1)", opacity: 1, offset: 1 }),
          ]),
        ),
      ]),
    ]),
  ]
})
export class DonationComponent {
  donationData: DonationData = {
    type: "one-time",
    amount: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "",
    isAnonymous: false,
    sendUpdates: true,
    agreeTerms: false,
  }

  customAmountValue: number | null = null
  isProcessing = false
  showSuccessModal = false

  floatingIcons = [
    { class: "fas fa-heart" },
    { class: "fas fa-hand-holding-heart" },
    { class: "fas fa-donate" },
    { class: "fas fa-coins" },
    { class: "fas fa-gift" },
    { class: "fas fa-hands-helping" },
    { class: "fas fa-seedling" },
    { class: "fas fa-users" },
  ]

  predefinedAmounts: PredefinedAmount[] = [
    { value: 50, impact: "Feeds 5 people" },
    { value: 100, impact: "Feeds 10 people" },
    { value: 200, impact: "Feeds a family" },
    { value: 500, impact: "Feeds a shelter" },
    { value: 1000, impact: "Feeds 100 people" },
    { value: 2500, impact: "Monthly food support" },
  ]

  paymentMethods: PaymentMethod[] = [
    {
      id: "upi",
      name: "UPI",
      icon: "fas fa-mobile-alt",
      badges: ["Instant", "Secure"],
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: "fas fa-credit-card",
      badges: ["Visa", "Mastercard"],
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: "fas fa-university",
      badges: ["All Banks"],
    },
    {
      id: "wallet",
      name: "Digital Wallet",
      icon: "fas fa-wallet",
      badges: ["Paytm", "PhonePe"],
    },
  ]

  donationReasons: DonationReason[] = [
    {
      icon: "fas fa-utensils",
      title: "Direct Impact",
      description: "100% of your donation goes directly to feeding people in need",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Verified NGOs",
      description: "We work only with verified and trusted NGO partners",
    },
    {
      icon: "fas fa-chart-line",
      title: "Track Your Impact",
      description: "Get regular updates on how your donation is making a difference",
    },
    {
      icon: "fas fa-certificate",
      title: "Tax Benefits",
      description: "Get 80G tax exemption certificate for your donations",
    },
  ]

  impactStories: ImpactStory[] = [
    {
      title: "Feeding Street Children",
      description:
        "Thanks to donations like yours, we've been able to provide daily meals to 50+ street children in Mumbai.",
      impact: "1,500 meals served this month",
      icon: "fas fa-child",
    },
    {
      title: "Supporting Elderly Care",
      description:
        "Your contributions help us deliver nutritious meals to elderly people in old age homes across the city.",
      impact: "800 elderly people fed daily",
      icon: "fas fa-user-friends",
    },
    {
      title: "Disaster Relief Support",
      description:
        "During recent floods, donations enabled us to provide emergency food supplies to affected families.",
      impact: "2,000 families supported",
      icon: "fas fa-hands-helping",
    },
  ]

  fundAllocation: FundAllocation[] = [
    { label: "Food Distribution", percentage: 75, color: "#4CAF50" },
    { label: "Operations & Logistics", percentage: 15, color: "#2196F3" },
    { label: "Technology & Platform", percentage: 7, color: "#FF9800" },
    { label: "Administrative Costs", percentage: 3, color: "#9C27B0" },
  ]

  constructor() { }

  ngOnInit(): void {
    // Component initialization
  }

  get processingFee(): number {
    if (!this.donationData.amount) return 0
    return Math.round(this.donationData.amount * 0.02) // 2% processing fee
  }

  get totalAmount(): number {
    return (this.donationData.amount || 0) + this.processingFee
  }

  selectDonationType(type: "one-time" | "monthly"): void {
    this.donationData.type = type
  }

  selectAmount(amount: number): void {
    this.donationData.amount = amount
    this.customAmountValue = null
  }

  onCustomAmountChange(): void {
    if (this.customAmountValue && this.customAmountValue >= 10) {
      this.donationData.amount = this.customAmountValue
    }
  }

  selectPaymentMethod(methodId: string): void {
    this.donationData.paymentMethod = methodId
  }

  processDonation(): void {
    if (this.isProcessing) return

    this.isProcessing = true

    // Simulate payment processing
    setTimeout(() => {
      this.isProcessing = false
      this.showSuccessModal = true
    }, 3000)
  }

  calculateMealsFromDonation(): number {
    return Math.floor((this.donationData.amount || 0) / 10) // ₹10 per meal
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false
    // Reset form or navigate to home
    this.resetForm()
  }

  shareSuccess(): void {
    const message = `I just donated ₹${this.donationData.amount} to NourishNow to help feed people in need! Join me in making a difference. #NourishNow #EndHunger`

    if (navigator.share) {
      navigator.share({
        title: "I made a donation to NourishNow!",
        text: message,
        url: window.location.origin,
      })
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(message)
      alert("Message copied to clipboard! Share it on your social media.")
    }
  }

  resetForm(): void {
    this.donationData = {
      type: "one-time",
      amount: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "",
      isAnonymous: false,
      sendUpdates: true,
      agreeTerms: false,
    }
    this.customAmountValue = null
  }
}
