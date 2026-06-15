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
    src: '/projects/exterior-1.jpg',
    category: 'exterior',
    titleEn: 'Modern Residential Facade',
    titleHi: 'आधुनिक आवासीय फसाड',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 2,
    src: '/projects/interior-1.jpg',
    category: 'interior',
    titleEn: 'Luxury Living Room',
    titleHi: 'लक्जरी लिविंग रूम',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 3,
    src: '/projects/interior-2.jpg',
    category: 'interior',
    titleEn: 'Master Bedroom Design',
    titleHi: 'मास्टर बेडरूम डिज़ाइन',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 4,
    src: '/projects/construction-1.jpg',
    category: 'construction',
    titleEn: 'UPVC Window Installation',
    titleHi: 'UPVC विंडो इंस्टॉलेशन',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 5,
    src: '/projects/interior-3.jpg',
    category: 'interior',
    titleEn: 'Grand Hall Interior',
    titleHi: 'भव्य हॉल इंटीरियर',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 6,
    src: '/projects/exterior-2.jpg',
    category: 'exterior',
    titleEn: 'Commercial Building Design',
    titleHi: 'व्यावसायिक भवन डिज़ाइन',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 7,
    src: '/projects/interior-4.jpg',
    category: 'interior',
    titleEn: 'Contemporary Interior',
    titleHi: 'समकालीन इंटीरियर',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 8,
    src: '/projects/construction-2.jpg',
    category: 'construction',
    titleEn: 'Structural Metalwork',
    titleHi: 'संरचनात्मक धातु कार्य',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 9,
    src: '/projects/exterior-3.jpg',
    category: 'exterior',
    titleEn: 'Residential Complex',
    titleHi: 'आवासीय परिसर',
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 10,
    src: '/projects/interior-5.jpg',
    category: 'interior',
    titleEn: 'Bedroom Interior',
    titleHi: 'बेडरूम इंटीरियर',
    featured: false,
    aspect: 'landscape',
  },
]

export const serviceImages = [
  '/projects/service-engineering.jpg',
  '/projects/service-interior.jpg',
  '/projects/service-construction.jpg',
]
