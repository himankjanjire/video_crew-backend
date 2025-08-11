Video Crew Backend API Documentation
Base URL: https://video-crew-backend-production.up.railway.app/api
## Authentication
### Login
POST /auth/login
Description: Admin login
Body:
{
"email": "admin@videocrew.com",
"password": "password123"
}
Response:
{
"success": true,
"token": "jwt_token_here",
"user": {
"id": "user_id",
"email": "admin@videocrew.com",
"name": "Admin"
}
}
## Portfolio
### Get All Portfolio Items
GET /portfolio
Description: Get all portfolio items (public)
### Get Single Portfolio Item
GET /portfolio/:id
Description: Get portfolio item by ID (public)
### Create Portfolio Item
POST /portfolio
Description: Create new portfolio item (admin only)
### Update Portfolio Item
PUT /portfolio/:id
Description: Update portfolio item (admin only)
### Delete Portfolio Item
DELETE /portfolio/:id
Description: Delete portfolio item (admin only)
## Contact
### Submit Contact Form
POST /contact
Description: Submit contact inquiry (public, sends emails)
### Get All Contacts
GET /contact
Description: Get all contact inquiries (admin only)
### Update Contact Status
PUT /contact/:id
Description: Update contact inquiry (admin only)
## File Upload
### Upload Image
POST /upload/image
Description: Upload image file (admin only)
### Upload Video
POST /upload/video
Description: Upload video file (admin only)
## Error Responses
401 Unauthorized: { "success": false, "message": "Invalid credentials" }
403 Forbidden: { "success": false, "message": "Access denied" }
## Notes
- All admin endpoints require JWT token in Authorization header
- Contact form submission automatically sends emails to admin and user
- Default admin credentials: admin@videocrew.com / password123
- File uploads are stored on Cloudinary