<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <span class="text-white font-bold text-sm">LAC</span>
            </div>
            <span class="text-xl font-bold text-gray-800 hidden sm:block">Lanka Agro Consultancy</span>
            <span class="text-lg font-bold text-gray-800 sm:hidden">LAC</span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-4">
            <button @click="currentPage = 'home'" :class="navLinkClass('home')">Home</button>
            <button @click="currentPage = 'services'" :class="navLinkClass('services')">Services</button>
            <button @click="currentPage = 'about'" :class="navLinkClass('about')">About</button>
            <button @click="currentPage = 'blog'" :class="navLinkClass('blog')">Tips</button>
            <button @click="currentPage = 'contact'" :class="navLinkClass('contact')">Contact</button>
            <button @click="currentPage = 'booking'" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">Book Now</button>
          </div>
          
          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-700">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t py-2">
          <button @click="setPage('home')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50">Home</button>
          <button @click="setPage('services')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50">Services</button>
          <button @click="setPage('about')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50">About</button>
          <button @click="setPage('blog')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50">Tips</button>
          <button @click="setPage('contact')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50">Contact</button>
          <button @click="setPage('booking')" class="block w-full text-left px-4 py-2 bg-green-600 text-white mx-4 rounded-md mt-2">Book Now</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <!-- Home Page -->
      <div v-if="currentPage === 'home'">
        <!-- Hero Section -->
        <section class="bg-gradient-to-br from-green-50 to-green-100 py-20">
          <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Grow your own food.<br>
              <span class="text-green-600">We'll guide you.</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your urban space into a thriving garden with expert guidance from Lanka Agro Consultancy. 
              We help city dwellers in Sri Lanka grow fresh, healthy food at home.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button @click="currentPage = 'booking'" class="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                Book a Free Consultation
              </button>
              <button @click="currentPage = 'services'" class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
                Our Services
              </button>
            </div>
          </div>
        </section>

        <!-- Services Preview -->
        <section class="py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">How We Help You Grow</h2>
              <p class="text-lg text-gray-600">Comprehensive solutions for urban farming success</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Urban Garden Setup</h3>
                <p class="text-gray-600">Complete garden design and setup for small spaces</p>
              </div>
              <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Hydroponics</h3>
                <p class="text-gray-600">Modern soilless growing systems for maximum yield</p>
              </div>
              <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Monthly Plans</h3>
                <p class="text-gray-600">Ongoing support and seasonal growing guidance</p>
              </div>
              <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Workshops</h3>
                <p class="text-gray-600">Online and in-person learning sessions</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-green-600 py-16">
          <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Growing?</h2>
            <p class="text-xl text-green-100 mb-8">Join hundreds of urban gardeners across Sri Lanka</p>
            <button @click="currentPage = 'contact'" class="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </div>

      <!-- Services Page -->
      <div v-if="currentPage === 'services'" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p class="text-xl text-gray-600">Comprehensive solutions for your urban farming journey</p>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Urban Garden Setup</h3>
              </div>
              <p class="text-gray-600 mb-4">Transform any urban space into a productive garden. We design and set up gardens for balconies, rooftops, and small yards.</p>
              <ul class="text-gray-600 space-y-2">
                <li>• Site assessment and planning</li>
                <li>• Container and raised bed systems</li>
                <li>• Soil preparation and plant selection</li>
                <li>• Installation and setup</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Hydroponics Consultation</h3>
              </div>
              <p class="text-gray-600 mb-4">Modern soilless growing systems that maximize yield in minimal space. Perfect for apartments and limited areas.</p>
              <ul class="text-gray-600 space-y-2">
                <li>• System design and selection</li>
                <li>• Nutrient management</li>
                <li>• Equipment sourcing</li>
                <li>• Ongoing technical support</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Monthly Growing Plans</h3>
              </div>
              <p class="text-gray-600 mb-4">Seasonal guidance and ongoing support to ensure your garden thrives year-round with Sri Lankan climate considerations.</p>
              <ul class="text-gray-600 space-y-2">
                <li>• Seasonal planting schedules</li>
                <li>• Pest and disease management</li>
                <li>• Harvest optimization</li>
                <li>• Monthly check-ins</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Online Workshops</h3>
              </div>
              <p class="text-gray-600 mb-4">Interactive learning sessions covering everything from basics to advanced techniques, tailored for Sri Lankan conditions.</p>
              <ul class="text-gray-600 space-y-2">
                <li>• Beginner gardening fundamentals</li>
                <li>• Advanced growing techniques</li>
                <li>• Seasonal workshops</li>
                <li>• Q&A sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- About Page -->
      <div v-if="currentPage === 'about'" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">About Lanka Agro Consultancy</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Rooted in Knowledge, Growing with Purpose</p>
          </div>

          <!-- Mission Section -->
          <div class="mb-16">
            <div class="bg-green-50 rounded-lg p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p class="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                We believe everyone deserves access to fresh, healthy food. Our mission is to empower urban dwellers 
                across Sri Lanka to grow their own food, regardless of space limitations. Through expert guidance, 
                innovative solutions, and ongoing support, we're building a more sustainable and food-secure future.
              </p>
            </div>
          </div>

          <!-- Team Section -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <!-- Founder -->
              <div class="text-center">
                <div class="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-700">IS</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Imantha Sewmina</h3>
                <p class="text-green-600 font-semibold mb-3">Founder & CEO</p>
                <p class="text-gray-600 mb-2">+94-719265520</p>
                <p class="text-gray-600">Agricultural engineer with 8+ years of experience in sustainable farming and urban agriculture solutions.</p>
              </div>

              <!-- Co-Founder 1 -->
              <div class="text-center">
                <div class="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-700">AB</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Awantha Bandara</h3>
                <p class="text-green-600 font-semibold mb-3">Co-Founder & Co-CFO</p>
                <p class="text-gray-600 mb-2">+94-714090757</p>
                <p class="text-gray-600">Business strategist and financial expert passionate about making urban farming accessible to everyone.</p>
              </div>

              <!-- Co-Founder 2 -->
              <div class="text-center">
                <div class="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-700">KT</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Koshitha Tharaka</h3>
                <p class="text-green-600 font-semibold mb-3">Co-Founder & Co-CFO</p>
                <p class="text-gray-600 mb-2">+123-456-7890</p>
                <p class="text-gray-600">Technology and operations specialist focused on innovative growing systems and client success.</p>
              </div>
            </div>
          </div>

          <!-- Story Section -->
          <div class="bg-gray-50 rounded-lg p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div class="max-w-4xl mx-auto">
              <p class="text-lg text-gray-700 mb-4">
                Lanka Agro Consultancy was born from a simple observation: despite Sri Lanka's rich agricultural heritage, 
                many urban residents struggle to access fresh, affordable produce. Our founders, coming from diverse 
                backgrounds in agriculture, business, and technology, saw an opportunity to bridge this gap.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                Starting with small balcony gardens in Colombo, we've helped hundreds of families transform their urban 
                spaces into productive food sources. Our approach combines traditional Sri Lankan farming wisdom with 
                modern techniques like hydroponics and vertical gardening.
              </p>
              <p class="text-lg text-gray-700">
                Today, we're proud to be Sri Lanka's leading urban agriculture consultancy, helping create a more 
                sustainable and food-secure future, one garden at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog/Tips Page -->
      <div v-if="currentPage === 'blog'" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Growing Tips & Guides</h1>
            <p class="text-xl text-gray-600">Expert advice for successful urban farming in Sri Lanka</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Blog Posts -->
            <article v-for="post in blogPosts" :key="post.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div class="h-48 bg-green-200 flex items-center justify-center">
                <svg class="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="post.icon"></path>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ post.title }}</h3>
                <p class="text-gray-600 mb-4">{{ post.description }}</p>
                <div class="flex items-center text-sm text-gray-500">
                  <span>{{ post.readTime }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ post.level }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Contact Page -->
      <div v-if="currentPage === 'contact'" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p class="text-xl text-gray-600">Ready to start your urban farming journey? We're here to help!</p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-gray-50 rounded-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" v-model="form.name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" v-model="form.email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" v-model="form.phone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                </div>
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select id="service" v-model="form.service" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="urban-garden">Urban Garden Setup</option>
                    <option value="hydroponics">Hydroponics Consultation</option>
                    <option value="monthly-plan">Monthly Growing Plan</option>
                    <option value="workshop">Online Workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" v-model="form.message" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" class="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Send Message
                </button>
              </form>
              <div v-if="formSubmitted" class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <!-- Email -->
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Email</h3>
                    <p class="text-gray-600">lankaagroconsultancy@gmail.com</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Phone</h3>
                    <p class="text-gray-600">+94-787926359</p>
                  </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">WhatsApp</h3>
                    <a href="https://wa.me/94787926359" class="text-green-600 hover:text-green-700">Chat with us</a>
                  </div>
                </div>
              </div>

              <!-- Quick Contact -->
              <div class="bg-green-50 rounded-lg p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Need Quick Help?</h3>
                <p class="text-gray-600 mb-4">For immediate assistance or urgent questions, reach out via WhatsApp or call us directly.</p>
                <div class="space-y-2">
                  <a href="https://wa.me/94787926359" class="block w-full bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    WhatsApp Chat
                  </a>
                  <a href="tel:+94787926359" class="block w-full border-2 border-green-600 text-green-600 text-center py-2 px-4 rounded-lg hover:bg-green-50 transition-colors">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Booking Page -->
      <div v-if="currentPage === 'booking'" class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Book Your Consultation</h1>
            <p class="text-xl text-gray-600">Schedule a free consultation to discuss your urban farming goals</p>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
                <ul class="space-y-3 text-gray-600">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    30-minute free consultation call
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Assessment of your space and goals
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Personalized recommendations
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Custom action plan
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    No obligation to purchase
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Available Times</h2>
                <div class="space-y-3">
                  <div class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </div>
                  <div class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Saturday: 10:00 AM - 4:00 PM
                  </div>
                  <div class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Sunday: Closed
                  </div>
                </div>

                <div class="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 class="font-semibold text-green-800 mb-2">Preparation Tips</h3>
                  <ul class="text-sm text-green-700 space-y-1">
                    <li>• Take photos of your available space</li>
                    <li>• Note your budget range</li>
                    <li>• List your preferred crops</li>
                    <li>• Consider your time commitment</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Calendly Embed Placeholder -->
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div class="max-w-md mx-auto">
                <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Calendly Integration</h3>
                <p class="text-gray-600 mb-4">This is where your Calendly booking widget would be embedded. Replace this section with your actual Calendly embed code.</p>
              </div>
            </div>

            <!-- Alternative Contact -->
            <div class="mt-8 text-center">
              <p class="text-gray-600 mb-4">Prefer to book over the phone or WhatsApp?</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/94787926359" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp: +94-787926359
                </a>
                <a href="tel:+94787926359" class="border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
                  Call: +94-787926359
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">LAC</span>
              </div>
              <span class="text-xl font-bold">Lanka Agro Consultancy</span>
            </div>
            <p class="text-gray-400 mb-4">Rooted in Knowledge, Growing with Purpose</p>
            <p class="text-gray-400">Empowering urban dwellers across Sri Lanka to grow their own fresh, healthy food through expert guidance and innovative solutions.</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-400">
              <li><button @click="currentPage = 'home'" class="hover:text-white">Home</button></li>
              <li><button @click="currentPage = 'services'" class="hover:text-white">Services</button></li>
              <li><button @click="currentPage = 'about'" class="hover:text-white">About</button></li>
              <li><button @click="currentPage = 'blog'" class="hover:text-white">Tips & Guides</button></li>
              <li><button @click="currentPage = 'contact'" class="hover:text-white">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
            <ul class="space-y-2 text-gray-400">
              <li>lankaagroconsultancy@gmail.com</li>
              <li>+94-787926359</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lanka Agro Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPage = ref('home')
