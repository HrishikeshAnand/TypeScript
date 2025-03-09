// Defining an Enum for User Roles
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

// Function using the Enum
function getDashboardAccess(role: UserRole): string {
  switch (role) {
    case UserRole.Admin:
      return "Full Access to Dashboard";
    case UserRole.Editor:
      return "Limited Access to Edit Content";
    case UserRole.Viewer:
      return "Read-Only Access";
    default:
      return "No Access";
  }
}

const userRole: UserRole = UserRole.Admin;
console.log(getDashboardAccess(userRole));
