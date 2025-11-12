'use client'
import Image from 'next/image'

export default function LogoMarqueeSection() {
  const logosRow1 = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  ]

  const logosRow2 = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  ]

  const logosRow3 = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  ]

  type LogoRowProps = {
    logos: string[];
    reverse?: boolean;
  };

  const LogoRow: React.FC<LogoRowProps> = ({ logos, reverse = false }) => (
    <div className="relative w-full overflow-hidden">
      <div className={`flex ${reverse ? 'marquee-reverse' : 'marquee'} gap-4`}>
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-[#111] border border-[#454545] rounded-xl shadow-sm 
                       p-1.5 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px]
                       flex items-center justify-center hover:border-blue-500 transition-all duration-200"
          >
            <Image
              src={src}
              alt={`logo-${i}`}
              width={30}
              height={30}
              className="object-contain opacity-85 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="bg-[#1E1E1E] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Expertise Across
          <br />
          <span className="animated-gradient-text">Modern Technologies</span> & Frameworks
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mt-4">
          Building high-performance WordPress solutions with modern themes, plugins, and SEO-optimized websites.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-[1000px] mx-auto">
        <LogoRow logos={logosRow1} />
        <LogoRow logos={logosRow2} reverse />
        <LogoRow logos={logosRow3} />
      </div>
    </section>
  )
}
