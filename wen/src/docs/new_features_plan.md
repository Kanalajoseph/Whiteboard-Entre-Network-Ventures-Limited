# New Features Implementation Plan
## Car Hire, Real Estate, Loans & Admin Dashboard

## Goal
Add browsable listings for cars and real estate properties, loan application functionality, and a comprehensive admin dashboard for managing all content and viewing enquiries/applications.

---

## Features Overview

### Public-Facing Features
1. **Car Hire Listings** - Browse available cars for hire with enquiry form
2. **Real Estate Listings** - Browse properties with detailed information and enquiry
3. **Loan Applications** - Apply for collateral-based loans online
4. **Enquiry Forms** - Contact form for each listing type

### Admin Dashboard Features
1. **Car Management** - Add, edit, delete car listings
2. **Real Estate Management** - Add, edit, delete property listings
3. **Loan Applications Review** - View and manage loan applications
4. **Enquiries Management** - View and respond to enquiries
5. **Dashboard Analytics** - Overview of listings, applications, and enquiries

---

## Database Schema

### Cars Table
```sql
CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    color VARCHAR(50),
    transmission ENUM('Manual', 'Automatic'),
    fuel_type ENUM('Petrol', 'Diesel', 'Hybrid', 'Electric'),
    seats INT,
    daily_rate DECIMAL(10,2) NOT NULL,
    weekly_rate DECIMAL(10,2),
    monthly_rate DECIMAL(10,2),
    image_url VARCHAR(500),
    images JSON,
    features JSON,
    availability_status ENUM('Available', 'Rented', 'Maintenance') DEFAULT 'Available',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Real Estate Table
```sql
CREATE TABLE real_estate (
    id INT PRIMARY KEY AUTO_INCREMENT,
    property_type ENUM('House', 'Apartment', 'Land', 'Commercial', 'Office'),
    transaction_type ENUM('Sale', 'Rent'),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(15,2) NOT NULL,
    bedrooms INT,
    bathrooms INT,
    area_sqm DECIMAL(10,2),
    address VARCHAR(300),
    city VARCHAR(100) DEFAULT 'Lusaka',
    district VARCHAR(100),
    location_coordinates VARCHAR(100),
    features JSON,
    images JSON,
    main_image_url VARCHAR(500),
    status ENUM('Available', 'Sold', 'Rented', 'Pending') DEFAULT 'Available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Loan Applications Table
```sql
CREATE TABLE loan_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    applicant_name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    loan_amount DECIMAL(15,2) NOT NULL,
    loan_type ENUM('Personal', 'Business', 'Car', 'Property'),
    collateral_type VARCHAR(100),
    collateral_value DECIMAL(15,2),
    collateral_description TEXT,
    employment_status VARCHAR(100),
    monthly_income DECIMAL(15,2),
    purpose TEXT,
    status ENUM('Pending', 'Under Review', 'Approved', 'Rejected') DEFAULT 'Pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Enquiries Table
```sql
CREATE TABLE enquiries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    enquiry_type ENUM('Car Hire', 'Real Estate', 'General'),
    related_id INT,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    status ENUM('New', 'Read', 'Responded', 'Closed') DEFAULT 'New',
    response TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Admin Users Table
```sql
CREATE TABLE admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Super Admin', 'Admin', 'Editor') DEFAULT 'Editor',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);
```

---

## API Endpoints

### Public Endpoints

#### Cars
- `GET /api/cars` - List all available cars (with filters)
- `GET /api/cars/:id` - Get car details
- `POST /api/enquiries/car/:id` - Submit car enquiry

#### Real Estate
- `GET /api/real-estate` - List properties (with filters)
- `GET /api/real-estate/:id` - Get property details
- `POST /api/enquiries/real-estate/:id` - Submit property enquiry

#### Loans
- `POST /api/loans/apply` - Submit loan application
- `GET /api/loans/status/:reference` - Check application status (with reference number)

### Admin Endpoints (Protected)

#### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/verify` - Verify session

#### Cars Management
- `POST /api/admin/cars` - Create car listing
- `PUT /api/admin/cars/:id` - Update car listing
- `DELETE /api/admin/cars/:id` - Delete car listing
- `POST /api/admin/cars/:id/images` - Upload car images

#### Real Estate Management
- `POST /api/admin/real-estate` - Create property listing
- `PUT /api/admin/real-estate/:id` - Update property listing
- `DELETE /api/admin/real-estate/:id` - Delete property listing
- `POST /api/admin/real-estate/:id/images` - Upload property images

#### Enquiries Management
- `GET /api/admin/enquiries` - List all enquiries
- `GET /api/admin/enquiries/:id` - Get enquiry details
- `PUT /api/admin/enquiries/:id` - Update enquiry status/response
- `DELETE /api/admin/enquiries/:id` - Delete enquiry

#### Loan Applications Management
- `GET /api/admin/loans` - List all loan applications
- `GET /api/admin/loans/:id` - Get application details
- `PUT /api/admin/loans/:id` - Update application status/notes

#### Dashboard
- `GET /api/admin/dashboard/stats` - Get overview statistics

---

## Frontend Structure

### New Public Pages

#### `/cars` - Car Hire Listings
- Grid/List view of available cars
- Filters: price range, transmission, fuel type, seats
- Search functionality
- Sort by: price, year, model

#### `/cars/:id` - Car Details
- Full car specifications
- Image gallery
- Pricing details (daily/weekly/monthly)
- Enquiry form
- Related cars

#### `/properties` - Real Estate Listings
- Grid/List view of properties
- Filters: type, transaction type, price, bedrooms, location
- Map view option
- Search functionality

#### `/properties/:id` - Property Details
- Full property information
- Image gallery
- Location map
- Features list
- Enquiry form

#### `/loans` - Loan Application
- Step-by-step application form
- Collateral details section
- Document upload
- Terms and conditions
- Application tracking

### Admin Dashboard Pages

#### `/admin` - Admin Login
- Secure login form
- Session management

#### `/admin/dashboard` - Overview
- Statistics cards:
  - Total cars listed
  - Total properties listed
  - Pending loan applications
  - Unread enquiries
- Recent activity feed
- Quick actions

#### `/admin/cars` - Car Management
- **List View**:
  - Table of all cars
  - Status indicators
  - Quick edit/delete
  - Bulk actions
- **Add/Edit Car**:
  - Multi-step form
  - Image upload (multiple)
  - Features selection
  - Pricing configuration

#### `/admin/real-estate` - Property Management
- **List View**:
  - Table of all properties
  - Filter by type/status
  - Quick actions
- **Add/Edit Property**:
  - Comprehensive form
  - Image upload (multiple)
  - Location picker (map)
  - Features checklist

#### `/admin/loans` - Loan Applications
- **Applications List**:
  - Table view with filters
  - Status badges
  - Sort by date/amount
- **Application Details**:
  - Full applicant information
  - Collateral details
  - Status management
  - Notes section
  - Approval/rejection workflow

#### `/admin/enquiries` - Enquiries Management
- **Enquiries List**:
  - Grouped by type (Car/Real Estate/General)
  - Status filtering
  - Search functionality
- **Enquiry Details**:
  - Full message
  - Related listing info
  - Response form
  - Status update

---

## Component Architecture

### Public Components
- `CarCard.jsx` - Car listing card
- `PropertyCard.jsx` - Property listing card
- `CarFilters.jsx` - Car filtering sidebar
- `PropertyFilters.jsx` - Property filtering sidebar
- `EnquiryForm.jsx` - Reusable enquiry form
- `LoanApplicationForm.jsx` - Multi-step loan form
- `ImageGallery.jsx` - Lightbox image gallery

### Admin Components
- `AdminLayout.jsx` - Dashboard layout wrapper
- `AdminSidebar.jsx` - Navigation sidebar
- `StatsCard.jsx` - Statistics display card
- `DataTable.jsx` - Reusable data table
- `CarForm.jsx` - Car add/edit form
- `PropertyForm.jsx` - Property add/edit form
- `ImageUploader.jsx` - Multiple image uploader
- `StatusBadge.jsx` - Status indicator
- `ActionMenu.jsx` - Dropdown action menu

---

## Implementation Phases

### Phase 1: Database & Backend Setup
1. Create database tables
2. Set up API server (Node.js/Express or similar)
3. Implement authentication middleware
4. Create CRUD endpoints for cars
5. Create CRUD endpoints for real estate
6. Create loan application endpoints
7. Create enquiries endpoints

### Phase 2: Public Frontend - Cars
1. Create Cars listing page with filters
2. Create Car details page
3. Implement car enquiry form
4. Add images and styling

### Phase 3: Public Frontend - Real Estate
1. Create Properties listing page with filters
2. Create Property details page
3. Implement property enquiry form
4. Add map integration (optional)

### Phase 4: Public Frontend - Loans
1. Create Loan application page
2. Implement multi-step form
3. Add validation and file upload
4. Create application tracking page

### Phase 5: Admin Dashboard - Authentication
1. Create admin login page
2. Implement JWT/session authentication
3. Set up protected routes

### Phase 6: Admin Dashboard - Content Management
1. Create dashboard overview
2. Implement cars management (CRUD)
3. Implement real estate management (CRUD)
4. Add image upload functionality

### Phase 7: Admin Dashboard - Applications & Enquiries
1. Create loan applications view
2. Implement application review workflow
3. Create enquiries management
4. Add response functionality

### Phase 8: Testing & Deployment
1. Test all public features
2. Test all admin features
3. Security audit
4. Deploy to production

---

## User Flows

### Car Hire Enquiry Flow
1. User visits `/cars`
2. Browses available cars with filters
3. Clicks on car card to view details
4. Views full specifications and images
5. Fills out enquiry form
6. Receives confirmation email
7. Admin receives notification

### Real Estate Enquiry Flow
1. User visits `/properties`
2. Filters by type, price, location
3. Views property details
4. Checks location on map
5. Submits enquiry
6. Admin reviews and responds

### Loan Application Flow
1. User visits `/loans`
2. Reads loan requirements
3. Fills multi-step form:
   - Personal information
   - Loan details
   - Collateral information
   - Employment details
4. Uploads supporting documents
5. Reviews and submits
6. Receives application reference number
7. Can track status with reference

### Admin Management Flow
1. Admin logs in to `/admin`
2. Views dashboard statistics
3. Navigates to Car/Property management
4. Adds new listing with:
   - Details form
   - Multiple images
   - Features selection
5. Listing appears on public site
6. Reviews enquiries/applications
7. Updates statuses and responds

---

## Security Considerations

1. **Admin Authentication**:
   - Secure password hashing (bcrypt)
   - JWT tokens or secure sessions
   - HTTPS only
   - Rate limiting on login

2. **Input Validation**:
   - Sanitize all user inputs
   - Validate file uploads (type, size)
   - SQL injection prevention (prepared statements)
   - XSS protection

3. **Authorization**:
   - Role-based access control
   - Protected admin routes
   - API endpoint authentication

4. **Data Protection**:
   - Encrypt sensitive loan application data
   - Secure file storage
   - GDPR compliance for personal data

---

## Next Steps

1. Review and approve this implementation plan
2. Set up backend infrastructure
3. Create database schema
4. Begin Phase 1 implementation
5. Iterate through phases with testing

Would you like me to proceed with implementing these features?
