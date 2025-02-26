export interface TCategory {
  children: TCategory[]; // Assuming children are IDs or references to other categories
  createdAt: string; // ISO date string
  createdBy: string; // ID of the user who created the category
  description: string; // Description of the category
  isActive: boolean; // Indicates if the category is active
  name: string; // Name of the category
  parent: string | null; // ID of the parent category, or null if it's a top-level category
  slug: string; // URL-friendly slug for the category
  updatedAt: string; // ISO date string
  _id: string; // Unique identifier for the category
}
