/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, Testimonial } from './types';

export const TRANSLATIONS = {
  VN: {
    navHome: 'Trang chủ',
    navAbout: 'Về tôi',
    navSkills: 'Kỹ năng',
    navProjects: 'Dự án',
    navContact: 'Liên hệ',
    resumeBtn: 'Tải Hồ Sơ',
    
    heroReady: 'Sẵn sàng cho dự án mới',
    heroTitle: 'Kiến tạo trải nghiệm',
    heroTitleHighlight: 'Kỹ thuật số đỉnh cao',
    heroSubtitle: 'Tôi là Khiên Nguyễn, một React Developer chuyên sâu về tối ưu hóa hiệu năng UI/UX và kiến trúc Frontend mở rộng. Kết hợp giữa mỹ thuật tinh gọn và quy chuẩn kỹ thuật nghiêm ngặt.',
    heroViewProjects: 'Xem dự án của tôi',
    heroContactNow: 'Liên hệ ngay',
    
    aboutTitle: 'Hành trình chuyên môn',
    aboutSubtitle: 'VỀ TÔI',
    aboutDescription: 'Tôi là một kỹ sư phần mềm tập trung vào việc xây dựng các kiến trúc Frontend hiệu suất cao bằng hệ sinh thái React. Luôn coi mã nguồn là một tác phẩm kỹ thuật mang tính nghệ thuật, tôi định hướng tối ưu hóa từng pixel, giảm tải thời gian phản hồi, và tạo lập cấu trúc module dễ mở rộng cho dự án doanh nghiệp đại trà.',
    aboutExpYear: 'Năm Kinh Nghiệm',
    aboutCoreTechTitle: 'Kỹ thuật xuất sắc',
    aboutCoreTechDesc: 'Tối ưu hóa hiệu suất (LCP/FID/CLS) ở mức tuyệt đối. Thành thạo Micro-frontend, Server-side Rendering và quản lý State phức tạp.',
    aboutMindsetTitle: 'Tư duy định hướng sản phẩm',
    aboutMindsetDesc: 'Tiếp cận phần mềm từ lăng kính trải nghiệm người dùng cuối. Biến thách thức kinh doanh phức tạp thành giải pháp giao diện đơn giản, hữu hiệu.',
    
    skillsTitle: 'Kỹ năng chuyên môn',
    skillsSubtitle: 'CÔNG NGHỆ CHỦ ĐẠO',
    skillsClickHint: 'Nhấn vào thẻ kỹ năng để xem các thuộc tính cốt lõi liên quan',
    skillCoreFront: 'Phát Triển Frontend',
    skillBackendTools: 'Backend & Công cụ hỗ trợ',
    
    projectsTitle: 'Dự án tiêu biểu',
    projectsSubtitle: 'SẢN PHẨM KHÁC BIỆT',
    projectsFilterAll: 'Tất cả',
    projectChallenge: 'Thách thức kinh doanh',
    projectSolution: 'Giải pháp kỹ thuật',
    projectMetrics: 'Chỉ số đo lường',
    projectArchitecture: 'Công nghệ & Kiến trúc',
    projectDetailsBtn: 'Chi tiết kỹ thuật',
    projectCloseBtn: 'Đóng',
    projectCodeBtn: 'Mã nguồn',
    projectLiveBtn: 'Demo Trực Tiếp',
    
    contactTitle: 'Khởi tạo ý tưởng mới',
    contactSubtitle: 'LIÊN HỆ',
    contactFormName: 'Họ và tên',
    contactFormEmail: 'Địa chỉ email',
    contactFormMsg: 'Nội dung tin nhắn',
    contactFormSend: 'Gửi yêu cầu',
    contactFormSending: 'Đang gửi...',
    contactFormSuccess: 'Cảm ơn bạn! Yêu cầu của bạn đã được tiếp nhận thành công. Khiên Nguyễn sẽ liên hệ lại trong vòng 24 giờ tới.',
    contactFormError: 'Có lỗi xảy ra, vui lòng thử lại sau giây lát.',
    contactInfoTitle: 'Thông tin kết nối',
    contactInfoEmail: 'Email trực tiếp',
    contactInfoPhone: 'Điện thoại di động',
    contactInfoLoc: 'Địa chỉ',
    contactInfoLocVal: 'Hà Nội, Việt Nam',
    
    contactInboxTitle: 'Hộp thư yêu cầu (Lưu trữ cục bộ)',
    contactInboxEmpty: 'Chưa có yêu cầu nào được gửi trong phiên này.',
    contactInboxCount: 'yêu cầu',
    
    resumeTitle: 'HỒ SƠ CỦA Khiên Nguyễn',
    resumeSubtitle: 'SƠ YẾU LÝ LỊCH CHUYÊN NGHIỆP',
    resumeDownload: 'Tải PDF Bản Tóm Tắt',
    resumeClose: 'Đóng',
    resumeContact: 'Họ tên: Nguyễn Thành Khiên | React Developer | khiennd98@gmail.com'
  },
  EN: {
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navContact: 'Contact',
    resumeBtn: 'Resume',
    
    heroReady: 'Ready for new projects',
    heroTitle: 'Engineered for exceptional',
    heroTitleHighlight: 'Digital Experiences',
    heroSubtitle: 'I am Khiên Nguyễn, a React Developer specializing in frontend UX optimization and scalable application architecture. Merging clean aesthetic logic with stringent technical standards.',
    heroViewProjects: 'Explore My Work',
    heroContactNow: 'Let\'s Connect',
    
    aboutTitle: 'Professional Journey',
    aboutSubtitle: 'ABOUT ME',
    aboutDescription: 'I am a software engineer focused on building highly responsive and performant frontend architectures using the React ecosystem. Treating code as high-level engineering art, I specialize in fine-tuning every web vital, slashing render latency, and structuring modular codebases ready for enterprise scale.',
    aboutExpYear: 'Years of Experience',
    aboutCoreTechTitle: 'Technical Excellence',
    aboutCoreTechDesc: 'Obsessive optimization of Core Web Vitals (LCP/FID/CLS). Fluent in Micro-frontends, Server-side Rendering, and state management at scale.',
    aboutMindsetTitle: 'Product-driven Mindset',
    aboutMindsetDesc: 'Approaching UI from a user experience lens. Translating complex commercial requirements into frictionless, intuitive digital interfaces.',
    
    skillsTitle: 'Expertise Taxonomy',
    skillsSubtitle: 'CORE CAPABILITIES',
    skillsClickHint: 'Click on technology categories to view core engineering focus',
    skillCoreFront: 'Frontend Development',
    skillBackendTools: 'Backend & Toolchain',
    
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'TECHNICAL EXCELLENCE',
    projectsFilterAll: 'All',
    projectChallenge: 'Business Challenge',
    projectSolution: 'Technical Solution',
    projectMetrics: 'Key Engineering Metrics',
    projectArchitecture: 'Stack & System Architecture',
    projectDetailsBtn: 'Technical Deep Dive',
    projectCloseBtn: 'Close',
    projectCodeBtn: 'Source Code',
    projectLiveBtn: 'Live Demo',
    
    contactTitle: 'Let\'s start a conversation',
    contactSubtitle: 'CONTACT',
    contactFormName: 'Full Name',
    contactFormEmail: 'Email Address',
    contactFormMsg: 'Your Message',
    contactFormSend: 'Send Request',
    contactFormSending: 'Sending...',
    contactFormSuccess: 'Thank you! Your message has been acquired successfully. Khiên Nguyễn will reply within the next 24 hours.',
    contactFormError: 'Something went wrong. Please try again later.',
    contactInfoTitle: 'Direct Channels',
    contactInfoEmail: 'Direct Corporate Email',
    contactInfoPhone: 'Cellular Line',
    contactInfoLoc: 'Geographic Location',
    contactInfoLocVal: 'Hanoi, Vietnam',
    
    contactInboxTitle: 'Received Contacts (Stored Locally)',
    contactInboxEmpty: 'No enquiries submitted during this local session yet.',
    contactInboxCount: 'enquiries',
    
    resumeTitle: 'KHIEN NGUYEN\'S PORTFOLIO RESUME',
    resumeSubtitle: 'PROFESSIONAL CURRICULUM VITAE',
    resumeDownload: 'Download PDF Resume',
    resumeClose: 'Close',
    resumeContact: 'Full Name: Nguyen Thanh Khien | React Developer | khiennd98@gmail.com'
  }
};

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
