import React from "react";

interface Member {
  id: number;
  name: string;
  role: string;
  website: string;
  photoUrl: string;
  socialLinks: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

const abhishekportfolioUrl = "https://abhisheksangwan-github-io.vercel.app";

const members: Member[] = [
  {
    id: 1,
    name: "Shaily Pandey",
    role: "Founder & CEO",
    website: "",
    photoUrl: "lovable-uploads/shaily.jpg",
    socialLinks: {
      linkedin: "https://google.com",
    },
  },
  {
    id: 2,
    name: "Kavya Singh Dogra",
    role: "Co-Founder & Chief Operating Officer (COO)",
    website: "",
    photoUrl: "lovable-uploads/maledummy.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 3,
    name: "Nitesh Verma",
    role: "Chief Field Officer (CFO)",
    website: "",
    photoUrl: "lovable-uploads/maledummy.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 4,
    name: "Abhishek Sangwan",
    role: "Chief Technology Officer (CTO)",
    website: abhishekportfolioUrl,
    photoUrl: "lovable-uploads/maledummy.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
];

const socialIcons = {
  linkedin: (
    <svg
      className="w-5 h-5 text-blue-600 hover:text-blue-800"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.59c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13 12.59h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-11h3v1.5c.63-.89 2.08-1.5 3.5-1.5 2.48 0 4.5 2 4.5 4.5v6.5z" />
    </svg>
  ),
  facebook: (
    <svg
      className="w-5 h-5 text-blue-800 hover:text-blue-900"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22.675 0h-21.35c-.73 0-1.325.596-1.325 1.324v21.352c0 .73.596 1.324 1.324 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.595 1.324-1.324v-21.35c0-.73-.594-1.325-1.324-1.325z" />
    </svg>
  ),
  twitter: (
    <svg
      className="w-5 h-5 text-sky-500 hover:text-sky-700"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M24 4.557a9.834 9.834 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482 13.944 13.944 0 01-10.125-5.138 4.922 4.922 0 001.523 6.573 4.9 4.9 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.92 4.92 0 004.601 3.419 9.868 9.868 0 01-6.102 2.104c-.395 0-.786-.023-1.17-.067a13.933 13.933 0 007.548 2.213c9.057 0 14.01-7.514 14.01-14.02 0-.213-.005-.425-.014-.636a10.012 10.012 0 002.46-2.557z" />
    </svg>
  ),
  google: (
    <svg
      className="w-5 h-5 text-red-600 hover:text-red-800"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M21.805 10.023h-9.51v3.954h5.446c-.237 1.354-1.584 3.976-5.446 3.976-3.273 0-5.954-2.704-5.954-6.032s2.681-6.032 5.954-6.032c1.86 0 3.11.793 3.829 1.479l2.608-2.507C16.364 4.911 14.46 4 12.295 4 7.412 4 3.354 7.998 3.354 13.147c0 5.15 4.058 9.148 8.94 9.148 5.156 0 8.587-3.615 8.587-8.714 0-.589-.063-1.04-.076-1.558z" />
    </svg>
  ),
  instagram: (
    <svg
      className="w-5 h-5 text-pink-600 hover:text-pink-800"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.5 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  ),
  youtube: (
    <svg
      className="w-5 h-5 text-red-700 hover:text-red-900"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19.615 3.184c-1.767-.13-7.912-.13-7.912-.13s-6.146 0-7.913.13c-1.936.145-3.154 1.476-3.25 3.543-.12 2.839-.12 8.776-.12 8.776s0 5.938.12 8.776c.096 2.067 1.314 3.399 3.25 3.543 1.767.13 7.913.13 7.913.13s6.145 0 7.912-.13c1.936-.145 3.154-1.476 3.25-3.543.12-2.839.12-8.776.12-8.776s0-5.938-.12-8.776c-.096-2.067-1.314-3.399-3.25-3.543zm-11.24 12.222v-6.82l5.86 3.41-5.86 3.41z" />
    </svg>
  ),
};

const FoundingTeam: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Founding Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition hover:scale-105"
            >
              <div className="w-40 h-48 rounded-md overflow-hidden border border-gray-200 shadow-sm mb-4">
                <img
                  src={member.photoUrl}
                  alt={`Portrait of ${member.name}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c63f6ff5-a887-463f-8aab-7300104523c4.png";
                  }}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-gray-600 italic text-center">{member.role}</p>
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words text-center mb-4"
              >
                {member.website.replace(/^https?:\/\//, "")}
              </a>
              <div className="flex space-x-3">
                {Object.entries(member.socialLinks).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="cursor-pointer"
                  >
                    {socialIcons[key as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingTeam;
