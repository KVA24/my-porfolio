/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, Testimonial } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Core',
    icon: 'Layers',
    skills: [
      'React 18/19',
      'Next.js (App Router)',
      'TypeScript',
      'Zustand / Redux Toolkit',
      'Tailwind CSS',
      'Three.js (R3F)',
      'HTML5/CSS3 Semantic',
      'Webpack/Vite Bundler',
      'Web Workers / Web Sockets'
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Operations',
    icon: 'Cpu',
    skills: [
      'Node.js / Express',
      'RESTful & GraphQL APIs',
      'PostgreSQL / MongoDB',
      'Docker Containerization',
      'AWS / GCP Cloud',
      'CI/CD GitHub Actions',
      'Jest / React Testing Library',
      'Lighthouse CI & Performance Analytics'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'FinTech Analytics Dashboard 2.0',
    category: 'FinTech',
    tags: ['SaaS', 'Realtime', 'Data Viz'],
    tech: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'Socket.io'],
    description: 'Hệ thống quản trị và trực quan hóa luồng tài chính thời gian thực. Tối ưu hóa việc render đồng thời hàng ngàn điểm dữ liệu giúp duy trì chỉ số FPS ở mức 60 liên tục.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    details: {
      challenge: 'Hiển thị lượng dữ liệu giao dịch khổng lồ theo thời gian thực làm nghẽn main thread, gây ra giật lag khung hình trầm trọng trên các thiết bị cấu hình trung bình.',
      solution: 'Tích hợp các kỹ thuật ảo hóa danh sách (virtualization), phân chia nhỏ tác vụ tính toán thông qua Web Workers và áp dụng cơ chế throttling nhạy bén đối với sự kiện cập nhật của websocket.',
      metrics: [
        'Tiết kiệm 45% mức tiêu thụ tài nguyên phần cứng (CPU/RAM).',
        'Thời gian đáp ứng phản hồi đồ thị giảm dưới 15ms.',
        'Hỗ trợ đắc lực việc hiển thị liên tục hơn 12,000 sự kiện biến động quỹ mỗi giây.'
      ],
      architecture: [
        'Frontend: React 18, Recharts rendering optimized, custom Zustand store layout.',
        'Backend: Express Node.js, Socket.io clustering for data streaming.'
      ]
    },
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'p2',
    title: 'E-Luxury Smart Commerce Platform',
    category: 'E-Commerce',
    tags: ['Immersive 3D', 'PWA', 'Headless'],
    tech: ['Next.js', 'Three.js', 'Tailwind', 'Zustand', 'Stripe'],
    description: 'Nền tảng thương hiệu cao cấp tích hợp trình quan sát mô hình 3D tương tác sống động, giúp khách hàng trải nghiệm sản phẩm trực tiếp từ thiết bị di động với độ phân giải cao.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    details: {
      challenge: 'Giao diện tích hợp tệp tin 3D dung lượng lớn khiến thời gian tải ban đầu (LCP) kéo dài lên đến 7 giây, ảnh hưởng nghiêm trọng đến tỉ lệ chuyển đổi đơn hàng.',
      solution: 'Thiết lập quy trình tối ưu hóa nén tệp 3D glTF qua Dracon, áp dụng chính sách lazy load trì hoãn khởi động Canvas và nén phân cấp hình ảnh CDN thông minh.',
      metrics: [
        'Chỉ số LCP giảm từ 7.2 giây xuống còn 1.8 giây hoàn tất.',
        'Điểm số di động theo kiểm định Lighthouse đạt 98% hiệu lực.',
        'Tăng trưởng tỷ lệ nhấp chuột tương tác 3D tương ứng đạt 32%.'
      ],
      architecture: [
        'Core rendering: React Three Fiber, OrbitControls, custom custom lodash helpers.',
        'Headless API: Connected via NextJS edge routes proxying GraphQL CMS.'
      ]
    },
    demoUrl: '#',
    githubUrl: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Hoàng Minh',
    role: 'Technical Lead',
    company: 'FinTech Hub Vietnam',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Khiên Nguyễn sở hữu thói quen kỹ thuật tỉ mỉ hiếm có. Cậu ấy không chỉ viết code hoạt động được, mà làm cho nó hoạt động ở độ mượt tối ưu và rất dễ định hình phát triển tiếp.'
  },
  {
    id: 't2',
    name: 'Sophia Carter',
    role: 'Creative Director',
    company: 'Aura Studio SG',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'A profound UI engineering partner! Khien Nguyen bridging creative designs & complex functional logic flawlessly, making our high-end 3D product catalog look world-class.'
  }
];
