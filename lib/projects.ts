export type ProjectCategory = 'exterior' | 'interior' | 'construction'

export interface Project {
  id: number
  src: string
  category: ProjectCategory
  titleEn: string
  titleHi: string
  featured: boolean
  aspect: 'portrait' | 'landscape'
}

export const projects: Project[] = [
  {
    id: 1,
    src: '/projects/exterior-1.jpeg',
    category: 'exterior',
    titleEn: 'Modern Residential Facade',
    titleHi: 'आधुनिक आवासीय फसाड',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 2,
    src: '/projects/commercial-1.jpeg',
    category: 'exterior',
    titleEn: 'Commercial Building Facade',
    titleHi: 'व्यावसायिक भवन फसाड',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 3,
    src: '/projects/interior-2.jpeg',
    category: 'interior',
    titleEn: 'Bedroom Design',
    titleHi: 'बेडरूम डिज़ाइन',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 4,
    src: '/projects/construction-1.jpeg',
    category: 'construction',
    titleEn: 'Construction Work',
    titleHi: 'निर्माण कार्य',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 5,
    src: '/projects/interior-3.jpeg',
    category: 'interior',
    titleEn: 'Grand Hall Interior',
    titleHi: 'भव्य हॉल इंटीरियर',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 6,
    src: '/projects/exterior-2.jpeg',
    category: 'exterior',
    titleEn: 'Building Design',
    titleHi: 'भवन डिज़ाइन',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 7,
    src: '/projects/interior-4.jpeg',
    category: 'interior',
    titleEn: 'Planning Work',
    titleHi: 'योजना कार्य',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 8,
    src: '/projects/construction-2.jpeg',
    category: 'construction',
    titleEn: 'Structural Metalwork',
    titleHi: 'संरचनात्मक धातु कार्य',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 9,
    src: '/projects/exterior-3.jpeg',
    category: 'exterior',
    titleEn: 'Residential Complex',
    titleHi: 'आवासीय परिसर',
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 10,
    src: '/projects/interior-5.jpeg',
    category: 'interior',
    titleEn: 'Planning Design',
    titleHi: 'योजना डिज़ाइन',
    featured: false,
    aspect: 'landscape',
  },
]

export const serviceImages = [
  // '/projects/service-engineering.jpg',
  '/projects/exterior-1.jpeg',
  '/projects/service-interior.jpeg',
  '/projects/service-construction.jpeg',
]
