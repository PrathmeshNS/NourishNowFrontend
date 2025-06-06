import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        animate('0.8s ease-in-out', keyframes([
          style({ transform: 'scale(0)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1.1)', opacity: 0.8, offset: 0.6 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ContactUsComponent {

  formData: ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  email: string = "ps@gmail.com";
  isSubmitting: boolean = false;
  showSuccessModal: boolean = false;

  floatingIcons = [
    { class: 'fas fa-envelope' },
    { class: 'fas fa-phone' },
    { class: 'fas fa-map-marker-alt' },
    { class: 'fas fa-comments' },
    { class: 'fas fa-handshake' },
    { class: 'fas fa-heart' }
  ];

  faqs: FAQ[] = [
    {
      question: 'How can I register my NGO with NourishNow?',
      answer: 'You can register your NGO by clicking on the "Register" dropdown in the navigation menu and selecting "NGO Register". Fill out the required information and our team will verify your organization within 2-3 business days.',
      isOpen: false
    },
    {
      question: 'What types of food donations do you accept?',
      answer: 'We accept all types of fresh, cooked food that is safe for consumption. This includes meals from restaurants, hotels, catering services, and home-cooked food. All donations must meet basic food safety standards.',
      isOpen: false
    },
    {
      question: 'How quickly can food be collected after donation?',
      answer: 'Our partner NGOs typically collect donated food within 2-4 hours of notification. For urgent donations, we have a priority pickup system that can collect food within 1 hour in major cities.',
      isOpen: false
    },
    {
      question: 'Is there any cost involved in using NourishNow?',
      answer: 'No, NourishNow is completely free for both food donors and NGOs. Our platform is supported by grants and partnerships to ensure that food reaches those in need without any barriers.',
      isOpen: false
    },
    {
      question: 'How do you ensure food safety and quality?',
      answer: 'All our partner NGOs are trained in food safety protocols. We have guidelines for food handling, storage, and distribution. Additionally, we conduct regular audits and provide training sessions to maintain high standards.',
      isOpen: false
    },
    {
      question: 'Can individuals donate food, or only businesses?',
      answer: 'Both individuals and businesses can donate food through NourishNow. Whether you\'re a restaurant with excess food or an individual with home-cooked meals, every contribution makes a difference.',
      isOpen: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Component initialization
  }

  submitForm(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessModal = true;
      this.resetForm();
    }, 2000);
  }

  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }

  toggleFAQ(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  openEmailClient(): void {
    window.location.href = 'mailto:support@nourishnow.com?subject=Contact%20Inquiry';
  }

  makeCall(): void {
    window.location.href = 'tel:+919876543210';
  }

  openMaps(): void {
    const address = '123 Charity Street, Gandhi Nagar, Nashik, Maharashtra 422305';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  }

  openSocialMedia(platform: string): void {
    const urls = {
      facebook: 'https://facebook.com/nourishnow',
      twitter: 'https://twitter.com/nourishnow',
      instagram: 'https://instagram.com/nourishnow',
      linkedin: 'https://linkedin.com/company/nourishnow'
    };

    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  }
}
