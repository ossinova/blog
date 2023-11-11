export interface CertificationTypes {
    certifications?: {
      items?: Array<{
        path: string; // URL to the certification
        title: string; // Title of the certification
        target: string; // Usually "_blank" for opening in a new tab
        rel: string; // Relation, typically "noopener noreferrer" for external links
        content: string; // Additional content, if any
        issued: string; // Date issued
        imageUrl: string; // URL to the image of the certification badge
      }>;
    };
  }
  