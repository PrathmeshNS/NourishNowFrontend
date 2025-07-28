import { Component,type OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser"

interface UploadResponse {
  success: boolean
  message: string
  imageUrl?: string
}

@Component({
  selector: 'app-profile-upload-screen',
  templateUrl: './profile-upload-screen.component.html',
  styleUrls: ['./profile-upload-screen.component.css']
})
export class ProfileUploadScreenComponent implements OnInit{
  selectedFile: File | null = null
  previewUrl: SafeUrl | null = null
  isUploading = false
  uploadProgress = 0
  errorMessage = ""
  successMessage = ""
  currentProfileImage = ""

  // File validation settings
  maxFileSize: number = 5 * 1024 * 1024 // 5MB
  allowedTypes: string[] = ["image/jpeg", "image/jpg", "image/png"];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadCurrentProfileImage()
  }

  loadCurrentProfileImage(): void {
    // Load existing profile image from your backend/service
    // This would typically come from your user service
    this.currentProfileImage = "/assets/default-avatar.png"
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      const file = input.files[0]

      // Reset previous messages
      this.errorMessage = ""
      this.successMessage = ""

      // Validate file
      if (this.validateFile(file)) {
        this.selectedFile = file
        this.createPreview(file)
      }
    }
  }

  validateFile(file: File): boolean {
    // Check file type
    if (!this.allowedTypes.includes(file.type)) {
      this.errorMessage = "Please select a valid image file (JPEG, PNG, GIF, or WebP)"
      return false
    }

    // Check file size
    if (file.size > this.maxFileSize) {
      this.errorMessage = "File size must be less than 5MB"
      return false
    }

    return true
  }

  createPreview(file: File): void {
    const reader = new FileReader()
    reader.onload = (e: any) => {
      this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result)
    }
    reader.readAsDataURL(file)
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault()
    event.stopPropagation()
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault()
    event.stopPropagation()
  }

  onDrop(event: DragEvent): void {
    event.preventDefault()
    event.stopPropagation()

    const files = event.dataTransfer?.files
    if (files && files.length > 0) {
      const file = files[0]

      // Reset previous messages
      this.errorMessage = ""
      this.successMessage = ""

      if (this.validateFile(file)) {
        this.selectedFile = file
        this.createPreview(file)
      }
    }
  }

  uploadImage(): void {
    if (!this.selectedFile) {
      this.errorMessage = "Please select an image first"
      return
    }

    this.isUploading = true
    this.uploadProgress = 0
    this.errorMessage = ""
    this.successMessage = ""

    // Create FormData for file upload
    const formData = new FormData()
    formData.append("profileImage", this.selectedFile)
    formData.append("userId", this.getCurrentUserId()) // You'll need to implement this

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      this.uploadProgress += 10
      if (this.uploadProgress >= 90) {
        clearInterval(progressInterval)
      }
    }, 200)

    // Call your upload service
    this.uploadToBackend(formData)
      .then((response: UploadResponse) => {
        clearInterval(progressInterval)
        this.uploadProgress = 100

        setTimeout(() => {
          this.isUploading = false
          if (response.success) {
            this.successMessage = response.message
            this.currentProfileImage = response.imageUrl || this.currentProfileImage
            this.resetForm()
          } else {
            this.errorMessage = response.message
          }
        }, 500)
      })
      .catch((error) => {
        clearInterval(progressInterval)
        this.isUploading = false
        this.errorMessage = "Upload failed. Please try again."
        console.error("Upload error:", error)
      })
  }

  private async uploadToBackend(formData: FormData): Promise<UploadResponse> {
    // Replace this with your actual backend API call
    // Example using fetch:
    console.log(this.selectedFile)
    try {
      const response = await fetch("/api/upload-profile-image", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${this.getAuthToken()}`, // Add your auth token
        },
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      return await response.json()
    } catch (error) {
      throw error
    }
  }

  private getCurrentUserId(): string {
    // Implement this method to get current user ID
    return "user-123" // Placeholder
  }

  private getAuthToken(): string {
    // Implement this method to get auth token
    return localStorage.getItem("authToken") || ""
  }

  removeImage(): void {
    this.selectedFile = null
    this.previewUrl = null
    this.errorMessage = ""
    this.successMessage = ""
  }

  resetForm(): void {
    this.selectedFile = null
    this.previewUrl = null
    this.uploadProgress = 0
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement
    fileInput.click()
  }
}