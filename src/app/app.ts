import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  SPECIAL_DISHES,
  FULL_MENU,
  GALLERY_ITEMS,
  REVIEWS,
  WHY_CHOOSE_US,
  RESTAURANT_INFO
} from './data/restaurant.data';
import { MenuItem, GalleryItem, CartItem, ReservationDetails } from './models/restaurant.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  // Data signals
  readonly specialDishes = signal<MenuItem[]>(SPECIAL_DISHES);
  readonly allMenuItems = signal<MenuItem[]>(FULL_MENU);
  readonly galleryItems = signal<GalleryItem[]>(GALLERY_ITEMS);
  readonly reviews = signal(REVIEWS);
  readonly features = signal(WHY_CHOOSE_US);
  readonly restaurantInfo = RESTAURANT_INFO;

  // Navigation & UI state
  readonly isScrolled = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');
  readonly mobileMenuOpen = signal<boolean>(false);
  readonly selectedCategory = signal<string>('all');
  readonly menuSearchQuery = signal<string>('');

  // Modals & Drawers
  readonly activeGalleryItem = signal<GalleryItem | null>(null);
  readonly storyModalOpen = signal<boolean>(false);
  readonly orderDrawerOpen = signal<boolean>(false);
  readonly quickOrderItem = signal<MenuItem | null>(null);
  readonly quickOrderQuantity = signal<number>(1);
  readonly quickOrderNotes = signal<string>('');
  
  // Cart & Orders
  readonly cartItems = signal<CartItem[]>([]);
  readonly orderSuccessNotice = signal<string | null>(null);

  // Reservation State
  readonly reservationSubmitted = signal<boolean>(false);
  readonly reservationSuccessData = signal<ReservationDetails | null>(null);
  readonly isSubmittingReservation = signal<boolean>(false);

  // Contact / Message State
  readonly contactSuccessNotice = signal<string | null>(null);

  // Reactive Forms
  readonly reservationForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(9)] }),
    date: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    time: new FormControl<string>('19:30', { nonNullable: true, validators: [Validators.required] }),
    guests: new FormControl<number>(2, { nonNullable: true, validators: [Validators.required, Validators.min(1), Validators.max(30)] }),
    specialRequest: new FormControl<string>('', { nonNullable: true })
  });

  readonly contactForm = new FormGroup({
    contactName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    contactEmail: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    contactSubject: new FormControl<string>('General Inquiry', { nonNullable: true }),
    contactMessage: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] })
  });

  // Filtered Menu Items
  readonly filteredMenuItems = computed(() => {
    const category = this.selectedCategory();
    const query = this.menuSearchQuery().toLowerCase().trim();
    return this.allMenuItems().filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      const matchesQuery = !query ||
        item.name.toLowerCase().includes(query) ||
        (item.turkishName && item.turkishName.toLowerCase().includes(query)) ||
        item.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  });

  // Header dynamic classes
  readonly headerClass = computed(() => {
    return this.isScrolled()
      ? 'fixed top-0 left-0 right-0 z-40 bg-[#0f0c0a]/95 backdrop-blur-md shadow-2xl border-b border-[#d4af37]/20 transition-all duration-300'
      : 'fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#0f0c0a]/90 to-transparent transition-all duration-300';
  });

  getNavLinkClass(section: string): string {
    const isActive = this.activeSection() === section || (section === 'menu' && this.activeSection() === 'special');
    return isActive
      ? 'hover:text-[#d4af37] transition-colors cursor-pointer relative py-1 text-[#d4af37] font-semibold'
      : 'hover:text-[#d4af37] transition-colors cursor-pointer relative py-1 text-[#dcd6cc]';
  }

  getCategoryButtonClass(catId: string): string {
    const isSelected = this.selectedCategory() === catId;
    return isSelected
      ? 'px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border bg-[#d4af37] text-[#0f0c0a] border-[#d4af37] shadow-lg'
      : 'px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border bg-[#1e1916] text-[#f4efe6] border-[#332b26] hover:border-[#d4af37]/50';
  }

  // Cart Totals
  readonly cartTotalCount = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + item.quantity, 0);
  });

  readonly cartTotalPrice = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  });

  // Categories list
  readonly categories = [
    { id: 'all', label: 'All Menu', icon: 'restaurant_menu' },
    { id: 'starters', label: 'Starters', icon: 'tapas' },
    { id: 'mains', label: 'Main Course', icon: 'outdoor_grill' },
    { id: 'burgers', label: 'Burgers', icon: 'lunch_dining' },
    { id: 'pizza', label: 'Pizza & Pide', icon: 'local_pizza' },
    { id: 'desserts', label: 'Desserts', icon: 'icecream' },
    { id: 'drinks', label: 'Drinks', icon: 'local_cafe' }
  ];

  ngOnInit(): void {
    if (this.isBrowser) {
      // Set default reservation date to today or tomorrow
      const today = new Date();
      const dateStr = today.toISOString().split('T')[0];
      this.reservationForm.patchValue({ date: dateStr });

      // Window scroll listener for sticky nav & back-to-top
      window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    }
  }

  private handleScroll(): void {
    if (!this.isBrowser) return;
    const scrollPos = window.scrollY;
    this.isScrolled.set(scrollPos > 50);

    // Active section detection
    const sections = ['hero', 'about', 'special', 'menu', 'why-us', 'gallery', 'reviews', 'reservation', 'contact'];
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  // Smooth scroll
  scrollToSection(sectionId: string): void {
    this.mobileMenuOpen.set(false);
    if (!this.isBrowser) return;
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && !target.dataset['hasFailed']) {
      target.dataset['hasFailed'] = 'true';
      target.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80';
    }
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  updateSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.menuSearchQuery.set(input.value);
  }

  // Quick Order & Cart Flow
  openQuickOrder(item: MenuItem): void {
    this.quickOrderItem.set(item);
    this.quickOrderQuantity.set(1);
    this.quickOrderNotes.set('');
  }

  closeQuickOrder(): void {
    this.quickOrderItem.set(null);
  }

  adjustQuantity(delta: number): void {
    this.quickOrderQuantity.update((q) => Math.max(1, q + delta));
  }

  updateNotes(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.quickOrderNotes.set(input.value);
  }

  confirmAddToCart(): void {
    const item = this.quickOrderItem();
    if (!item) return;

    const qty = this.quickOrderQuantity();
    const notes = this.quickOrderNotes();

    this.cartItems.update((cart) => {
      const existingIndex = cart.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...cart];
        updated[existingIndex].quantity += qty;
        if (notes) {
          updated[existingIndex].specialInstructions = notes;
        }
        return updated;
      }
      return [...cart, { item, quantity: qty, specialInstructions: notes }];
    });

    this.closeQuickOrder();
    this.orderDrawerOpen.set(true);
  }

  toggleCartDrawer(): void {
    this.orderDrawerOpen.update((v) => !v);
  }

  updateCartItemQty(index: number, delta: number): void {
    this.cartItems.update((cart) => {
      const updated = [...cart];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index] = { ...updated[index], quantity: newQty };
      return updated;
    });
  }

  removeCartItem(index: number): void {
    this.cartItems.update((cart) => cart.filter((_, i) => i !== index));
  }

  placeDineInOrder(): void {
    if (this.cartItems().length === 0) return;
    const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
    this.orderSuccessNotice.set(`Your order (#${orderId}) for PKR ${this.cartTotalPrice().toLocaleString()} has been received! Our kitchen is preparing it fresh.`);
    this.cartItems.set([]);
    this.orderDrawerOpen.set(false);

    // Auto dismiss after 6s
    setTimeout(() => {
      this.orderSuccessNotice.set(null);
    }, 6000);
  }

  dismissOrderNotice(): void {
    this.orderSuccessNotice.set(null);
  }

  // Reservation Flow
  onSubmitReservation(): void {
    if (this.reservationForm.invalid) {
      this.reservationForm.markAllAsTouched();
      return;
    }

    this.isSubmittingReservation.set(true);

    // Simulate verified booking processing
    setTimeout(() => {
      const formVal = this.reservationForm.getRawValue();
      const bookingRef = 'TR-' + Math.floor(10000 + Math.random() * 90000);
      
      this.reservationSuccessData.set({
        ...formVal,
        bookingReference: bookingRef
      });
      this.reservationSubmitted.set(true);
      this.isSubmittingReservation.set(false);
    }, 800);
  }

  resetReservation(): void {
    this.reservationSubmitted.set(false);
    this.reservationSuccessData.set(null);
    this.reservationForm.reset({
      name: '',
      email: '',
      phone: '',
      date: new Date().toISOString().split('T')[0],
      time: '19:30',
      guests: 2,
      specialRequest: ''
    });
  }

  // Contact Form
  onSubmitContact(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const name = this.contactForm.controls.contactName.value;
    this.contactSuccessNotice.set(`Thank you, ${name}! Your inquiry has been sent to our guest relations team. We will contact you shortly.`);
    this.contactForm.reset({
      contactName: '',
      contactEmail: '',
      contactSubject: 'General Inquiry',
      contactMessage: ''
    });

    setTimeout(() => {
      this.contactSuccessNotice.set(null);
    }, 6000);
  }

  dismissContactNotice(): void {
    this.contactSuccessNotice.set(null);
  }

  // Gallery Lightbox
  openLightbox(item: GalleryItem): void {
    this.activeGalleryItem.set(item);
  }

  closeLightbox(): void {
    this.activeGalleryItem.set(null);
  }

  navigateGallery(direction: number): void {
    const current = this.activeGalleryItem();
    if (!current) return;
    const items = this.galleryItems();
    const currentIndex = items.findIndex((i) => i.id === current.id);
    const newIndex = (currentIndex + direction + items.length) % items.length;
    this.activeGalleryItem.set(items[newIndex]);
  }

  // Story Modal
  openStoryModal(): void {
    this.storyModalOpen.set(true);
  }

  closeStoryModal(): void {
    this.storyModalOpen.set(false);
  }
}
