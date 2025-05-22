This document provides a comprehensive overview of the TijaraHubAboutUs repository. This codebase implements the "About Us" section of the TijaraHub platform, a B2B e-commerce solution that connects manufacturers to global buyers. The repository contains a responsive, bilingual web interface that showcases TijaraHub's services, solutions, and pricing plans.

Purpose and Scope
The TijaraHubAboutUs codebase serves as the promotional landing page for TijaraHub's B2B export services. It provides potential customers with information about TijaraHub's offerings, demonstrates key statistics, presents pricing plans, and offers ways to contact the company. This overview document explains the overall architecture, key components, and interaction flows of the system.

For more detailed information about specific components, please refer to the following related wiki pages:

For details on the front-end architecture, see Front-end Architecture
For information about interactive elements, see Interactive Elements
For details on the localization system, see Localization System
For information about individual UI components, see UI Components

System Architecture Overview :

![image](https://github.com/user-attachments/assets/3ab3265e-e461-4b54-9e13-eaee24d00650)

The TijaraHubAboutUs system is structured as a client-side web application with no server-side components. The architecture is divided into three main layers:

User Interface Layer: Consists of HTML structure (separate files for English and Arabic), CSS styling, and JavaScript for interactive elements.
Feature Systems: Implements the core functionalities including localization, service showcase, pricing display, animations, and partner presentation.
External Integrations: Connects with Calendly for meeting bookings and links to the main TijaraHub platform.

Content and Information Flow :

![image](https://github.com/user-attachments/assets/0b355548-5f77-4a1b-9306-c44ed73f7068)

The content in TijaraHubAboutUs flows logically from introduction to detailed sections. Users can:

Enter through either English or Arabic entry points
Navigate through content sections in a structured flow
Toggle between languages at any point
Interact with service selection to view details
Toggle between monthly and annual pricing plans
Book meetings via Calendly integration
Navigate to the main TijaraHub platform

Key Components:

HTML Structure:
The codebase uses two separate HTML files for English and Arabic content:

index.html - English version
indexar.html - Arabic version (with RTL direction)
Both files share the same structure but contain translated content. The HTML is organized into distinct sections including:

Language toggle 
Introduction section
Services section
Technology solutions section
Pricing section
Partners section

CSS Styling System :
The styling system (styles.css) implements:

CSS Variables: Defines colors, fonts, and dimensions for consistent styling
Responsive Design: Media queries for mobile, tablet, and desktop layouts
RTL Support: Special rules for right-to-left text direction in Arabic
Animations: Keyframe animations for dynamic content
Component Styling: Specific styles for each UI component

JavaScript Functionality :
The JavaScript (script.js) handles interactive elements including:

Language Detection: Detects and applies appropriate language settings
Counter Animation: Animates statistical counters
Service Details Display: Shows details for selected services
Testimonial Slider: Controls testimonial carousel
FAQ Toggle: Expands/collapses FAQ items
Pricing Toggle: Switches between monthly and annual pricing
Partner Logo Animations: Handles partner logo hover effects

Localization System :
![Uploading image.png…]()

External Integrations :
The system integrates with:

Calendly: For scheduling meetings with the TijaraHub team
Main TijaraHub Platform: Links to the main e-commerce platform
Microsoft Clarity: For analytics tracking


Front-End Technologies Used :
The codebase utilizes:

HTML5: Semantic structure
CSS3: Modern styling including variables, animations, and media queries
JavaScript (ES6+): Event handling, DOM manipulation, animations
Google Fonts: Montserrat, El Messiri, and Kaushan Script
Font Awesome: Icon library
Schema.org markup: For SEO optimization
