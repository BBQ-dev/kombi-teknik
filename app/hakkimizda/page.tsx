import React from 'react';
import Link from 'next/link';
import { Menu, ThermometerSun, PhoneCall, ChevronDown, ShieldCheck, Users, Award, Target } from 'lucide-react';

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ThermometerSun className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-black text-slate-900 tracking-tight">
              İstanbul Kombi<span className="text-orange-500">Teknik</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-8">
                Hizmetler <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-20 left-0 w-56 bg-white shadow-xl border border-slate-100 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/kombi-tamiri" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors">Kombi Tamiri & Onarım</Link>
                  <Link href="/kombi-bakimi" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Periyodik Kombi Bakımı</Link>
                  <Link href="/petek-temizligi" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Makineli Petek Temizliği</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-8">
                Hizmet Bölgeleri <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-20 left-0 w-48 bg-white shadow-xl border border-slate-100 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/bolgeler/cekmekoy" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors">Çekmeköy</Link>
                  <Link href="/bolgeler/sancaktepe" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Sancaktepe</Link>
                  <Link href="/bolgeler/sultanbeyli" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Sultanbeyli</Link>
                  <Link href="/bolgeler/umraniye" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Ümraniye</Link>
                  <Link href="/bolgeler/kadikoy" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Kadıköy</Link>
                </div>
              </div>
            </div>

            <Link href="/hakkimizda" className="text-orange-500 transition-colors py-8">Hakkımızda</Link>
            <Link href="/sss" className="hover:text-orange-500 transition-colors py-8">SSS</Link>
            <Link href="/#iletisim" className="hover:text-orange-500 transition-colors py-8">İletişim</Link>
          </nav>

          <button className="p-2 text-slate-600 hover:text-orange-500 transition-colors lg:hidden">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Hakkımızda</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            İstanbul Anadolu yakasında güvenilir, şeffaf ve profesyonel kombi teknik servis çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">İstanbul Kombi Teknik</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
                Yılların Tecrübesiyle Güvenilir Servis Hizmeti
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                İstanbul Kombi Teknik olarak, kombi arızaları, periyodik bakımlar ve petek temizliği alanlarında uzmanlaşmış ekibimizle hizmet veriyoruz. Sancaktepe merkezli operasyon ağımızla Çekmeköy, Sultanbeyli, Ümraniye ve Kadıköy başta olmak üzere tüm Anadolu yakasına hızlı mobil servis imkanı sunmaktayız.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Müşteri memnuniyetini her zaman ön planda tutarak; orijinal yedek parça kullanımı, şeffaf fiyat politikası ve 1 yıl işçilik garantisiyle çalışıyoruz.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <span className="block text-2xl font-extrabold text-orange-500">7/24</span>
                  <span className="text-sm text-slate-600 font-medium">Acil Destek</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-extrabold text-slate-900">%100</span>
                  <span className="text-sm text-slate-600 font-medium">Müşteri Memnuniyeti</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">1 Yıl Garanti</h3>
                <p className="text-sm text-slate-600">Tüm tamirat ve parça değişimlerinde güvence.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Uzman Ekip</h3>
                <p className="text-sm text-slate-600">Sertifikalı ve deneyimli teknisyenler.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <Award className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Orijinal Parça</h3>
                <p className="text-sm text-slate-600">Üretici onaylı yedek parça temini.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Şeffaf Fiyat</h3>
                <p className="text-sm text-slate-600">Sürpriz maliyet yok, net fiyatlandırma.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <ThermometerSun className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-black text-white tracking-tight">
                İstanbul Kombi<span className="text-orange-500">Teknik</span>
              </span>
            </div>
            <p className="text-sm">İstanbul genelinde güvenilir, hızlı ve garantili kombi teknik servis hizmetleri.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li>0 (536) 549 93 49</li>
              <li>info@istanbulkombiteknik.com.tr</li>
              <li>Meclis, Semih Sancar Cd. No:15, 34785 Sancaktepe/İstanbul</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Hizmet Bölgeleri</h4>
            <p className="text-sm leading-relaxed">
              Çekmeköy, Sancaktepe, Sultanbeyli, Ümraniye ve Kadıköy bölgelerine hizmet veriyoruz.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>© 2026 İstanbul Kombi Teknik. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}