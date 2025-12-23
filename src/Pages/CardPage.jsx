import React from "react";
import Card from "../components/Card";

const CardPage = () => {
  const cardData = [
  {
    id: 1,
    bgSource: "https://picsum.photos/id/1011/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/11.jpg",
    userName: "john_d",
    realName: "John Doe",
    userDescription: "Frontend developer & UI enthusiast",
    mediaCount: 120,
    followerCount: 2400,
    followingCount: 180,
    cardBg: "#F8FAFC" // light gray-blue
  },
  {
    id: 2,
    bgSource: "https://picsum.photos/id/1015/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/21.jpg",
    userName: "sara.codes",
    realName: "Sara Williams",
    userDescription: "React & Tailwind lover",
    mediaCount: 89,
    followerCount: 3100,
    followingCount: 260,
    cardBg: "#F0F9FF" // light sky blue
  },
  {
    id: 3,
    bgSource: "https://picsum.photos/id/1025/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "alex.dev",
    realName: "Alex Morgan",
    userDescription: "Full-stack developer | MERN",
    mediaCount: 150,
    followerCount: 4200,
    followingCount: 350,
    cardBg: "#F0FDF4" // light mint green
  },
  {
    id: 4,
    bgSource: "https://picsum.photos/id/1035/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/45.jpg",
    userName: "em.designs",
    realName: "Emily Carter",
    userDescription: "Product designer & illustrator",
    mediaCount: 210,
    followerCount: 5200,
    followingCount: 410,
    cardBg: "#FFF7ED" // light peach
  },
  {
    id: 5,
    bgSource: "https://picsum.photos/id/1043/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/54.jpg",
    userName: "rahul.tech",
    realName: "Rahul Sharma",
    userDescription: "Node.js backend engineer",
    mediaCount: 75,
    followerCount: 1800,
    followingCount: 95,
    cardBg: "#FDF4FF" // light lavender
  },
  {
    id: 6,
    bgSource: "https://picsum.photos/id/1050/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/60.jpg",
    userName: "neha.ui",
    realName: "Neha Verma",
    userDescription: "UI/UX designer | Figma",
    mediaCount: 134,
    followerCount: 2600,
    followingCount: 210,
    cardBg: "#ECFEFF" // light cyan
  },
  {
    id: 7,
    bgSource: "https://picsum.photos/id/1060/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/67.jpg",
    userName: "mike.codes",
    realName: "Mike Johnson",
    userDescription: "Clean code & coffee ☕",
    mediaCount: 98,
    followerCount: 1500,
    followingCount: 180,
    cardBg: "#FFF1F2" // light rose
  },
  {
    id: 8,
    bgSource: "https://picsum.photos/id/1070/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/72.jpg",
    userName: "ananya.creates",
    realName: "Ananya Singh",
    userDescription: "Digital artist & creator",
    mediaCount: 300,
    followerCount: 8200,
    followingCount: 540,
    cardBg: "#FAF5FF" // light purple
  },
  {
    id: 9,
    bgSource: "https://picsum.photos/id/1080/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/80.jpg",
    userName: "rohan.ai",
    realName: "Rohan Mehta",
    userDescription: "AI & ML explorer",
    mediaCount: 65,
    followerCount: 1900,
    followingCount: 140,
    cardBg: "#F8FAFC"
  },
  {
    id: 10,
    bgSource: "https://picsum.photos/id/109/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/81.jpg",
    userName: "lucy.dev",
    realName: "Lucy Brown",
    userDescription: "JavaScript everyday",
    mediaCount: 145,
    followerCount: 3600,
    followingCount: 290,
    cardBg: "#F0F9FF"
  },
  {
    id: 11,
    bgSource: "https://picsum.photos/id/110/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/91.jpg",
    userName: "dan.tech",
    realName: "Daniel Smith",
    userDescription: "Tech blogger & mentor",
    mediaCount: 190,
    followerCount: 4700,
    followingCount: 360,
    cardBg: "#F0FDF4"
  },
  {
    id: 12,
    bgSource: "https://picsum.photos/id/111/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/90.jpg",
    userName: "pooja.codes",
    realName: "Pooja Nair",
    userDescription: "Software engineer @startup",
    mediaCount: 88,
    followerCount: 2100,
    followingCount: 160,
    cardBg: "#FFF7ED"
  },
  {
    id: 13,
    bgSource: "https://picsum.photos/id/112/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/97.jpg",
    userName: "kevin.ui",
    realName: "Kevin Lee",
    userDescription: "Minimal UI is ❤️",
    mediaCount: 112,
    followerCount: 2800,
    followingCount: 220,
    cardBg: "#FDF4FF"
  },
  {
    id: 14,
    bgSource: "https://picsum.photos/id/113/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/98.jpg",
    userName: "isha.design",
    realName: "Isha Kapoor",
    userDescription: "Design systems & branding",
    mediaCount: 260,
    followerCount: 6900,
    followingCount: 500,
    cardBg: "#ECFEFF"
  },
  {
    id: 15,
    bgSource: "https://picsum.photos/id/114/900/450",
    profileSource: "https://randomuser.me/api/portraits/men/99.jpg",
    userName: "omar.codes",
    realName: "Omar Ali",
    userDescription: "Backend APIs & databases",
    mediaCount: 73,
    followerCount: 1300,
    followingCount: 100,
    cardBg: "#FFF1F2"
  },
  {
    id: 16,
    bgSource: "https://picsum.photos/id/115/900/450",
    profileSource: "https://randomuser.me/api/portraits/women/99.jpg",
    userName: "zoya.dev",
    realName: "Zoya Khan",
    userDescription: "Building cool web apps 🚀",
    mediaCount: 155,
    followerCount: 3400,
    followingCount: 270,
    cardBg: "#FAF5FF"
  }
];


  return (
    <div className="flex flex-wrap gap-8 p-6">
      {cardData.map((card) => (
        <div key={card.id} className="flex-[1_1_300px] max-w-[360px]">
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardPage;
