import React from 'react';
import Providers from '@/app/components/providers';
import './globals.css';

export interface IRootLayoutProps {
  children: React.ReactNode;
  hero: React.ReactNode;
  products: React.ReactNode;
  inspiration: React.ReactNode;
  tipsTricks: React.ReactNode;
  funiroFurniture: React.ReactNode;
  footer: React.ReactNode;
}

export default function RootLayout({
  children,
  hero,
  products,
  inspiration,
  tipsTricks,
  funiroFurniture,
  footer,
}: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-gilroylight">
        <Providers>
          <div className="w-full max-w-[1440px] mx-auto overflow-hidden">
            <main className="">
              {children}
              <div className="relative w-full bg-[#FCF8F3] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full before:bg-[#F9F1E7]">
                <section className="w-full max-w-[1240px] mx-auto relative z-10">
                  {hero}
                </section>
              </div>

              <section className="w-full max-w-[1240px] mx-auto">
                {products}
              </section>
              <div className="w-full bg-[#FCF8F3]">
                <section className="w-full max-w-[1240px] mx-auto">
                  {inspiration}
                </section>
              </div>
              <section className="w-full max-w-[1240px] mx-auto">
                {tipsTricks}
              </section>
              <section className="w-full max-w-[1240px] mx-auto">
                {funiroFurniture}
              </section>
            </main>
            <footer className="w-full max-w-[1240px] mx-auto">{footer}</footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
