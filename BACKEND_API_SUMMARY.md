# OmniCare Backend API - Complete Endpoint Summary

## 🔐 Authentication Endpoints

### POST `/api/auth/register`
Register a new user
- **Body**: `{ email, password, firstName, lastName, phoneNumber, role }`
- **Response**: `{ token, id, email, firstName, lastName, role }`
- **Access**: Public

### POST `/api/auth/login`
Login user
- **Body**: `{ email, password }`
- **Response**: `{ token, id, email, firstName, lastName, role }`
- **Access**: Public

---

## 📝 Pre-Inscription Endpoints

### POST `/api/pre-inscriptions`
Create a new pre-inscription (for professionals)
- **Body**: 
```json
{
  "firstName": "string",
  "lastName": "string",
  "dateOfBirth": "2000-01-15",
  "email": "email@example.com",
  "phone": "+216 12 345 678",
  "profession": "MEDECIN|INFIRMIER|PSYCHOLOGUE|KINESITHERAPEUTE"
}
```
- **Response**: PreInscription object with ID
- **Access**: Public

### GET `/api/pre-inscriptions`
Get all pre-inscriptions
- **Access**: Admin only

### GET `/api/pre-inscriptions/{id}`
Get pre-inscription by ID
- **Access**: Admin only

### PUT `/api/pre-inscriptions/{id}/status?status=APPROVED`
Update pre-inscription status
- **Query Params**: `status` (PENDING, APPROVED, REJECTED)
- **Access**: Admin only

### DELETE `/api/pre-inscriptions/{id}`
Delete a pre-inscription
- **Access**: Admin only

### GET `/api/pre-inscriptions/statistics`
Get statistics (total, by profession, by status)
- **Response**:
```json
{
  "total": 100,
  "medecin": 45,
  "infirmier": 30,
  "psychologue": 15,
  "kinesitherapeute": 10,
  "pending": 80,
  "approved": 15,
  "rejected": 5
}
```
- **Access**: Admin only

---

## 📧 Contact Message Endpoints

### POST `/api/contact`
Submit a contact form message
- **Body**:
```json
{
  "name": "string",
  "email": "email@example.com",
  "message": "string"
}
```
- **Response**: ContactMessage object with ID
- **Access**: Public

### GET `/api/contact`
Get all contact messages (ordered by date desc)
- **Access**: Admin only

### GET `/api/contact/new`
Get only new (unread) messages
- **Access**: Admin only

### GET `/api/contact/{id}`
Get message by ID
- **Access**: Admin only

### PUT `/api/contact/{id}/read`
Mark message as read
- **Access**: Admin only

### PUT `/api/contact/{id}/replied`
Mark message as replied
- **Access**: Admin only

### DELETE `/api/contact/{id}`
Delete a message
- **Access**: Admin only

---

## 👨‍⚕️ Professional Endpoints

### GET `/api/professionals`
Get all verified professionals
- **Access**: Authenticated users

### GET `/api/professionals/{id}`
Get professional details by ID
- **Access**: Authenticated users

### GET `/api/professionals/type/{type}`
Filter professionals by type (MEDECIN, INFIRMIER, etc.)
- **Access**: Authenticated users

### POST `/api/professionals`
Create professional profile
- **Access**: Admin only

### PUT `/api/professionals/{id}`
Update professional profile
- **Access**: Admin only

### DELETE `/api/professionals/{id}`
Delete professional profile
- **Access**: Admin only

---

## 🔑 Authentication Headers

For protected endpoints, include JWT token:
```
Authorization: Bearer <your-jwt-token>
```

---

## 📊 Database Models

### PreInscription
- `id`: Long
- `firstName`: String
- `lastName`: String
- `dateOfBirth`: LocalDate
- `email`: String (unique)
- `phone`: String
- `profession`: Enum (MEDECIN, INFIRMIER, PSYCHOLOGUE, KINESITHERAPEUTE)
- `status`: Enum (PENDING, APPROVED, REJECTED)
- `createdAt`: LocalDateTime
- `updatedAt`: LocalDateTime

### ContactMessage
- `id`: Long
- `name`: String
- `email`: String
- `message`: String (max 2000 chars)
- `status`: Enum (NEW, READ, REPLIED)
- `createdAt`: LocalDateTime
- `readAt`: LocalDateTime

### User
- `id`: Long
- `email`: String (unique)
- `password`: String (encrypted)
- `firstName`: String
- `lastName`: String
- `phoneNumber`: String
- `role`: Enum (PATIENT, PROFESSIONAL, ADMIN)
- `enabled`: Boolean
- `createdAt`: LocalDateTime

### Professional
- `id`: Long
- `user`: User (OneToOne)
- `type`: Enum (MEDECIN, INFIRMIER, PSYCHOLOGUE, KINESITHERAPEUTE, SAGE_FEMME)
- `specialization`: String
- `licenseNumber`: String
- `bio`: String
- `yearsOfExperience`: Integer
- `consultationFee`: Double
- `verificationStatus`: Enum (PENDING, VERIFIED, REJECTED)
- `createdAt`: LocalDateTime
- `updatedAt`: LocalDateTime

---

## 🚀 Next Steps for Frontend Integration

1. **Create API service layer** in frontend (`src/services/api.ts`)
2. **Update AuthContext** to use real backend authentication
3. **Update PreInscriptionContext** to call backend API
4. **Update Contact form** to submit to backend
5. **Update Admin/Dashboard** to fetch data from backend
6. **Add axios or fetch** for HTTP requests
7. **Handle JWT token** storage and refresh

---

## 🔧 Testing the API

### Using curl:

**Register:**
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@omnicare.tn","password":"admin123","firstName":"Admin","lastName":"User","phoneNumber":"+216 12 345 678","role":"ADMIN"}'
```

**Login:**
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@omnicare.tn","password":"admin123"}'
```

**Create Pre-Inscription:**
```bash
curl -X POST http://localhost:8080/api/pre-inscriptions \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jean","lastName":"Dupont","dateOfBirth":"1985-05-15","email":"jean.dupont@example.tn","phone":"+216 12 345 678","profession":"MEDECIN"}'
```

**Submit Contact:**
```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello, I have a question..."}'
```
