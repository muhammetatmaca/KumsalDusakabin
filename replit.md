# Overview

This project is a Turkish shower cabin (duşakabin) business website for "Eflal  Duşakabin", a company based in Ankara. It's a modern, professional web application built as a frontend-focused showcase that presents the company's products and services, contact information, and customer testimonials. The site is designed to be SEO-optimized for Turkish search terms related to shower cabins in Ankara, with a focus on generating leads through contact forms and WhatsApp integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based stack with TypeScript:
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Component Structure
The frontend follows a well-organized component architecture:
- **Layout Components**: Header, Footer with navigation and branding
- **Page Components**: Home, Products, About, Contact, and 404 pages
- **Section Components**: Modular sections like Hero, Products, Features, Testimonials
- **UI Components**: Reusable shadcn/ui components (buttons, forms, dialogs, etc.)
- **Utility Components**: SEO head management, WhatsApp integration

## Backend Architecture
The backend is built with Express.js and includes:
- **Server Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Development Setup**: Hot reload with Vite integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## SEO and Performance Optimizations
- **Meta Tags**: Dynamic SEO head component with Turkish keywords
- **Turkish Keywords**: Optimized for "Ankara duşakabin", "modern duşakabin", etc.
- **Image Optimization**: Uses Unsplash images with proper alt tags
- **Mobile Responsiveness**: Fully responsive design with mobile-first approach
- **Performance**: Lazy loading and optimized asset delivery

## Business Features
- **Product Showcase**: Four main product categories (corner, sliding, oval, premium glass)
- **Contact Integration**: Multiple contact methods (phone, email, WhatsApp)
- **Lead Generation**: Contact forms with toast notifications
- **Customer Testimonials**: Social proof section
- **Company Information**: About section highlighting experience and reliability

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React, ReactDOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support across the stack
- **Vite**: Build tool and development server

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: For component variant management

## Backend and Database
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **PostgreSQL**: Primary database (configured via DATABASE_URL)

## Development and Build Tools
- **Replit Plugins**: Development banner and cartographer for Replit environment
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast bundling for production builds

## External Services Integration
- **WhatsApp Business**: Direct messaging integration via wa.me links
- **Unsplash**: Image hosting for product and hero images
- **Google Fonts**: Inter font family for typography

## Form and State Management
- **React Hook Form**: Form handling with validation
- **Hookform Resolvers**: Form validation integration
- **TanStack Query**: Server state management and caching
- **Zod**: Schema validation library

The application is designed to run in both development (with hot reload) and production environments, with proper separation between frontend and backend concerns while maintaining a cohesive user experience focused on the Turkish shower cabin market.