const mobileMenuOpen = ref(false)
const formSubmitted = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const blogPosts = ref([
  {
    id: 1,
    title: 'How to Start a Garden in Colombo',
    description: 'Complete beginner\'s guide to urban gardening in Sri Lanka\'s capital, including space optimization and plant selection.',
    readTime: '5 min read',
    level: 'Beginner',
    icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z'
  },
  {
    id: 2,
    title: 'Top Crops for Urban Homes',
    description: 'Discover the best vegetables and herbs that thrive in Sri Lankan urban environments and small spaces.',
    readTime: '7 min read',
    level: 'Intermediate',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707'
  },
  {
    id: 3,
    title: 'Monsoon Season Gardening',
    description: 'Essential tips for maintaining your urban garden during Sri Lanka\'s rainy season and protecting your crops.',
    readTime: '6 min read',
    level: 'Seasonal',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 4,
    title: 'DIY Hydroponic Systems',
    description: 'Build your own affordable hydroponic system using locally available materials in Sri Lanka.',
    readTime: '10 min read',
    level: 'Advanced',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    id: 5,
    title: 'Organic Pest Control',
    description: 'Natural and safe methods to protect your urban garden from common pests using Sri Lankan ingredients.',
    readTime: '8 min read',
    level: 'Organic',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 6,
    title: 'Budget-Friendly Garden Setup',
    description: 'Start your urban garden on a budget with creative solutions and locally sourced materials.',
    readTime: '6 min read',
    level: 'Budget',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
  }
])

const navLinkClass = (page) => {
  return currentPage.value === page 
    ? 'text-green-600 font-semibold' 
    : 'text-gray-700 hover:text-green-600 transition-colors'
}

const setPage = (page) => {
  currentPage.value = page
  mobileMenuOpen.value = false
}

const submitForm = () => {
  // Simulate form submission
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  }, 3000)
}
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #16a34a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #15803d;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Focus styles for accessibility */
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #16a34a;
  outline-offset: 2px;
}
</style>
